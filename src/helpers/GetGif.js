export const getGif = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=20&api_key=W0hha8Na7gGudVP3nTcJULDLoh1Ehj7x`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            title: img.title,
            id: img.id,
            url: img.images.downsized_medium.url
        }
    });

    return gifs;
};