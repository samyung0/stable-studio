// @ts-check
import { defineConfig } from "astro/config";
import paraglide from '@inlang/paraglide-astro'
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import astroMetaTags from "astro-meta-tags";

// https://astro.build/config
export default defineConfig({
	site: "https://stablestudio.org",
	output: "hybrid",
	adapter: vercel(),
	integrations: [
		paraglide({
			project: "./project.inlang",
			outdir: "./src/paraglide",
		}),
		sitemap(),
		tailwind({
			applyBaseStyles: false,
		}),
		astroMetaTags(),
		// react({
		//         include: "**/react/**/*"
		// }),
	],
	prefetch: {
		defaultStrategy: "viewport",
		prefetchAll: true,
	},
	image: {
		remotePatterns: [{ protocol: "https" }],
	},
	i18n: {
		defaultLocale: "en",
		locales: ["en", "ja", "tl", "id", "zh-HK", "zh-CN", "vi", "zh-TW", "zh"],
		routing: "manual"
	},
});
