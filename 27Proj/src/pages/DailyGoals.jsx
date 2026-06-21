import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const DailyGoals = () => {
  const [goals, setGoals] = useState([])

  const [goalInput, setGoalInput] = useState('')

  // Load goals from localStorage on component mount
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

  // Save goals to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('dailyGoals', JSON.stringify(goals))
  }, [goals])

  const addGoal = () => {
    if (goalInput.trim()) {
      const newGoal = {
        id: goals.length > 0 ? Math.max(...goals.map(g => g.id)) + 1 : 1,
        title: goalInput,
        date: new Date().toLocaleDateString('en-GB'),
        completed: false
      }
      setGoals([...goals, newGoal])
      setGoalInput('')
    }
  }

  const toggleGoal = (id) => {
    // Remove the goal when completed
    const updatedGoals = goals.filter(goal => goal.id !== id)
    setGoals(updatedGoals)
  }

  const deleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id))
  }

  const clearAllGoals = () => {
    if (window.confirm('Are you sure you want to clear all goals?')) {
      setGoals([])
    }
  }

  const completedCount = goals.filter(g => g.completed).length
  const progressPercent = goals.length > 0 ? (completedCount / goals.length) * 100 : 0

  return (
    <div className='h-full bg-[#0B1326] w-full p-8 min-h-screen'>
      {/* Header */}
      <div className='flex justify-between items-center mb-12'>
        <h1 className='text-white text-4xl font-bold'>Daily Goals</h1>
        <div className='flex gap-4'>
          <button
            onClick={clearAllGoals}
            className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-all'
          >
            Clear All
          </button>
          <Link to={'/'} className='bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-2 px-4 rounded-lg transition-all'>
            Click
          </Link>
        </div>
      </div>

      {/* Input Section */}
      <div className='max-w-3xl mx-auto mb-12'>
        <div className='bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border border-purple-500/30 rounded-2xl p-8'>
          <h2 className='text-cyan-400 text-xl font-bold mb-6 text-center'>What's Your Goal Today?</h2>
          <div className='flex gap-4'>
            <input
              type="text"
              placeholder='Enter your goal...'
              value={goalInput}
              onChange={(e) => setGoalInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addGoal()}
              className='flex-1 bg-white/10 border border-cyan-400/50 rounded-full px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all'
            />
            <button
              onClick={addGoal}
              className='bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-full transition-all'
            >
              Set Goal
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className='max-w-3xl mx-auto mb-12'>
        <div className='flex justify-between items-center mb-3'>
          <span className='text-gray-400 text-sm'>Daily Progress</span>
          <span className='text-cyan-400 font-bold'>{goals.length} Goals Remaining</span>
        </div>
        <div className='w-full bg-gray-700 rounded-full h-3'>
          <div
            className='bg-gradient-to-r from-green-400 to-green-500 h-3 rounded-full transition-all duration-300'
            style={{ width: '100%' }}
          ></div>
        </div>
      </div>

      {/* Goals List */}
      <div className='max-w-3xl mx-auto'>
        <div className='space-y-4'>
          {goals.length === 0 ? (
            <div className='bg-[#0d1b2a] border border-cyan-900/50 rounded-2xl p-12 text-center'>
              <i className='ri-target-2-line text-5xl text-green-600 mb-4 block'></i>
              <p className='text-green-400 text-lg font-bold'>🎉 All goals completed for today!</p>
            </div>
          ) : (
            goals.map((goal) => (
              <div
                key={goal.id}
                className='bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/60 transition-all group'
              >
                <div className='flex items-center gap-4'>
                  <input
                    type="checkbox"
                    onChange={() => toggleGoal(goal.id)}
                    className='w-6 h-6 rounded-full border-2 border-cyan-400 cursor-pointer accent-green-500'
                  />
                  <div className='flex-1'>
                    <h3 className='font-bold text-lg text-white'>
                      {goal.title}
                    </h3>
                    <p className='text-gray-500 text-sm'>
                      <i className='ri-calendar-line mr-2'></i>
                      {goal.date}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteGoal(goal.id)}
                    className='text-red-400 hover:text-red-300 transition-all opacity-0 group-hover:opacity-100'
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