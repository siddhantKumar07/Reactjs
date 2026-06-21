import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Front = () => {
  const [bgimg, setBgimg] = useState('')
  const [weather, setWeather] = useState(null)

  const getWeather = async () => {
    try {
      const response = await axios.get('https://api.weatherapi.com/v1/current.json', {
        params: {
          key: '84cef721240840588d9144054260306',
          q: 'gorakhpur'
        }
      })
      setWeather(response.data)
    } catch (err) {
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
    setBgimg(`url('https://picsum.photos/1600/900?random=${Date.now()}')`)
    getWeather()
  }, [])

  return (
    <section className='min-h-full w-full bg-[#0B1326] p-4 sm:p-6 lg:p-10'>
      <div
        style={{ backgroundImage: bgimg }}
        className='relative flex min-h-[520px] w-full overflow-hidden rounded-xl bg-cover bg-center shadow-2xl shadow-black/30 sm:min-h-[560px]'
      >
        <div className='absolute inset-0 bg-gradient-to-br from-[#071023]/90 via-[#071023]/55 to-[#071023]/80'></div>

        <div className='relative z-10 flex w-full flex-col justify-between gap-8 p-5 sm:p-8 lg:flex-row lg:items-end lg:p-10'>
          <div className='max-w-4xl self-end'>
            <p className='mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#57F1DB]'>
              Today
            </p>
            <h2 className='text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl'>
              {weather?.current?.last_updated ? formatTime(weather.current.last_updated) : 'Loading...'}
            </h2>
            <h3 className='mt-2 text-2xl font-bold leading-tight text-slate-200 sm:text-4xl lg:text-5xl'>
              {weather?.location?.name || 'Gorakhpur'} ({weather?.location?.region || 'Uttar Pradesh'})
            </h3>
          </div>

          <div className='w-full rounded-lg border border-white/10 bg-[#081022]/80 p-5 backdrop-blur-sm sm:w-80 lg:self-end'>
            <div className='mb-4 flex items-center justify-between gap-3'>
              <h2 className='text-3xl font-black text-white'>
                {weather?.current?.temp_c ?? '--'}°C
              </h2>
              {weather?.current?.condition?.icon && (
                <img
                  className='h-16 w-16'
                  src={`https:${weather.current.condition.icon}`}
                  alt={weather.current.condition.text}
                />
              )}
            </div>
            <p className='mb-5 text-lg font-bold text-[#57F1DB]'>
              {weather?.current?.condition?.text || 'Checking weather...'}
            </p>
            <div className='space-y-3 text-sm font-semibold text-slate-200 sm:text-base'>
              <p>Precipitation: {weather?.current?.precip_mm ?? '--'} mm</p>
              <p>Humidity: {weather?.current?.humidity ?? '--'}%</p>
              <p>Wind: {weather?.current?.wind_kph ?? '--'} kph</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Front
