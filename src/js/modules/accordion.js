const accordion = () => {
	document.querySelectorAll('.accordion-module').forEach((root) => {
		if (root.dataset.accordionReady === 'true') return;

		root.querySelectorAll('.accordion-container__btn-acc').forEach((button) => {
			const panel = button.nextElementSibling;
			if (!panel) return;

			button.classList.add('active');
			panel.style.maxHeight = `${panel.scrollHeight}px`;

			button.addEventListener('click', () => {
				button.classList.toggle('active');
				if (panel.style.maxHeight) {
					panel.style.maxHeight = null;
				} else {
					panel.style.maxHeight = `${panel.scrollHeight}px`;
				}
			});
		});

		root.dataset.accordionReady = 'true';
	});
};

export default accordion;
