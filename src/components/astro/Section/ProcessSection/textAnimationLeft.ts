import gsap from "gsap";

const textAnimationLeft = (showEl: HTMLElement, hideEl: HTMLElement) => {
	gsap.fromTo(
		showEl,
		{
			display: "flex",
			alpha: 0.2,
			x: -20,
		},
		{
			alpha: 1,
			x: 0,
			duration: 0.3,
			ease: "power1.out",
		},
	);
	gsap.set(hideEl, {
		display: "none",
		alpha: 0,
	});
};

export default textAnimationLeft;
