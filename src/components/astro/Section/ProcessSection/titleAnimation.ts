import gsap from "gsap";

const imageAnimationRight = (showEl: HTMLElement, hideEl: HTMLElement) => {
	gsap.fromTo(
		showEl,
		{
			display: "flex",
			y: 6,
		},
		{
			ease: "power3.out",
			y: 0,
			duration: 1,
		},
	);
	gsap.set(hideEl, {
		display: "none",
	});
};

export default imageAnimationRight;
