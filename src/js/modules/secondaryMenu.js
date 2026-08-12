const secondaryMenu = () => {
	if (typeof Swiper === 'undefined') return;

	document.querySelectorAll('.secondary-menu-container').forEach((root) => {
		if (root.dataset.secondaryMenuReady === 'true') return;

		const menu = root.querySelector('.secondary-menu');
		if (!menu) return;

		new Swiper(menu, {
			direction: 'horizontal',
			loop: false,
			slidesPerView: 'auto',
			spaceBetween: 0,
			breakpoints: {
				481: {
					spaceBetween: 40,
				},
			},
			on: {
				init() {
					menu.classList.remove('menu-hidden');
					menu.classList.add('menu-visible');
				},
			},
		});

		const moreElement = root.querySelector('.more');
		const topSubmenu = root.querySelector('.top_submenu');

		if (moreElement && topSubmenu) {
			moreElement.addEventListener('click', (event) => {
				event.stopPropagation();
				moreElement.classList.toggle('active');
				topSubmenu.classList.toggle('active');
				menu.classList.toggle('active');
			});

			document.addEventListener('click', (event) => {
				if (!moreElement.classList.contains('active')) return;
				if (
					moreElement.contains(event.target) ||
					topSubmenu.contains(event.target) ||
					menu.contains(event.target)
				) {
					return;
				}
				moreElement.classList.remove('active');
				topSubmenu.classList.remove('active');
				menu.classList.remove('active');
			});
		}

		root.dataset.secondaryMenuReady = 'true';
	});
};

export default secondaryMenu;
