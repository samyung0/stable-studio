// vercel edge middleware

import { isAvailableLanguageTag, sourceLanguageTag } from "@/paraglide/runtime";
import {rewrite, next, type RequestContext} from "@vercel/edge"

// runs on every route

export default function middleware(request: Request, context: RequestContext) {
  console.log("vercel middleware.ts");

  const url = new URL(request.url);
	const firstSegment = url.pathname.split("/")[1] as string | undefined;
	if(isAvailableLanguageTag(firstSegment)) return next();

	const acceptLanguage = request.headers.get("accept-language");

  const cookies = request.headers.getSetCookie();
  const langCookie = cookies.find(cookie => cookie.startsWith("lang="));
	let lang: string | undefined = langCookie?.split("=", 2)[1];

	// Try to use user language
	if (acceptLanguage) {
		lang = lang ?? acceptLanguage.split(";")[0]?.split(",")[0];
	}

	if (!lang || !isAvailableLanguageTag(lang)) lang = sourceLanguageTag; // fallback to default lang

	console.log(lang, sourceLanguageTag);

	if(lang === sourceLanguageTag) return rewrite(`/${sourceLanguageTag}${url.pathname}`);

	return Response.redirect(`/${lang}${url.pathname}`);
}