const footerTextCollapse = () => {
	document.querySelectorAll('.main-footer').forEach((root) => {
		if (root.dataset.footerTextCollapseReady === 'true') return;

		const collapseButtons = root.querySelectorAll('.main-footer__collapse-text-button');
		const disclaimerTexts = root.querySelectorAll('.main-footer__disclaimer-text');

		collapseButtons.forEach((collapseButton, index) => {
			const disclaimerText = disclaimerTexts[index];
			if (!disclaimerText) return;

			collapseButton.addEventListener('click', () => {
				collapseButton.classList.toggle('active');
				disclaimerText.classList.toggle('active');
			});
		});

		root.dataset.footerTextCollapseReady = 'true';
	});
};

export default footerTextCollapse;
