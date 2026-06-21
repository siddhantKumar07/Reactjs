import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Pomodoro = () => {
  const [mode, setMode] = useState('pomodoro')
  const [time, setTime] = useState(25 * 60)
  const [isRunning, setIsRunning] = useState(false)
  const [sessionsCompleted, setSessionsCompleted] = useState(0)

  const modes = {
    pomodoro: { label: 'Pomodoro', duration: 25 * 60, bgColor: 'from-blue-600 to-blue-700' },
    shortBreak: { label: 'Short Break', duration: 5 * 60, bgColor: 'from-red-600 to-red-700' },
    longBreak: { label: 'Long Break', duration: 15 * 60, bgColor: 'from-teal-600 to-teal-700' }
  }

  // Load data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('pomodoroData')
    if (savedData) {
      try {
        const data = JSON.parse(savedData)
        setSessionsCompleted(data.sessionsCompleted || 0)
      } catch (error) {
        console.error('Error loading data:', error)
      }
    }
  }, [])

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem('pomodoroData', JSON.stringify({ sessionsCompleted }))
  }, [sessionsCompleted])

  // Timer countdown logic
  useEffect(() => {
    let interval
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime(time - 1)
      }, 1000)
    } else if (time === 0 && isRunning) {
      // Timer completed
      setIsRunning(false)
      playNotification()
      
      if (mode === 'pomodoro') {
        setSessionsCompleted(sessionsCompleted + 1)
        // Auto switch to short break
        setMode('shortBreak')
        setTime(modes.shortBreak.duration)
      } else {
        // Switch back to pomodoro
        setMode('pomodoro')
        setTime(modes.pomodoro.duration)
      }
    }
    return () => clearInterval(interval)
  }, [isRunning, time, mode, sessionsCompleted])

  const playNotification = () => {
    // Create a simple beep sound
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)
    
    oscillator.frequency.value = 800
    oscillator.type = 'sine'
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5)
    
    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.5)
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
    <div className='relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0B1326] p-5 sm:p-8'>
      {/* Header */}
      <div className='absolute left-5 top-5 sm:left-8 sm:top-8'>
        <h1 className='text-xl font-bold text-white sm:text-2xl'>Study with me !</h1>
      </div>

      {/* Back Button */}
      <div className='absolute right-5 top-5 z-10 sm:right-8 sm:top-8'>
        <Link to={'/'} className='bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-2 px-4 rounded-lg transition-all'>
          Click
        </Link>
      </div>

      {/* Main Card */}
      <div className={`mt-16 w-full max-w-2xl rounded-2xl bg-gradient-to-br ${modes[mode].bgColor} p-5 shadow-2xl sm:mt-10 sm:p-10 lg:p-16`}>
        
        {/* Mode Tabs */}
        <div className='mb-10 flex flex-wrap justify-center gap-3 sm:mb-12 sm:gap-4'>
          <button
            onClick={() => handleModeChange('pomodoro')}
            className={`cursor-pointer rounded-full px-4 py-2 font-bold transition-all active:scale-95 sm:px-6 ${
              mode === 'pomodoro'
                ? 'bg-white text-black'
                : 'bg-black/30 text-white hover:bg-black/50'
            }`}
          >
            Pomodoro
          </button>
          <button
            onClick={() => handleModeChange('shortBreak')}
            className={`cursor-pointer rounded-full px-4 py-2 font-bold transition-all active:scale-95 sm:px-6 ${
              mode === 'shortBreak'
                ? 'bg-white text-black'
                : 'bg-black/30 text-white hover:bg-black/50'
            }`}
          >
            Short Break
          </button>
          <button
            onClick={() => handleModeChange('longBreak')}
            className={`cursor-pointer rounded-full px-4 py-2 font-bold transition-all active:scale-95 sm:px-6 ${
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
          <div className='font-mono text-5xl font-bold tracking-normal text-white sm:text-7xl'>
            {formatTime(time)}
          </div>
        </div>

        {/* Control Buttons */}
        <div className='mb-8 flex flex-wrap justify-center gap-3 sm:gap-6'>
          <button
            onClick={handleStart}
            disabled={isRunning}
            className='bg-white cursor-pointer active:scale-95 text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {isRunning ? 'Running' : 'Start'}
          </button>
          <button
            onClick={handlePause}
            className='bg-white cursor-pointer active:scale-95 text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-all'
          >
            Pause
          </button>
          <button
            onClick={handleReset}
            className='bg-white cursor-pointer active:scale-95 text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-all'
          >
            Reset
          </button>
        </div>

        {/* Sessions Completed */}
        <div className='text-center'>
          <p className='text-white text-lg font-semibold'>
            Sessions Completed: <span className='text-yellow-300'>{sessionsCompleted}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Pomodoro
