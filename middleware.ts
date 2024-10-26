// vercel edge middleware

// import { isAvailableLanguageTag, langImport.sourceLanguageTag } from "@/paraglide/runtime";
import { rewrite, next, type RequestContext } from "@vercel/edge";

const langImport = {
	sourceLanguageTag: "en",
	languageTags: ["en", "ja", "tl", "id", "zh-HK", "zh-CN", "vi", "zh-TW", "zh"],
};

function setCookie(name: string, value: string) {
	const date = new Date();
	date.setTime(date.getTime() + 9999 * 24 * 60 * 60 * 1000);
	const expires = "; Expires=" + date.toUTCString();
	return (
		name + "=" + (value || "") + expires + "; Path=/; SameSite=Lax; Secure"
	);
}

export const config = {
	matcher: [
		"/((?!api|_astro|_image|manifest.webmanifest|favicon.ico|favicon.svg|analytics.js|robots.txt|wrangler|sitemap.*.xml|stablestudio.*.svg|stablestudio.*.png|sw.js|workbox-.*.js|registerSW.js|icon-.*.png|apple-touch-icon.png).*)",
	],
};

export default function middleware(request: Request, context: RequestContext) {
	try {
		const url = new URL(request.url);
		const firstSegment = url.pathname.split("/")[1] as string | undefined;
		if (firstSegment && langImport.languageTags.includes(firstSegment)) {
			const headers = new Headers();
			headers.append("Set-Cookie", setCookie("lang", firstSegment));

			return next({
				headers,
			});
		}

		const acceptLanguage = request.headers.get("accept-language");

		// getsetcookies do not work lol
		const cookies = request.headers.get("cookie")?.split("; ") ?? [];
		console.log("Cookies: ", cookies);
		const langCookie = cookies.find((cookie) => cookie.startsWith("lang="));
		let lang: string | undefined = langCookie?.split("=", 2)[1];

		if (acceptLanguage) {
			lang = lang ?? acceptLanguage.split(";")[0]?.split(",")[0];
		}

		if (!lang || !langImport.languageTags.includes(lang))
			lang = langImport.sourceLanguageTag; // fallback to default lang

		url.pathname = `/${lang}${url.pathname}`;
		if (!url.pathname.endsWith("/")) url.pathname += "/";

		if (lang === langImport.sourceLanguageTag)
			return rewrite(url.pathname, {
				headers: {
					"Set-Cookie": setCookie("lang", lang),
				},
			});

		return new Response(null, {
			status: 302,
			headers: {
				"Set-Cookie": setCookie("lang", lang),
				Location: url.pathname,
			},
		});
	} catch (e) {
		console.error(e);

		// absolute fallback of fallback
		return Response.redirect(
			`https://stablestudio.org/${langImport.sourceLanguageTag}/`,
		);
	}
}
