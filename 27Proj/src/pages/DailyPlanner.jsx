import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const DailyPlanner = () => {
  const timeSlots = [
    '6 AM - 7 AM',
    '8 AM - 9 AM',
    '10 AM - 11 AM',
    '12 PM - 1 PM',
    '2 PM - 3 PM',
    '4 PM - 5 PM',
    '6 PM - 7 PM',
    '8 PM - 9 PM',
    '10 PM - 11 PM',
    '7 AM - 8 AM',
    '9 AM - 10 AM',
    '11 AM - 12 PM',
    '1 PM - 2 PM',
    '3 PM - 4 PM',
    '5 PM - 6 PM',
    '7 PM - 8 PM',
    '9 PM - 10 PM',
    '11 PM - 12 AM'
  ]

  const [tasks, setTasks] = useState(
    timeSlots.reduce((acc, slot) => {
      acc[slot] = ''
      return acc
    }, {})
  )

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('dailyPlannerTasks')
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks))
      } catch (error) {
        console.error('Error loading tasks:', error)
      }
    }
  }, [])

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('dailyPlannerTasks', JSON.stringify(tasks))
  }, [tasks])

  const handleTaskChange = (slot, value) => {
    setTasks({ ...tasks, [slot]: value })
  }

  const clearAllTasks = () => {
    if (window.confirm('Are you sure you want to clear all tasks?')) {
      const emptyTasks = timeSlots.reduce((acc, slot) => {
        acc[slot] = ''
        return acc
      }, {})
      setTasks(emptyTasks)
    }
  }

  return (
    <div className='h-full bg-[#0B1326] w-full p-8 min-h-screen'>
      {/* Header */}
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-white text-3xl font-bold'>Your Daily Planner</h1>
        <div className='flex gap-4'>
          <button
            onClick={clearAllTasks}
            className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-all'
          >
            Clear All
          </button>
          <Link to={'/'} className='bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-2 px-4 rounded-lg transition-all'>
            Back
          </Link>
        </div>
      </div>

      {/* Time Slots Grid */}
      <div className='grid grid-cols-2 gap-6'>
        {timeSlots.map((slot, index) => (
          <div key={index} className='bg-[#0d1b2a] border border-cyan-900 rounded-lg p-6 hover:border-cyan-400 transition-all'>
            {/* Time Header */}
            <div className='text-cyan-400 font-bold text-sm mb-4 flex items-center gap-2'>
              <i className='ri-time-line'></i>
              {slot}
            </div>

            {/* Task Input */}
            <input
              type="text"
              placeholder='Enter task'
              value={tasks[slot]}
              onChange={(e) => handleTaskChange(slot, e.target.value)}
              className='w-full bg-[#081022] border border-cyan-900 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition-all'
            />
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className='text-center text-gray-600 text-xs mt-12'>
        © 2025 Luxdox Pro Daily Planner. All tasks are auto-saved.
      </div>
    </div>
  )
}

export default DailyPlanner