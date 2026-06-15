import React from 'react'
import { fetchGifs, fetchPhotos, fetchVideo } from './api/mediaApi'

const App = () => {
 
  return (
    <div className='h-screen w-full bg-sky-700 text-white '>
  <button
 onClick={async () => {
  const images = await fetchPhotos()
  console.log(images)
}}
  className='px-6 py-2.5 bg-red-400 rounded-xl m-7'> click for image</button>
  <button
 onClick={async () => {
  const video = await fetchVideo()
  console.log(video)
}}
  className='px-6 py-2.5 bg-red-400 rounded-xl m-7'> click for video</button>
  <button
 onClick={async () => {
  const gifs = await fetchGifs()
  console.log(gifs)
}}
  className='px-6 py-2.5 bg-red-400 rounded-xl m-7'> click for giphy</button>

    </div>
  )
}

export default App