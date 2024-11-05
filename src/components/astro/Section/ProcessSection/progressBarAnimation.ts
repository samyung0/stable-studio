const progressBarAnimation = (
	timeline: gsap.core.Timeline,
	el: HTMLElement | null,
	wheelEl: HTMLElement | null,
	textEl: HTMLElement | null,
) => {
	timeline.fromTo(
		el,
		{
			xPercent: -100,
			borderRadius: 4,
		},
		{
			xPercent: 0,
			borderRadius: 12,
			duration: () => timeline.totalDuration(),
			overwrite: true
		},
		0,
	);
	timeline.fromTo(
		wheelEl,
		{
			x: 0,
		},
		{
			x: () => el?.offsetWidth ?? 0,
			duration: () => timeline.totalDuration(),
			overwrite: "auto",
		},
		0,
	);

	timeline.fromTo(
		textEl,
		{
			innerText: "0%",
		},
		{
			innerText: "100%",
			snap: { innerText: 1 },
			duration: () => timeline.totalDuration(),
		},
		0,
	);
};

export default progressBarAnimation;
