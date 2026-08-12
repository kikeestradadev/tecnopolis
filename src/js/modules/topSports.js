const topSports = () => {
	if (typeof Swiper === 'undefined') return;

	document.querySelectorAll('.top-sports').forEach((root) => {
		if (root.dataset.topSportsReady === 'true') return;

		const tabMenuEl = root.querySelector('.tab-menu');
		if (tabMenuEl) {
			new Swiper(tabMenuEl, {
				allowThresholdMove: true,
				slidesPerView: 'auto',
				spaceBetween: 0,
			});
		}

		const tabItems = root.querySelectorAll('.tab-menu__item');
		const panelItems = root.querySelectorAll('.tab-menu-panels__item');

		tabItems.forEach((tab, index) => {
			tab.addEventListener('click', () => {
				tabItems.forEach((item) => item.classList.remove('active'));
				panelItems.forEach((item) => item.classList.remove('active'));
				tab.classList.add('active');
				if (panelItems[index]) {
					panelItems[index].classList.add('active');
				}
			});
		});

		root.querySelectorAll('.sub-tab-menu').forEach((subMenu) => {
			new Swiper(subMenu, {
				allowThresholdMove: true,
				slidesPerView: 'auto',
				spaceBetween: 0,
				centeredSlides: false,
				loop: false,
				slideToClickedSlide: true,
				breakpoints: {
					768: {
						direction: 'vertical',
						centeredSlides: false,
						loop: false,
						slideToClickedSlide: false,
					},
				},
			});
		});

		root.querySelectorAll('.sub-tab-container').forEach((container) => {
			const tabs = container.querySelectorAll('.sub-tab-menu__item');
			const panels = container.querySelectorAll('.sub-tab-panels__item');

			tabs.forEach((tab, index) => {
				tab.addEventListener('click', (event) => {
					event.preventDefault();
					tabs.forEach((item) => item.classList.remove('active'));
					panels.forEach((item) => item.classList.remove('active'));
					tab.classList.add('active');
					if (panels[index]) {
						panels[index].classList.add('active');
					}
				});
			});
		});

		root.dataset.topSportsReady = 'true';
	});
};

export default topSports;
