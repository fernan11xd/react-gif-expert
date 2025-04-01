


export const getGifs = async (category) => {
  const API_KEY='HOJg3p0pCQHxbMl5xvvNv6eGWG79o5RC'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=8`;
   
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img=>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    //console.log(gifs);
    return gifs;
}