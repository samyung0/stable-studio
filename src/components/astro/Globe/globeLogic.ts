const globeLogic = async () => {
	if (!window || !document) return;
	const createGlobe = (await import("cobe")).default;
	const canvas = document.getElementById(
		"globeCanvas",
	) as HTMLCanvasElement | null;
	if (!canvas) return;
	let width = 0,
		phi = 0;
	const onResize = () => canvas && (width = canvas.offsetWidth);
	window.addEventListener("resize", onResize);
	onResize();
	const globe = createGlobe(canvas!, {
		devicePixelRatio: 2,
		width: width * 2,
		height: width * 2,
		phi: 0,
		theta: 0.3,
		dark: 1,
		diffuse: 3,
		mapSamples: 16000,
		mapBrightness: 1.2,
		baseColor: [1, 1, 1],
		markerColor: [251, 100, 21],
		glowColor: [1, 1, 1],
		markers: [
			{ location: [37.7595, -122.4367], size: 0.03 },
			{ location: [40.7128, -74.006], size: 0.02 },
			{ location: [22.3700556, 114.1535941], size: 0.08 },
			{ location: [51.5072, -0.1276], size: 0.04 },
			{ location: [35.6764, 139.65], size: 0.06 },
			{ location: [-14.235, -51.9253], size: 0.04 },
			{ location: [14.599512, 120.984222], size: 0.05 },
			{ location: [21.028511, 105.804817], size: 0.04 },
			{ location: [-6.2, 106.816666], size: 0.04 },
		],
		onRender: (state) => {
			// Called on every animation frame.
			// `state` will be an empty object, return updated params.
			state.phi = phi;
			phi += 0.005;
			state.width = width * 2;
			state.height = width * 2;
		},
	});
  return globe;
};

export default globeLogic;
