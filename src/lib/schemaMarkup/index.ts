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
			logo: "https://stablestudio.org/stablestudio-large.svg",
			name: "Stable Studio",
			url: "https://stablestudio.org/",
		},
		{
			"@type": "ProfilePage",
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
			mainEntity: { "@id": "https://stablestudio.org/#sam" },
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
			breadcrumb: { "@id": "https://stablestudio.org/#breadcrumb" },
			description:
				"Stable Studio is a freelancers studio that makes animations-rich websites. We prioritize user experience, website profile and development speed.",
		},
		{
			"@type": "BreadcrumbList",
			"@id": "https://stablestudio.org/#breadcrumb",
			numberOfItems: 6,
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "Home",
					item: "https://stablestudio.org/#top",
				},
				{
					"@type": "ListItem",
					position: 2,
					name: "Services",
					item: "https://stablestudio.org/#serice",
				},
				{
					"@type": "ListItem",
					position: 3,
					name: "Development Process",
					item: "https://stablestudio.org/#process",
				},
				{
					"@type": "ListItem",
					position: 4,
					name: "Pricing",
					item: "https://stablestudio.org/#price",
				},
				{
					"@type": "ListItem",
					position: 1,
					name: "Vision",
					item: "https://stablestudio.org/#vision",
				},
				{
					"@type": "ListItem",
					position: 1,
					name: "Get Started",
					item: "https://stablestudio.org/#getstarted",
				},
			],
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
		},
		{
			"@type": "WebSite",
			name: "https://stablestudio.org",
			"@id": "https://stablestudio.org/#website",
			potentialAction: {
				"@type": "InteractAction",
				name: "Contact",
				description: "Contact Stable Studio and launch your website now.",
				participant: {
					"@id": "https://stablestudio.org/#organization",
				},
				target: [
					{
						"@type": "EntryPoint",
						urlTemplate: "https://stablestudio/#contactForm",
						actionPlatform: [
							"http://schema.org/DesktopWebPlatform",
							"http://schema.org/IOSPlatform",
							"http://schema.org/AndroidPlatform",
						],
					},
					{
						"@type": "EntryPoint",
						urlTemplate: "https://stablestudio.org/wrangler",
						actionPlatform: [
							"http://schema.org/DesktopWebPlatform",
							"http://schema.org/IOSPlatform",
							"http://schema.org/AndroidPlatform",
						],
						contentType: "application/json",
						httpMethod: "POST",
					},
				],
			},
		},
	],
};

const creditsSchemaMarkup: Graph = {
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
			logo: "https://stablestudio.org/stablestudio-large.svg",
			name: "Stable Studio",
			url: "https://stablestudio.org/",
		},
		{
			"@type": "ProfilePage",
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
			mainEntity: { "@id": "https://stablestudio.org/#sam" },
			name: "Stable Studio",
			specialty: {
				"@type": "Specialty",
				name: "Web Development",
			},
			lastReviewed: "2024-11-15",
			publisher: { "@id": "https://stablestudio.org/#sam" },
			description:
				"Stable Studio is a freelancers studio that makes animations-rich websites. We prioritize user experience, website profile and development speed.",
		},
		{
			"@type": "ProfessionalService",
			image: [
				"https://stablestudio.org/stablestudio-large.png",
				"https://stablestudio.org/screenshot.png",
				"https://stablestudio.org/screenshot-small.png",
			],
			name: "Stable Studio",
			address: {
				"@type": "PostalAddress",
				streetAddress:
					"RM A07, 1701-02 New Trend Centre, 704 Prince Edward Road East",
				addressLocality: "Kowloon",
				addressRegion: "HK",
				addressCountry: "HK",
			},
			review: {
				"@type": "Review",
				reviewRating: {
					"@type": "Rating",
					ratingValue: 4.8,
					bestRating: 5,
				},
			},
			url: "https://stablestudio.org",
			priceRange: "$$",
			openingHoursSpecification: [
				{
					"@type": "OpeningHoursSpecification",
					dayOfWeek: [
						"Monday",
						"Tuesday",
						"Wednesday",
						"Thursday",
						"Friday",
						"Saturday",
						"Sunday",
					],
					opens: "00:00",
					closes: "23:59",
				},
			],
		},
	],
};

export { indexSchemaMarkup, creditsSchemaMarkup };
