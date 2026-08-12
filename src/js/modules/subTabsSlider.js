const subTabsSlider = () => {
	if (typeof Swiper === 'undefined') return;

	document.querySelectorAll('.sub-tabs').forEach((root) => {
		if (root.dataset.subTabsSliderReady === 'true') return;

		new Swiper(root, {
			allowThresholdMove: true,
			slidesPerView: 'auto',
			spaceBetween: 0,
		});

		root.dataset.subTabsSliderReady = 'true';
	});
};

export default subTabsSlider;
