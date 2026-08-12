const initializeTabsProsCons = () => {
	document.querySelectorAll('.tabs-pros-cons-container').forEach((tabContainer) => {
		if (tabContainer.dataset.initializeTabsProsConsReady === 'true') return;

		const tabs = Array.from(tabContainer.querySelectorAll('.tabs-pros-cons-container__tab'));
		const panels = Array.from(tabContainer.querySelectorAll('.tabs-pros-cons-container__panel'));
		if (!tabs.length || !panels.length) return;

		tabs.forEach((tab) => {
			tab.addEventListener('click', (e) => {
				if (!e.target.classList.contains('tabs-pros-cons-container__tab')) return;
				const i = tabs.indexOf(e.target);
				tabs.forEach((item) => item.classList.remove('is-active'));
				panels.forEach((item) => item.classList.remove('is-active'));
				tabs[i].classList.add('is-active');
				panels[i].classList.add('is-active');
			});
		});

		tabContainer.dataset.initializeTabsProsConsReady = 'true';
	});
};

export default initializeTabsProsCons;
