import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const priceSectionAnimationLogic = (processTimeline: gsap.core.Timeline, ratio: number) => {
	gsap.registerPlugin(ScrollTrigger);
	const processSectionContainer = document.getElementById(
		"processSectionContainer",
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

			processTimeline.to(
				processSectionContainer,
				{
					autoAlpha: 0,
					duration: ratio,
				},
				processTimeline.duration() - ratio
			);

			processTimeline.to(
				processSectionContainer,
				{
					"--offset-top": "30px",
					delay: 0.1,
					duration: ratio
				},
				processTimeline.duration() - ratio
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
					start: "top 90%",
					end: `top 35%`,
					id: "timelineMain",
					scrub: 1,
					invalidateOnRefresh: false,
				},
			});
			gsap.set(priceAnimationContainer, {
				filter: "blur(14px)",
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
					invalidateOnRefresh: false,
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
