import { defineMiddleware } from "astro:middleware";
import { isAvailableLanguageTag, sourceLanguageTag } from "./paraglide/runtime";

// this middleware is mostly for dev only
// vercel has its own middleware logic and most likely so does cloudflare pages
// the edgemiddleware option in vercel integration does not work with rewrites and I suggest writing your own

// i18n logic:
// if url doesnt have lang in first segment, resolve the lang based on
// 			1.cookie 2.accept-language header 3.fallback to default
//      if lang turns out to be default, do a rewrite instead of redirect so url remains the same
// if url has lang in first segment, check if its a valid lang, if not do the steps above, if valid then leave it to astro

// assume default is en, resolved lang is en
// null -> /
// / -> /
// /en -> /en
// /en/ -> /en/
// /ja/ -> /ja/

// assume default is en, resolved lang is ja
// null -> /ja/
// / -> /ja/
// /en -> /en
// /en/ -> /en/
// /ja/ -> /ja/

// unsupported lang -> default lang

// ONLY THE INDEX.ASTRO is SSR, all other pages in lang folder are SSG
// since if the lang is specified in the url, we should not further redirect the user

export const onRequest =
	import.meta.env.MODE === "development" &&
	defineMiddleware(async (ctx, next) => {
		const firstSegment = ctx.url.pathname.split("/")[1] as string | undefined;
		if (firstSegment?.startsWith("_") || firstSegment?.startsWith("manifest.webmanifest") || firstSegment?.startsWith("api") || firstSegment?.startsWith("wrangler"))
			return next();
		if (isAvailableLanguageTag(firstSegment)) return next();

		const acceptLanguage = ctx.request.headers.get("accept-language");

		let lang: string | undefined = ctx.cookies.get("lang")?.value;

		if (acceptLanguage) {
			lang = lang ?? acceptLanguage.split(";")[0]?.split(",")[0];
		}

		if (!lang || !isAvailableLanguageTag(lang)) lang = sourceLanguageTag; // fallback to default lang

		if (lang === sourceLanguageTag)
			return ctx.rewrite(`/${sourceLanguageTag}${ctx.url.pathname}`);

		return ctx.redirect(`/${lang}${ctx.url.pathname}`);
	});
