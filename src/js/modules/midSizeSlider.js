const midSizeSlider = () => {
	if (typeof Swiper === 'undefined') return;

	document.querySelectorAll('.mid-size-slider').forEach((root) => {
		if (root.dataset.midSizeSliderReady === 'true') return;

		new Swiper(root, {
			direction: 'horizontal',
			loop: false,
			allowThresholdMove: true,
			slidesPerView: 'auto',
			spaceBetween: 7,
			navigation: {
				nextEl: root.querySelector('.swiper-button-next'),
				prevEl: root.querySelector('.swiper-button-prev'),
			},
			a11y: {
				enabled: true,
				slideLabelMessage: 'Slide {{index}} of {{slidesLength}}',
				slideRole: null,
			},
		});

		root.dataset.midSizeSliderReady = 'true';
	});
};

export default midSizeSlider;
