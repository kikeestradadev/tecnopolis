const ibdMap = () => {
	const root = document.querySelector('.ibd-map');
	if (!root || root.dataset.ibdMapReady === 'true') return;

	const ibdStateLabel = document.getElementById('ibdStateLabel');
	const logo = document.getElementById('ibd_logo');
	const retailBetting = document.getElementById('retailBetting');
	const onlineBetting = document.getElementById('onlineBetting');
	const legalBettingAge = document.getElementById('legalBettingAge');
	const stateSelect = document.getElementById('mapSelectState');
	let currentActive = null;

	const removeActiveClass = () => {
		if (currentActive) {
			currentActive.classList.remove('active');
		}
	};

	const updateStateInfo = (stateName) => {
		const pathEl = root.querySelector(`path[data-name="${stateName}"]`);
		if (!pathEl) return;

		removeActiveClass();
		currentActive = pathEl;
		currentActive.classList.add('active');

		if (logo) logo.src = currentActive.getAttribute('data-brand-logo') || logo.src;
		if (retailBetting) retailBetting.textContent = currentActive.getAttribute('data-retail-betting') || '';
		if (onlineBetting) onlineBetting.textContent = currentActive.getAttribute('data-online-betting') || '';
		if (legalBettingAge) legalBettingAge.textContent = currentActive.getAttribute('data-legal-betting-age') || '';
		if (stateSelect && stateSelect.value !== stateName) {
			stateSelect.value = stateName;
		}
	};

	document.addEventListener('mouseover', (e) => {
		if (!ibdStateLabel) return;
		if (e.target.tagName === 'path' && root.contains(e.target)) {
			ibdStateLabel.innerHTML = e.target.dataset.name || '';
			ibdStateLabel.style.opacity = '100%';
		} else {
			ibdStateLabel.style.opacity = '0%';
		}
	});

	document.addEventListener('click', (e) => {
		if (e.target.tagName === 'path' && root.contains(e.target)) {
			updateStateInfo(e.target.getAttribute('data-name'));
		}
	});

	window.addEventListener('mousemove', (e) => {
		if (!ibdStateLabel) return;
		ibdStateLabel.style.top = `${e.clientY + 20}px`;
		ibdStateLabel.style.left = `${e.clientX}px`;
	});

	if (stateSelect) {
		root.querySelectorAll('path[data-name]').forEach((pathEl) => {
			const stateName = pathEl.getAttribute('data-name');
			if (!stateName) return;
			const option = document.createElement('option');
			option.value = stateName;
			option.textContent = stateName;
			stateSelect.appendChild(option);
		});

		stateSelect.addEventListener('change', (e) => {
			updateStateInfo(e.target.value);
		});
	}

	root.dataset.ibdMapReady = 'true';
};

export default ibdMap;
