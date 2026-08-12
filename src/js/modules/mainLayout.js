const mainLayout = () => {
	document.querySelectorAll('.left-sidebar').forEach((root) => {
		if (root.dataset.mainLayoutReady === 'true') return;

		const d = document;
		const leftSideBarMenuClick = d.querySelectorAll('.open-sub-menu');
		const leftSidebarListNav = d.querySelector('.left-sidebar__list-nav');
		const mainMenu = d.querySelector('.left-sidebar__container-fixed');
		const subMenus = d.querySelectorAll('.push-menu-container');
		const blurryOverlap = d.querySelector('.blurry-overlap');
		const body = d.querySelector('body');
		const inputSearchAction = d.querySelector('.input-search-action');
		const inputSearchTag = d.querySelector('.input-search-tag');
		const closeSeach = d.querySelector('.close');
		const openMobileMenu = d.querySelector('.nav-spacer__open-mobile-menu');
		const leftSidebar = root;
		const closeContainer = d.querySelector('.left-sidebar__close-container');
		const backButton = d.querySelectorAll('.btn-brand-back-mobile');

		if (!mainMenu || !blurryOverlap || !openMobileMenu || !closeContainer) {
			return;
		}

		backButton.forEach((button) => {
			button.addEventListener('click', () => {
				const pushMenuContainer = button.closest('.push-menu-container');
				if (pushMenuContainer) {
					pushMenuContainer.classList.remove('active');
					const openSubMenu = pushMenuContainer.previousElementSibling;
					if (openSubMenu && openSubMenu.classList.contains('open-sub-menu')) {
						openSubMenu.classList.remove('active');
					}
				}
			});
		});

		closeContainer.addEventListener('click', () => {
			body.classList.remove('active');
			leftSidebar.classList.remove('active');
			blurryOverlap.classList.remove('active');
			mainMenu.classList.remove('active');
			leftSideBarMenuClick.forEach((menu) => {
				menu.classList.remove('active');
			});
			if (leftSidebarListNav) {
				leftSidebarListNav.classList.remove('active');
			}
			subMenus.forEach((menu) => {
				menu.classList.remove('active');
			});
			d.querySelectorAll('.multi-nivel-container').forEach((container) => {
				container.classList.remove('active');
			});
		});

		const checkSubMenuContainer = (li) => li.querySelector('.multi-nivel-container') !== null;
		const checkMainMobileSubMenuContainer = (li) =>
			li.querySelector('.push-menu-container') !== null;

		leftSideBarMenuClick.forEach((menu) => {
			menu.addEventListener('click', (e) => {
				e.preventDefault();

				leftSideBarMenuClick.forEach((otherMenu) => {
					if (otherMenu !== menu && otherMenu.classList.contains('active')) {
						otherMenu.classList.remove('active');
						const otherSubMenu = otherMenu.nextElementSibling;
						if (otherSubMenu && otherSubMenu.classList.contains('push-menu-container')) {
							otherSubMenu.classList.remove('active');
						}
					}
				});

				menu.classList.add('active');
				const currentSubMenu = menu.nextElementSibling;
				if (currentSubMenu && currentSubMenu.classList.contains('push-menu-container')) {
					currentSubMenu.classList.add('active');
				}

				mainMenu.classList.add('active');
				blurryOverlap.classList.add('active');
				body.classList.add('active');
				if (leftSidebarListNav) {
					leftSidebarListNav.classList.add('active');
				}
			});
		});

		blurryOverlap.addEventListener('click', () => {
			leftSideBarMenuClick.forEach((menu) => {
				menu.classList.remove('active');
				const subMenu = menu.nextElementSibling;
				if (subMenu && subMenu.classList.contains('push-menu-container')) {
					subMenu.classList.remove('active');
				}
			});
			d.querySelectorAll('.multi-nivel-container').forEach((container) => {
				container.classList.remove('active');
			});
			mainMenu.classList.remove('active');
			blurryOverlap.classList.remove('active');
			body.classList.remove('active');
			if (leftSidebarListNav) {
				leftSidebarListNav.classList.remove('active');
			}
			leftSidebar.classList.remove('active');
		});

		d.querySelectorAll('[data-level-id]').forEach((attr) => {
			attr.addEventListener('click', function (e) {
				const levelId = e.target.dataset.levelId;
				if (!levelId) return;
				const levelEl = d.querySelector(levelId);
				if (!levelEl) return;
				levelEl.classList.toggle('active');

				const parentSubMenu = e.target.closest('.sub-menu');
				if (parentSubMenu) {
					parentSubMenu.classList.toggle('active');
					const parentUl = e.target.closest('ul');
					if (parentUl) {
						parentUl.scrollTop = 0;
					}
				}
			});
		});

		if (inputSearchAction && inputSearchTag && closeSeach) {
			inputSearchAction.addEventListener('click', () => {
				inputSearchAction.classList.toggle('active');
				inputSearchTag.classList.toggle('active');
				closeSeach.classList.toggle('active');
			});

			closeSeach.addEventListener('click', () => {
				inputSearchAction.classList.remove('active');
				inputSearchTag.classList.remove('active');
				closeSeach.classList.remove('active');
			});
		}

		openMobileMenu.addEventListener('click', () => {
			leftSidebar.classList.add('active');
			body.classList.add('active');
			blurryOverlap.classList.add('active');
		});

		d.querySelectorAll('.sub-menu__li').forEach((item) => {
			if (checkSubMenuContainer(item)) {
				item.classList.add('arrow-sub-menu');
			}
		});

		d.querySelectorAll('.dk-left-sidebar-menu__li').forEach((item) => {
			if (checkMainMobileSubMenuContainer(item)) {
				item.classList.add('arrow-sub-menu-main-mobile');
			}
		});

		d.querySelectorAll('.dk-left-sidebar-menu__li').forEach((li) => {
			const pushMenuContainer = li.querySelector('.push-menu-container');
			if (pushMenuContainer) {
				const anchorElement = li.querySelector('.dk-left-sidebar-menu__anchor');
				if (anchorElement) {
					anchorElement.removeAttribute('href');
				}
			}
		});

		d.querySelectorAll('.sub-menu__li').forEach((li) => {
			const multiLevelContainer = li.querySelector('.multi-nivel-container');
			if (multiLevelContainer) {
				const anchorElement = li.querySelector('.sub-menu__anchor');
				if (anchorElement) {
					anchorElement.removeAttribute('href');
				}
			}
		});

		root.dataset.mainLayoutReady = 'true';
	});
};

export default mainLayout;
