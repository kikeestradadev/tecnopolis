const dynamicSideBanner = () => {
	const bannerItems = document.querySelectorAll('.dynamic-side-banner__item');
	if (!bannerItems.length) return;
	if (document.body.dataset.dynamicSideBannerReady === 'true') return;

	let currentIndex = 0;
	bannerItems[currentIndex].style.display = 'block';

	const showNextBanner = () => {
		bannerItems[currentIndex].style.display = 'none';
		currentIndex = (currentIndex + 1) % bannerItems.length;
		bannerItems[currentIndex].style.display = 'block';
	};

	setInterval(showNextBanner, 5000);

	bannerItems.forEach((item, index) => {
		item.addEventListener('click', () => {
			if (currentIndex === index) return;
			bannerItems[currentIndex].style.display = 'none';
			currentIndex = index;
			bannerItems[currentIndex].style.display = 'block';
		});
	});

	document.body.dataset.dynamicSideBannerReady = 'true';
};

export default dynamicSideBanner;
