// @ts-check
import { defineConfig } from "astro/config";
import paraglide from "@inlang/paraglide-astro";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import astroMetaTags from "astro-meta-tags";
import AstroPWA from "@vite-pwa/astro";

// https://astro.build/config
export default defineConfig({
	site: "https://stablestudio.org",
	output: "hybrid",
	adapter: vercel({
		// edgeMiddleware: true,
	}),
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
		AstroPWA({
			includeAssets: [
				"favicon.ico",
				"favicon.svg",
				"apple-touch-icon.png",
				"icon-192.png",
				"icon-512.png",
				"icon-64.png",
				"icon-mask.png",
			],
			manifest: {
				name: "Stable Studio",
				short_name: "Stable Studio",
				description:
					"Stable Studio is a freelancers studio that makes animations-rich websites. We prioritize user experience, website profile and development speed.",
				theme_color: "#262625",
				icons: [
					{ src: "icon-192.png", type: "image/png", sizes: "192x192" },
					{ src: "icon-64.png", type: "image/png", sizes: "64x64" },
					{ src: "apple-touch-icon.png", type: "image/png", sizes: "180x180" },
					{
						src: "icon-mask.png",
						type: "image/png",
						sizes: "512x512",
						purpose: "maskable",
					},
					{ src: "icon-512.png", type: "image/png", sizes: "512x512", purpose: "any" },
				],
			},
		}),
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
		routing: "manual",
	},
});
