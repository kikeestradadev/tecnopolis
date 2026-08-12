const graphqlPractice = () => {
	const listElement = document.querySelector('#albumsList');
	if (!listElement || listElement.dataset.graphqlPracticeReady === 'true') return;

	const endpoint = 'https://graphqlzero.almansi.me/api';

	const getAlbum = (id) => {
		fetch(endpoint, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({
				query: `{
					album(id: ${id}) {
						id
						title
						photos {
							data { url }
						}
					}
				}`,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				const detailsElement = document.querySelector('#details');
				if (!detailsElement || !data.data || !data.data.album) return;
				const album = data.data.album;
				detailsElement.innerHTML = '';
				const title = document.createElement('h2');
				title.textContent = album.title;
				const image = document.createElement('img');
				image.src = album.photos.data[0].url;
				detailsElement.appendChild(title);
				detailsElement.appendChild(image);
			});
	};

	fetch(endpoint, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify({
			query: `{
				albums {
					data { id title }
				}
			}`,
		}),
	})
		.then((res) => res.json())
		.then((data) => {
			if (!data.data || !data.data.albums) return;
			data.data.albums.data.forEach((album) => {
				const item = document.createElement('li');
				item.textContent = album.title;
				item.addEventListener('click', () => getAlbum(album.id));
				listElement.appendChild(item);
			});
		});

	listElement.dataset.graphqlPracticeReady = 'true';
};

export default graphqlPractice;
