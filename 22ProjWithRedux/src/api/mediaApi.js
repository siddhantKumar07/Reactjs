import axios from 'axios'

const unsplash = import.meta.env.VITE_UNSPLASH_KEY
const pexels = import.meta.env.VITE_PEXELS_KEY
const giphy = import.meta.env.VITE_GIPHY_API_KEY



export const fetchPhotos = async (queries="nature") => {
 const query =queries
  const page = 1
  const per_page = 20

  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: { query, page, per_page },
    headers: {
      Authorization: `Client-ID ${unsplash}`,
    },
  })

  return response.data.results
}
export const fetchVideo = async (queries="nature") => {
  const query =queries
  const per_page = 20

  const response = await axios.get('https://api.pexels.com/v1/videos/search', {
    params: { query,per_page },
    headers: {
      Authorization:pexels,
    },
  })

  return response.data.videos
}

export const fetchGifs = async (queries="nature") => {
  const { data } = await axios.get(
    "https://api.giphy.com/v1/gifs/search",
    {
      params: {
        api_key: giphy,
        q: queries,
        limit: 20,
      },
    }
  );

  return data.data;
};