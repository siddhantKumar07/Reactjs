import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Pomodoro = () => {
  const [mode, setMode] = useState('pomodoro') // pomodoro, shortBreak, longBreak
  const [time, setTime] = useState(25 * 60) // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false)

  const modes = {
    pomodoro: { label: 'Pomodoro', duration: 25 * 60, bgColor: 'from-blue-600 to-blue-700' },
    shortBreak: { label: 'Short Break', duration: 5 * 60, bgColor: 'from-red-600 to-red-700' },
    longBreak: { label: 'Long Break', duration: 15 * 60, bgColor: 'from-teal-600 to-teal-700' }
  }

  const handleModeChange = (newMode) => {
    setMode(newMode)
    setTime(modes[newMode].duration)
    setIsRunning(false)
  }

  const handleStart = () => {
    setIsRunning(true)
  }

  const handlePause = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    setTime(modes[mode].duration)
    setIsRunning(false)
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className='h-screen bg-[#0B1326] w-full flex flex-col items-center justify-center p-8 relative overflow-hidden'>
      {/* Header */}
      <div className='absolute top-8 left-8'>
        <h1 className='text-white text-2xl font-bold'>Study with me !</h1>
      </div>

      {/* Back Button */}
      <div className='absolute top-8 right-8 z-10'>
        <Link to={'/'} className='bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-2 px-4 rounded-lg transition-all'>
          Click
        </Link>
      </div>

      {/* Main Card */}
      <div className={`bg-gradient-to-br ${modes[mode].bgColor} rounded-3xl p-16 shadow-2xl max-w-2xl w-full`}>
        
        {/* Mode Tabs */}
        <div className='flex gap-4 justify-center mb-12'>
          <button
            onClick={() => handleModeChange('pomodoro')}
            className={`px-6 py-2 rounded-full font-bold transition-all ${
              mode === 'pomodoro'
                ? 'bg-white text-black'
                : 'bg-black/30 text-white hover:bg-black/50'
            }`}
          >
            Pomodoro
          </button>
          <button
            onClick={() => handleModeChange('shortBreak')}
            className={`px-6 py-2 rounded-full font-bold transition-all ${
              mode === 'shortBreak'
                ? 'bg-white text-black'
                : 'bg-black/30 text-white hover:bg-black/50'
            }`}
          >
            Short Break
          </button>
          <button
            onClick={() => handleModeChange('longBreak')}
            className={`px-6 py-2 rounded-full font-bold transition-all ${
              mode === 'longBreak'
                ? 'bg-white text-black'
                : 'bg-black/30 text-white hover:bg-black/50'
            }`}
          >
            Long Break
          </button>
        </div>

        {/* Timer Display */}
        <div className='text-center mb-12'>
          <div className='text-7xl font-bold text-white tracking-wider font-mono'>
            {formatTime(time)}
          </div>
        </div>

        {/* Control Buttons */}
        <div className='flex gap-6 justify-center'>
          <button
            onClick={handleStart}
            className='bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-all'
          >
            Start
          </button>
          <button
            onClick={handlePause}
            className='bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-all'
          >
            Pause
          </button>
          <button
            onClick={handleReset}
            className='bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-all'
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pomodoro