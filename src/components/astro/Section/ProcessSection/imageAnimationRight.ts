import gsap from "gsap";

const imageAnimationRight = (
	showEl: HTMLElement,
	hideEl: HTMLElement,
	remaining: HTMLElement[],
) => {
	const mm = gsap.matchMedia();

	mm.add(
		{
			isMobile: "(max-width: 1023px)",
			isDesktop: "(min-width: 1024px)",
			reduceMotion: "(prefers-reduced-motion: reduce)",
		},
		(context) => {
			const isMobile = !!context.conditions?.isMobile;
			const reduceMotion = !!context.conditions?.reduceMotion;
			// const isDesktop = !!context.conditions?.isDesktop;

			if (!isMobile && !reduceMotion) {
				gsap.set(showEl, {
					filter: "blur(0px)",
				});
				gsap.set(hideEl, {
					filter: "blur(0px)",
				});
				gsap.to(showEl, {
					xPercent: 0,
					ease: "power3.out",
					duration: 1,
				});
				gsap.to(hideEl, {
					xPercent: 110,
					duration: 0.5,
					ease: "power3.out",
				});
				remaining.forEach((el) => {
					gsap.set(el, {
						xPercent: 110,
						filter: "blur(0px)",
					});
				});
				return;
			}
			gsap.set(showEl, {
				xPercent: 0,
			});
			gsap.fromTo(
				showEl,
				{
					filter: "blur(4px)",
				},
				{
					xPercent: 0,
					duration: 0.5,
					filter: "blur(0px)",
					ease: "power1.out",
				},
			);
			gsap.set(hideEl, {
				xPercent: 110,
				filter: "blur(0px)",
			});

			remaining.forEach((el) => {
				gsap.set(el, {
					xPercent: 110,
					filter: "blur(0px)",
				});
			});
		},
	);
};

export default imageAnimationRight;
