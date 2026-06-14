import axios from 'axios'

const unsplash = import.meta.env.VITE_UNSPLASH_KEY
const pexels = import.meta.env.VITE_PEXELS_KEY

export const fetchPhotos = async () => {
  const query = 'models'
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
export const fetchVideo = async () => {
  const query = 'models '
  const per_page = 20

  const response = await axios.get('https://api.pexels.com/v1/videos/search', {
    params: { query,per_page },
    headers: {
      Authorization:pexels,
    },
  })

  return response.data.videos
}