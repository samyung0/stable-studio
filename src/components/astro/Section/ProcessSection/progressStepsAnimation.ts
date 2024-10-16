import gsap from "gsap";

const progressStepsAnimation = (
	showEl: HTMLElement,
	hideEl: HTMLElement,
	remaining: HTMLElement[],
	showFirstSpan: HTMLElement,
	hideFirstSpan: HTMLElement,
	remainingFirstSpan: HTMLElement[],
) => {
	showEl.classList.add("processActive");
	hideEl.classList.remove("processActive");
	remaining.forEach((el) => {
		el.classList.remove("processActive");
	});
	gsap.to(showFirstSpan, {
		width: "auto",
		duration: 0.8,
		ease: "power3.out",
	});
	gsap.to(hideFirstSpan, {
		width: 0,
		duration: 0.8,
		ease: "power3.out",
	});
	remainingFirstSpan.forEach((el) => {
		gsap.set(el, {
			width: 0,
		});
	});
};

export default progressStepsAnimation;
