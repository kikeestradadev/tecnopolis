const smallSizeSliderBonuses = () => {
	if (typeof Swiper === 'undefined') return;

	document.querySelectorAll('.small-size-slider-bonuses').forEach((root) => {
		if (root.dataset.smallSizeSliderBonusesReady === 'true') return;

		new Swiper(root, {
			direction: 'horizontal',
			loop: false,
			allowThresholdMove: true,
			slidesPerView: 'auto',
			spaceBetween: 15,
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

		root.dataset.smallSizeSliderBonusesReady = 'true';
	});
};

export default smallSizeSliderBonuses;
