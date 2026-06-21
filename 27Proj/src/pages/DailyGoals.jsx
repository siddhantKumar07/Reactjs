import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const DailyGoals = () => {
  const [goals, setGoals] = useState([])
  const [goalInput, setGoalInput] = useState('')

  useEffect(() => {
    const savedGoals = localStorage.getItem('dailyGoals')
    if (savedGoals) {
      try {
        setGoals(JSON.parse(savedGoals))
      } catch (error) {
        console.error('Error loading goals:', error)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('dailyGoals', JSON.stringify(goals))
  }, [goals])

  const addGoal = () => {
    if (goalInput.trim()) {
      const newGoal = {
        id: goals.length > 0 ? Math.max(...goals.map((g) => g.id)) + 1 : 1,
        title: goalInput,
        date: new Date().toLocaleDateString('en-GB'),
        completed: false
      }
      setGoals([...goals, newGoal])
      setGoalInput('')
    }
  }

  const toggleGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id))
  }

  const deleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id))
  }

  const clearAllGoals = () => {
    if (window.confirm('Are you sure you want to clear all goals?')) {
      setGoals([])
    }
  }

  return (
    <div className='min-h-screen w-full bg-[#0B1326] p-5 sm:p-8'>
      <div className='mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <h1 className='text-3xl font-bold text-white sm:text-4xl'>Daily Goals</h1>
        <div className='flex flex-wrap gap-4'>
          <button
            onClick={clearAllGoals}
            className='rounded-lg cursor-pointer bg-red-600 px-4 py-2 font-bold text-white transition-all hover:bg-red-700'
          >
            Clear All
          </button>
          <Link
            to='/'
            className='rounded-lg cursor-pointer bg-cyan-400 px-4 py-2 font-bold text-black transition-all hover:bg-cyan-500'
          >
            Back
          </Link>
        </div>
      </div>

      <div className='mx-auto mb-12 max-w-3xl'>
        <div className='rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/50 to-indigo-900/50 p-5 sm:p-8'>
          <h2 className='mb-6 text-center text-xl font-bold text-cyan-400'>What's Your Goal Today?</h2>
          <div className='flex flex-col gap-4 sm:flex-row'>
            <input
              type='text'
              placeholder='Enter your goal...'
              value={goalInput}
              onChange={(e) => setGoalInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addGoal()}
              className='min-w-0 flex-1 rounded-full border border-cyan-400/50 bg-white/10 px-6 py-3 text-white placeholder-gray-400 transition-all focus:border-cyan-400 focus:outline-none'
            />
            <button
              onClick={addGoal}
              className='rounded-full bg-green-500 px-8 py-3 cursor-pointer font-bold text-white transition-all hover:bg-green-600'
            >
              Set Goal
            </button>
          </div>
        </div>
      </div>

      <div className='mx-auto mb-12 max-w-3xl'>
        <div className='mb-3 flex flex-wrap items-center justify-between gap-2'>
          <span className='text-sm text-gray-400'>Daily Progress</span>
          <span className='font-bold text-cyan-400'>{goals.length} Goals Remaining</span>
        </div>
        <div className='h-3 w-full rounded-full bg-gray-700'>
          <div className='h-3 rounded-full bg-gradient-to-r from-green-400 to-green-500'></div>
        </div>
      </div>

      <div className='mx-auto max-w-3xl'>
        <div className='space-y-4'>
          {goals.length === 0 ? (
            <div className='rounded-2xl border border-cyan-900/50 bg-[#0d1b2a] p-8 text-center sm:p-12'>
              <i className='ri-target-2-line mb-4 block text-5xl text-green-600'></i>
              <p className='text-lg font-bold text-green-400'>All goals completed for today!</p>
            </div>
          ) : (
            goals.map((goal) => (
              <div
                key={goal.id}
                className='group rounded-2xl border border-purple-500/30 bg-gradient-to-r from-indigo-900/40 to-purple-900/40 p-5 transition-all hover:border-purple-500/60 sm:p-6'
              >
                <div className='flex items-center gap-4'>
                  <input
                    type='checkbox'
                    onChange={() => toggleGoal(goal.id)}
                    className='h-6 w-6 cursor-pointer rounded-full border-2 border-cyan-400 accent-green-500'
                  />
                  <div className='min-w-0 flex-1'>
                    <h3 className='break-words text-lg font-bold text-white'>{goal.title}</h3>
                    <p className='text-sm text-gray-500'>
                      <i className='ri-calendar-line mr-2'></i>
                      {goal.date}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteGoal(goal.id)}
                    className='text-red-400 opacity-100 transition-all hover:text-red-300 sm:opacity-0 sm:group-hover:opacity-100'
                  >
                    <i className='ri-delete-bin-line text-xl'></i>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default DailyGoals
