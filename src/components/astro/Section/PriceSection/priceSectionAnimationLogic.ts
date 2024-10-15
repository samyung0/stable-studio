import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const priceSectionAnimationLogic = () => {
	gsap.registerPlugin(ScrollTrigger);
	ScrollTrigger.config({ ignoreMobileResize: true });
	const processSectionContainer = document.getElementById(
		"processSectionContainer",
	) as HTMLElement | null;
	const processSection = document.getElementById(
		"processSection",
	) as HTMLElement | null;
	const priceSectionContainer = document.getElementById(
		"priceSectionContainer",
	) as HTMLElement | null;

	const mm = gsap.matchMedia();

	mm.add(
		{
			isMobile: "(max-width: 767px)",
			isDesktop: "(min-width: 768px)",
			reduceMotion: "(prefers-reduced-motion: reduce)",
		},
		(context) => {
			const isMobile = !!context.conditions?.isMobile;
			const reduceMotion = !!context.conditions?.reduceMotion;
			if (isMobile || reduceMotion) return;
			const timelineStart = gsap.timeline({
				scrollTrigger: {
					trigger: priceSectionContainer,
					pinType: "transform",
					start: "top bottom",
					end: "top top",
					pin: processSectionContainer,
					pinSpacing: false,
					scrub: 1,
					// markers: true,
					invalidateOnRefresh: true,
				},
				defaults: { overwrite: "auto", ease: "none" },
			});
			timelineStart.to(
				processSection?.parentElement!,
				{
					autoAlpha: 0,
				},
				0,
			);

			timelineStart.to(
				processSection?.parentElement!,
				{
					y: 30,
					delay: 0.1,
				},
				0,
			);
		},
	);

	const priceAnimationContainer = document.getElementById(
		"priceAnimationContainer",
	) as HTMLElement | null;
	const animationDistance = 1000;

	const timelineMain = gsap.timeline({
		scrollTrigger: {
			trigger: priceAnimationContainer,
			// pinnedContainer: priceSectionContainer,
			start: "top top",
			end: `+=${animationDistance}`,
			pin: true,
			pinType: "transform",
			// pinReparent: true,
			id: "timelineMain",
			scrub: 1,
			markers: true,
			invalidateOnRefresh: true,
		},
	});

	mm.add(
		{
			isMobile: "(max-width: 767px)",
			isDesktop: "(min-width: 768px)",
			reduceMotion: "(prefers-reduced-motion: reduce)",
		},
		(context) => {
			const isMobile = !!context.conditions?.isMobile;
			const reduceMotion = !!context.conditions?.reduceMotion;
			if (isMobile || reduceMotion) return;
			const timelineEnd = gsap.timeline({
				scrollTrigger: {
					trigger: priceSectionContainer,
					start: `bottom bottom`,
					end: `bottom top`,
					scrub: 1,
					id: "timelineEnd",
					// markers: true,
					invalidateOnRefresh: true,
				},
				defaults: { overwrite: "auto", ease: "none" },
			});
			timelineEnd.to(
				priceSectionContainer,
				{
					scale: 0.9,
				},
				0,
			);
		},
	);
};

export default priceSectionAnimationLogic;
