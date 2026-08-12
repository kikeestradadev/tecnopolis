const singleSlider = () => {
	if (typeof Swiper === 'undefined') return;

	document.querySelectorAll('.single-slider').forEach((root) => {
		if (root.dataset.singleSliderReady === 'true') return;

		new Swiper(root, {
			effect: 'fade',
			speed: 800,
			autoHeight: true,
			fadeEffect: {
				crossFade: true,
			},
			watchOverflow: true,
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

		root.dataset.singleSliderReady = 'true';
	});
};

export default singleSlider;
