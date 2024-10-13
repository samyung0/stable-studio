const progressBarAnimation = (
	timeline: gsap.core.Timeline,
	el: HTMLElement | null,
	wheelEl: HTMLElement | null,
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
				overwrite: false,
			},
			0,
		);
};

export default progressBarAnimation;
