const categorySportsCards = () => {
	const cards = document.querySelectorAll('.sport-category-card');
	if (!cards.length) return;
	if (document.body.dataset.categorySportsCardsReady === 'true') return;

	cards.forEach((card) => {
		card.addEventListener('click', (event) => {
			const submenu = card.querySelector('.sport-category-card__submenu');
			const closeButton = card.querySelector('.sport-category-card__close-icon');
			const p = card.querySelector('p');
			if (!submenu || !closeButton || !p) return;

			submenu.style.display = 'flex';
			closeButton.style.display = 'block';
			p.classList.add('p-active');

			if (event.target === closeButton || closeButton.contains(event.target)) {
				submenu.style.display = 'none';
				closeButton.style.display = 'none';
				p.classList.remove('p-active');
			}
		});
	});

	document.addEventListener('click', (event) => {
		document.querySelectorAll('.sport-category-card').forEach((card) => {
			const submenu = card.querySelector('.sport-category-card__submenu');
			const closeButton = card.querySelector('.sport-category-card__close-icon');
			const p = card.querySelector('p');
			if (!submenu || !closeButton || !p) return;
			if (!card.contains(event.target)) {
				submenu.style.display = 'none';
				closeButton.style.display = 'none';
				p.classList.remove('p-active');
			}
		});
	});

	document.body.dataset.categorySportsCardsReady = 'true';
};

export default categorySportsCards;
