import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const priceSectionAnimationLogic = () => {
	gsap.registerPlugin(ScrollTrigger);
	const processSectionContainer = document.getElementById(
		"processSectionContainer",
	) as HTMLElement | null;
	const processSection = document.getElementById(
		"processSection",
	) as HTMLElement | null;
	const priceSectionContainer = document.getElementById(
		"price",
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

	mm.add(
		{
			isShort: "(max-height: 799px)",
			isTall: "(min-height: 800px)",
			isNarrow: "(max-width: 450px)",
		},
		(context) => {
			const isShort = !!context.conditions?.isShort;
			const isNarrow = !!context.conditions?.isNarrow;
			if (isShort && isNarrow) return;
			const timelineMain = gsap.timeline({
				scrollTrigger: {
					trigger: priceAnimationContainer,
					// pinnedContainer: priceSectionContainer,
					start: "top 85%",
					end: `top 25%`,
					// pin: true,
					// pinType: "transform",
					// pinReparent: true,
					id: "timelineMain",
					scrub: 1,
					// markers: true,
					invalidateOnRefresh: true,
				},
			});
			gsap.set(priceAnimationContainer, {
				filter: "blur(10px)",
			});
			timelineMain.to(
				priceAnimationContainer,
				{
					filter: "blur(0px)",
					ease: "none",
				},
				0,
			);
		},
	);

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
