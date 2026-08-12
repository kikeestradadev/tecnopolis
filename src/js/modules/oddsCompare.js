const oddsCompare = () => {
	document.querySelectorAll('.odds-compare__grid-container').forEach((gridContainer) => {
		if (gridContainer.dataset.oddsCompareReady === 'true') return;

		let isDragging = false;
		let start = { x: 0, y: 0 };
		let scrollStart = { x: 0, y: 0 };

		const onMouseMove = (event) => {
			if (!isDragging) return;
			gridContainer.scrollLeft = scrollStart.x - (event.clientX - start.x);
			gridContainer.scrollTop = scrollStart.y - (event.clientY - start.y);
		};

		const onMouseUp = () => {
			isDragging = false;
			document.removeEventListener('mousemove', onMouseMove);
			document.removeEventListener('mouseup', onMouseUp);
		};

		gridContainer.addEventListener('mousedown', (event) => {
			isDragging = true;
			start = { x: event.clientX, y: event.clientY };
			scrollStart = { x: gridContainer.scrollLeft, y: gridContainer.scrollTop };
			document.addEventListener('mousemove', onMouseMove);
			document.addEventListener('mouseup', onMouseUp);
			event.preventDefault();
		});

		gridContainer.dataset.oddsCompareReady = 'true';
	});
};

export default oddsCompare;
