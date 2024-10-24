// vercel edge middleware

// import { isAvailableLanguageTag, langImport.sourceLanguageTag } from "@/paraglide/runtime";
import { rewrite, next, type RequestContext } from "@vercel/edge";

const langImport = {
	sourceLanguageTag: "en",
	languageTags: ["en", "ja", "tl", "id", "zh-HK", "zh-CN", "vi", "zh-TW", "zh"],
};

export const config = {
	matcher: [
		"/((?!api|_astro|favicon.ico|favicon.svg|robots.txt|sitemap.*.xml).*)",
	],
};

export default function middleware(request: Request, context: RequestContext) {
	console.log("vercel middleware.ts");

	try {
		const url = new URL(request.url);
		const firstSegment = url.pathname.split("/")[1] as string | undefined;
		if (firstSegment && langImport.languageTags.includes(firstSegment))
			return next();

		const acceptLanguage = request.headers.get("accept-language");

		const cookies = request.headers.getSetCookie();
		const langCookie = cookies.find((cookie) => cookie.startsWith("lang="));
		let lang: string | undefined = langCookie?.split("=", 2)[1];

		// Try to use user language
		if (acceptLanguage) {
			lang = lang ?? acceptLanguage.split(";")[0]?.split(",")[0];
		}

		if (!lang || !langImport.languageTags.includes(lang))
			lang = langImport.sourceLanguageTag; // fallback to default lang

		url.pathname = `/${lang}${url.pathname}`;
		if (!url.pathname.endsWith("/")) url.pathname += "/";

		console.log(lang, langImport.sourceLanguageTag, url.pathname);

		if (lang === langImport.sourceLanguageTag) return rewrite(url.pathname);

		return Response.redirect(url.toString());
	} catch (e) {
		console.error(e);

    // absolute fallback of fallback
		return Response.redirect(`https://stablestudio.org/${langImport.sourceLanguageTag}/`);
	}
}
