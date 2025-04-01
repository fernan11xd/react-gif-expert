


export const getGifs = async (category) => {
    const API_KEY=`${import.meta.env.VITE_GIPHY_API_KEY}`
    const url = `${import.meta.env.VITE_VASE_URL}?api_key=${API_KEY}&q=${category}&limit=8`;
   

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img=>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    return gifs;
}