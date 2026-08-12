const initializeTabs = () => {
	document.querySelectorAll('.tabs-container').forEach((tabContainer) => {
		if (tabContainer.dataset.initializeTabsReady === 'true') return;

		const tabs = Array.from(tabContainer.querySelectorAll('.tabs-container__tab'));
		const panels = Array.from(tabContainer.querySelectorAll('.tabs-container__panel'));
		if (!tabs.length || !panels.length) return;

		tabs.forEach((tab) => {
			tab.addEventListener('click', (e) => {
				if (!e.target.classList.contains('tabs-container__tab')) return;
				const i = tabs.indexOf(e.target);
				tabs.forEach((item) => item.classList.remove('is-active'));
				panels.forEach((item) => item.classList.remove('is-active'));
				tabs[i].classList.add('is-active');
				panels[i].classList.add('is-active');
			});
		});

		tabContainer.dataset.initializeTabsReady = 'true';
	});
};

export default initializeTabs;
