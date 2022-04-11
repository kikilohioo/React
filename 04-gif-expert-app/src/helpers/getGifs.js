export const getGifs = async (category) => {
	const api_url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=p6N2GWSqkPq04SSxDb0SUjSLbatCk8s5`;
	const resp = await fetch(api_url);
	const { data } = await resp.json();

	const gifs = data.map(img => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url
		}
	})

	return gifs;
}