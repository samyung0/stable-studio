import gsap from "gsap";

const progressWheelAnimation = (
	rotateWheel: gsap.core.Tween,
	trigger: ScrollTrigger,
) => {
	const mm = gsap.matchMedia();
	mm.add(
		{
			reduceMotion: "(prefers-reduced-motion: reduce)",
			noReduceMotion: "(prefers-reduced-motion: no-preference)",
		},
		(context) => {
			const reduceMotion = !!context.conditions?.reduceMotion;
			if (reduceMotion) return;
			let rotateSpeed = trigger.getVelocity() / 100;
			if(rotateSpeed > 40) rotateSpeed = 40;
			if(rotateSpeed < -40) rotateSpeed = -40;
			const dir = trigger.direction;
			if (
				Math.abs(rotateSpeed) < 1 ||
				trigger.progress === 0 ||
				trigger.progress === 1
			)
				rotateSpeed = dir;
			rotateWheel.timeScale(rotateSpeed);
			// gsap.to(rotateWheel, { timeScale: rotateSpeed });
		},
	);
};

export default progressWheelAnimation;
