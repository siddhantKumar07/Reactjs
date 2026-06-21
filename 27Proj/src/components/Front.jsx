import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Front = () => {
const [bgimg, setBgimg] = useState('')
const [weather, setWeather] = useState(null)


  const getWeather = async() => {

    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json`, {
        params: {
          key: "84cef721240840588d9144054260306",
          q: 'gorakhpur'
        }
      })
      console.log(response.data)
      setWeather(response.data)
    } catch(err) {
      console.error('Weather API Error:', err)
    }
  }
  const formatTime = (timeString) => {
    const date = new Date(timeString)
    return date.toLocaleString('en-US', { 
      weekday: 'long', 
      hour: 'numeric', 
      minute: '2-digit', 
      hour12: true 
    })
  }
  useEffect(() => {
    setBgimg(`url('https://picsum.photos/1600/600?random=${Date.now()}')`)
    getWeather()
  }, [])

  return (
    <div className='h-full bg-[#0B1326] w-full px-10 py-10'>
      <div style={{backgroundImage: bgimg}} className='flex items-center justify-center h-[55%] rounded-2xl w-full bg-cover bg-center'>
        <div className=' h-full w-[60%]  flex items-start p-7 justify-end flex-col'>
  <h1 className='text-5xl font-bold text-white'>{weather?.current?.last_updated ? formatTime(weather.current.last_updated) : 'Loading...'}</h1>          <h1 className='text-5xl font-bold text-white'>{weather?.location?.name || 'gorakhpur'} ({weather?.location?.region || 'up'})</h1>
        </div>
        <div className='h-full w-[40%]  flex flex-col gap-3 items-end justify-end py-4 px-5'>
          <div className='flex'>
            <h2 className='text-white font-bold text-2xl'>{weather?.current?.temp_c}°C</h2>
            {weather?.current?.condition?.icon && <img src={`https:${weather.current.condition.icon}`} alt="condition img" />}
          </div>
          <h3 className='font-bold text-white text-xl'>{weather?.current?.condition?.text}</h3>
          <h3 className='font-bold text-white text-xl'>Precipitation: {weather?.current?.precip_mm}mm</h3>
          <h3 className='font-bold text-white text-xl'>Humidity: {weather?.current?.humidity}%</h3>
          <h3 className='font-bold text-white text-xl'>Wind: {weather?.current?.wind_kph}kph</h3>
        </div>
      </div>
    </div>
  )
}

export default Front