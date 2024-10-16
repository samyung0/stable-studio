import { useEffect, useState } from "react";

export default function () {
	const [globeLoaded, setGlobeLoaded] = useState(false);
	const [Globe, setGlobe] = useState<any>(null);
	useEffect(() => {
		if(window.innerWidth < 768) return;
		if (!IntersectionObserver) return;
		const ctaSection = document.getElementById(
			"ctaSectionContainer",
		) as HTMLElement | null;
		const observer = new IntersectionObserver(async function (
			entries,
			observer,
		) {
			for (let entry of entries) {
				if (
					entry.target === ctaSection &&
					entry.isIntersecting &&
					!globeLoaded
				) {
					setGlobeLoaded(true);
          observer.disconnect();
					const GlobeContainer = (await import("./GlobeContainer")).default;
					setGlobe(<GlobeContainer />);
				}
			}
		});
		if (!ctaSection) return;
		observer.observe(ctaSection);
	});
	return <>{Globe}</>;
}
