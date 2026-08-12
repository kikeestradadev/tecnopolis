const sliderTopSportsbooks = () => {
	if (typeof Swiper === 'undefined') return;

	document.querySelectorAll('.slider-top-sportsbooks').forEach((root) => {
		if (root.dataset.sliderTopSportsbooksReady === 'true') return;

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

		root.dataset.sliderTopSportsbooksReady = 'true';
	});
};

export default sliderTopSportsbooks;
