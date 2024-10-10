import { type Graph } from "schema-dts";

const indexSchemaMarkup: Graph = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Person",
			"@id": "https://sam.partialty.com/#sam",
			name: "Sam Yung",
			url: "https://sam.partialty.com/",
			additionalName: "Yung Chin Pang",
			birthDate: "2002-08-19",
			email: "yungchinpang9@gmail.com",
			sameAs: ["https://www.linkedin.com/in/yung-chin-pang-14ba7b1a4/"],
			familyName: "Yung",
			givenName: "Sam",
			gender: "Male",
			alumniOf: { "@id": "https://sam.partialty.com/#alumni" },
			affiliation: { "@id": "https://sam.partialty.com/#organization" },
			image:
				"https://sam.partialty.com/_image?href=%2F_astro%2Fprofile.Cs45b1KG.jpg&q=low&f=webp",
			hasOccupation: { "@id": "https://sam.partialty.com/#occupation" },
			subjectOf: { "@id": "https://sam.partialty.com/#website" },
			mainEntityOfPage: { "@id": "https://sam.partialty.com/" },
			nationality: "Hong Kong",
		},
		{
			"@type": "Organization",
			"@id": "https://sam.partialty.com/#organization",
			email: "customer@partialty.com",
			founder: { "@id": "https://sam.partialty.com/#sam" },
			foundingDate: "2023-01-12",
			keywords:
				"Partialty, E-learning, Education, Technology, Web Dev, React JS, Next JS, TypeScript, Javascript, HTML, CSS, JS, Software Development, Front-end, Fullstack, VS Code",
			logo: "https://sam.partialty.com/_image?href=%2F_astro%2Fpartialty.DtNZG1tt.svg&f=svg",
			name: "Partialty",
			url: "https://partialty.com/",
		},
		{
			"@type": "EducationalOrganization",
			"@id": "https://sam.partialty.com/#alumni",
			name: "The University of Hong Kong",
			alumni: { "@id": "https://sam.partialty.com/#sam" },
			url: "https://hku.hk/",
			location: "Pokfulam, Hong Kong",
			address: "The University of Hong Kong, Pokfulam, Hong Kong",
			telephone: "+852 2859 2111",
			faxNumber: "+852 2858 2549",
		},
		{
			"@type": "Occupation",
			"@id": "https://sam.partialty.com/#occupation",
			mainEntityOfPage: { "@id": "https://sam.partialty.com/#website" },
			educationRequirements: {
				"@type": "EducationalOccupationalCredential",
				credentialCategory: "Bachelor's degree",
				educationalLevel: "Advanced",
			},
			estimatedSalary: {
				"@type": "MonetaryAmountDistribution",
				name: "base",
				currency: "USD",
				duration: "P1Y",
				percentile10: 100000.5,
				percentile25: 115000,
				median: 120000.28,
				percentile75: 130000,
				percentile90: 150000,
			},
			experienceRequirements: "Expertise in mobile app development",
			occupationalCategory: "Software Development",
			occupationLocation: {
				"@type": "City",
				name: "Hong Kong",
			},
			name: "Software Engineer",
			description: "Software Engineer at Partialty",
			qualifications: "Bachelor's degree in Computer Science",
			skills:
				"Typescript, React Native, Mobile App Development, Web Development, Front-end Development, Fullstack Development, Tailwind CSS, Firebase, Backend",
			responsibilities:
				"Lead developer to make a realtime AI travel app that recommends travel destinations based on user's personalities. Structure the app with React Native, React Query, Zustand, Firebase, and Tailwind CSS. Perform code review and mentor junior developers. Carry out testing.",
			image:
				"https://sam.partialty.com/_image?href=%2F_astro%2Fsoftware-engineer.Cs45b1KG.jpg&q=low&f=webp",
		},
		{
			"@type": "AboutPage",
			"@id": "https://sam.partialty.com/#website",
			url: "https://sam.partialty.com/",
			name: "Sam's Website",
			publisher: { "@id": "https://sam.partialty.com/#sam" },
			mainEntity: { "@id": "https://sam.partialty.com/#sam" },
			description: "Sam Yung's personal website",
		},
	],
};

export { indexSchemaMarkup };
