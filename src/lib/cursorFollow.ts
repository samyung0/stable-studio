import gsap from "gsap";

const cursorFollow = () => {
	const cursorContainer = document.getElementById(
		"cursorContainer",
	) as HTMLElement | null;
	const faqCursor = document.getElementById("faqCursor") as HTMLElement | null;

	gsap.set(faqCursor, {
		xPercent: -50,
		yPercent: -50,
	});

	const xTo = gsap.quickTo(faqCursor, "x", {
		duration: 0.2,
		ease: "power3",
	});
	const yTo = gsap.quickTo(faqCursor, "y", {
		duration: 0.2,
		ease: "power3",
	});
	const cursorMoveHandler = (e: MouseEvent) => {
		if (cursorContainer) cursorContainer.style.display = "block";
		xTo(e.clientX);
		yTo(e.clientY);
	};
	const mm = gsap.matchMedia();
	mm.add(
		{ isLg: "(max-width: 1023px)", isDesktop: "(min-width: 1024px)" },
		(context) => {
			const isLg = !!context.conditions?.isLg;
			if (isLg) return;

			document.addEventListener("mousemove", cursorMoveHandler, {
				passive: true,
			});
			gsap.set(faqCursor, {
				x: window.innerWidth / 2,
				y: window.innerHeight / 2,
			});

			() => {
				document.removeEventListener("mousemove", cursorMoveHandler);
			};
		},
	);
};
export default cursorFollow;
