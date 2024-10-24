// vercel edge middleware

// import { isAvailableLanguageTag, langImport.sourceLanguageTag } from "@/paraglide/runtime";
import langImport from "./lang.ts"
import {rewrite, next, type RequestContext} from "@vercel/edge"

export const config = {
  matcher: ['/((?!api|_astro|favicon.ico|favicon.svg|robots.txt|sitemap-.*.xml).*)'],
}

// runs on every route

export default function middleware(request: Request, context: RequestContext) {
  console.log("vercel middleware.ts");

  const url = new URL(request.url);
	const firstSegment = url.pathname.split("/")[1] as string | undefined;
	if(firstSegment && langImport.languageTags.includes(firstSegment)) return next();

	const acceptLanguage = request.headers.get("accept-language");

  const cookies = request.headers.getSetCookie();
  const langCookie = cookies.find(cookie => cookie.startsWith("lang="));
	let lang: string | undefined = langCookie?.split("=", 2)[1];

	// Try to use user language
	if (acceptLanguage) {
		lang = lang ?? acceptLanguage.split(";")[0]?.split(",")[0];
	}

	if (!lang || !langImport.languageTags.includes(lang)) lang = langImport.sourceLanguageTag; // fallback to default lang

	console.log(lang, langImport.sourceLanguageTag);

	if(lang === langImport.sourceLanguageTag) return rewrite(`/${langImport.sourceLanguageTag}${url.pathname}`);

	return Response.redirect(`/${lang}${url.pathname}`);
}