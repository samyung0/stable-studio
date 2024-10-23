import { type Graph } from "schema-dts";

const indexSchemaMarkup: Graph = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Person",
			"@id": "https://stablestudio.org/#sam",
			name: "Sam Yung",
			url: "https://stablestudio.org/",
			additionalName: "Yung Chin Pang",
			birthDate: "2002-08-19",
			email: "yungchinpang9@gmail.com",
			sameAs: [
				"https://sam.partialty.com",
				"https://www.linkedin.com/in/yung-chin-pang-14ba7b1a4/",
			],
			familyName: "Yung",
			givenName: "Sam",
			gender: "Male",
			image:
				"https://sam.partialty.com/_image?href=%2F_astro%2Fprofile.Cs45b1KG.jpg&q=low&f=webp",
			nationality: "Hong Kong",
		},
		{
			"@type": "Organization",
			"@id": "https://stablestudio.org/#organization",
			email: "samyung@partialty.com",
			founder: { "@id": "https://stablestudio.org/#sam" },
			foundingDate: "2024-11-15",
			keywords:
				"Stable Studio, Web Development, Custom Websites, Freelancers, SEO, Optimization, Animation, GSAP, Animated Websites, Technology, Web Dev, React JS, Next JS, TypeScript, Javascript, HTML, CSS, JS, Software Development, Front-end, Fullstack, VS Code",
			logo: "https://stablestudio.org/_image?href=%2F_astro%2Fpartialty.DtNZG1tt.svg&f=svg", // TODO: replace logo
			name: "Stable Studio",
			url: "https://stablestudio.org/",
		},
		{
			"@type": "WebPage",
			"@id": "https://stablestudio.org/#website",
			url: "https://stablestudio.org/",
			mainContentOfPage: {
				"@type": "WebPageElement",
				cssSelector: "#schemaMarkupMain",
			},
			relatedLink: "https://sam.partialty.com",
			significantLink: "https://sam.partialty.com",
			speakable: {
				"@type": "SpeakableSpecification",
				cssSelector: "p, h1, h2, h3, h4, h5, h6, span, a, li",
			},
			name: "Stable Studio",
			specialty: {
				"@type": "Specialty",
				name: "Web Development",
			},
			offers: [
				{
					"@id": "https://stablestudio.org/#oneoffoffer",
				},
				{
					"@id": "https://stablestudio.org/#monthlyoffer",
				},
			],
			lastReviewed: "2024-11-15",
			publisher: { "@id": "https://stablestudio.org/#sam" },
			description:
				"Stable Studio is a freelancers studio that makes animations-rich websites. We prioritize user experience, website profile and development speed.",
		},
		{
			"@type": "Offer",
			"@id": "https://stablestudio.org/#oneoffoffer",
			name: "One-off",
			url: "http://stablestudio.org/#pricing",
			priceCurrency: "USD",
			price: "780.00",
			priceSpecification: {
				"@type": "UnitPriceSpecification",
				minPrice: "780.00",
				priceCurrency: "USD",
			},
			offeredBy: { "@id": "https://stablestudio.org/#organization" },
		},
		{
			"@type": "Offer",
			"@id": "https://stablestudio.org/#monthlyoffer",
			name: "Monthly Subscription",
			url: "http://stablestudio.org/#pricing",
			priceCurrency: "USD",
			price: "110.00",
			priceSpecification: {
				"@type": "UnitPriceSpecification",
				priceCurrency: "USD",
				minPrice: "780.00",
				unitCode: "MON",
			},
			offeredBy: { "@id": "https://stablestudio.org/#organization" },
			potentialAction: {
				"@type": "InteractAction",
				name: "Contact",
				description: "Contact Stable Studio and launch your website now.",
				participant: {
					"@id": "https://stablestudio.org/#organization",
				},
				target: [
					"https://stablestudio/#contactForm",
					"https://stablestudio.org/wrangler",
				],
			},
		},
	],
};

export { indexSchemaMarkup };
