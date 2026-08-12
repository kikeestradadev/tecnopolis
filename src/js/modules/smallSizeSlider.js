const smallSizeSlider = () => {
	if (typeof Swiper === 'undefined') return;

	document.querySelectorAll('.small-size-slider').forEach((root) => {
		if (root.dataset.smallSizeSliderReady === 'true') return;

		new Swiper(root, {
			direction: 'horizontal',
			loop: false,
			allowThresholdMove: true,
			slidesPerView: 'auto',
			spaceBetween: 7,
			a11y: {
				enabled: true,
				slideLabelMessage: 'Slide {{index}} of {{slidesLength}}',
				slideRole: null,
			},
		});

		root.dataset.smallSizeSliderReady = 'true';
	});
};

export default smallSizeSlider;
