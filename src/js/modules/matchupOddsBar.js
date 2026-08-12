const matchupOddsBar = () => {
	if (typeof Swiper === 'undefined') return;

	document.querySelectorAll('.matchup-odds-bar').forEach((root) => {
		if (root.dataset.matchupOddsBarReady === 'true') return;

		new Swiper(root, {
			direction: 'horizontal',
			loop: false,
			allowThresholdMove: true,
			slidesPerView: 'auto',
			spaceBetween: 7,
			on: {
				init: function () {
					document.querySelectorAll('.matchup-odds-bar-container').forEach((sliderContainer) => {
						sliderContainer.style.cssText = 'display: block !important;';
					});
				},
			},
		});

		root.dataset.matchupOddsBarReady = 'true';
	});
};

export default matchupOddsBar;
