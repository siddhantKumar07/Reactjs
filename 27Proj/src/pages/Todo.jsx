import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Todo = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Cloud Architecture Presentation', tag: 'URGENT', description: 'Review AWS Lambda infrastructure diagrams and finalize the scalability section for tomorrow\'s board meeting.', date: 'Today', time: '5:38 PM', attachments: 3, completed: false },
    { id: 2, title: 'Onboard New Designer', tag: 'PENDING', description: 'Send access invites for Figma, Slack, and Linear t. Schedule initial 1-on-1 for project orientation.', date: 'Wed', time: '10:38 AM', attachments: 0, completed: false },
    { id: 3, title: 'Research Micro-interactions', tag: '', description: 'Find inspiration for CSS/SVG animations in high-end productivity dashboards. Focus on glass morphism and glow effects.', date: 'Est', time: '2 hours', attachments: 0, completed: false }
  ])

  const [taskName, setTaskName] = useState('')
  const [taskDetails, setTaskDetails] = useState('')
  const [isImportant, setIsImportant] = useState(false)

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks')
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
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    if (taskName.trim()) {
      const newTask = {
        id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
        title: taskName,
        description: taskDetails,
        tag: isImportant ? 'URGENT' : '',
        date: 'Today',
        time: new Date().toLocaleTimeString(),
        attachments: 0,
        completed: false
      }
      setTasks([...tasks, newTask])
      setTaskName('')
      setTaskDetails('')
      setIsImportant(false)
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const completedTasks = tasks.filter(t => t.completed).length
  const progressPercent = tasks.length > 0 ? (completedTasks / tasks.length) * 100 : 0

  return (
    <div className='h-screen bg-[#0B1326] w-full flex'>
      {/* Left Sidebar */}
      <div className='w-[25%] bg-[#0d1b2a] p-8 border-r border-cyan-900 overflow-y-auto'>
        <h2 className='text-cyan-400 text-lg font-bold mb-6'>Capture Task</h2>
        <p className='text-gray-400 text-sm mb-6'>Add a new item to your focused roadmap.</p>

        <div className='space-y-4'>
          <div>
            <label className='text-cyan-400 text-xs font-bold mb-2 block'>TASK NAME</label>
            <input
              type="text"
              placeholder='e.g., Finalize Q3 Report'
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
              className='w-full bg-[#081022] border border-cyan-900 rounded px-4 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400'
            />
          </div>

          <div>
            <label className='text-cyan-400 text-xs font-bold mb-2 block'>DETAILS</label>
            <textarea
              placeholder='Brief context or sub-tasks...'
              value={taskDetails}
              onChange={(e) => setTaskDetails(e.target.value)}
              className='w-full bg-[#081022] border border-cyan-900 rounded px-4 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 h-24 resize-none'
            />
          </div>

          <div className='flex items-center justify-between'>
            <span className='text-white text-sm'>Mark as Important</span>
            <button
              onClick={() => setIsImportant(!isImportant)}
              className={`w-12 h-6 rounded-full transition-all ${isImportant ? 'bg-cyan-400' : 'bg-gray-600'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-all ${isImportant ? 'ml-6' : 'ml-0.5'}`}></div>
            </button>
          </div>

          <button
            onClick={addTask}
            className='w-full bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all'
          >
            <i className='ri-add-line text-xl'></i>
            Add Task
          </button>
        </div>

        {/* Daily Progress */}
        <div className='mt-12'>
          <h3 className='text-gray-400 text-xs font-bold mb-3'>DAILY PROGRESS</h3>
          <div className='text-3xl font-bold text-cyan-400 mb-3'>{Math.round(progressPercent)}%</div>
          <div className='w-full bg-gray-700 rounded-full h-2 mb-2'>
            <div className='bg-cyan-400 h-2 rounded-full transition-all' style={{ width: `${progressPercent}%` }}></div>
          </div>
          <p className='text-gray-500 text-xs'>You've completed {completedTasks} of {tasks.length} tasks.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex-1 p-8 overflow-y-auto'>
        {/* Header */}
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-white text-2xl font-bold'>Task Manager</h1>
          <Link to={'/'} className='bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-all'>
            <i className='ri-arrow-left-line'></i>
            Back to Home
          </Link>
        </div>

        {/* Tabs */}
        <div className='flex gap-6 mb-6 border-b border-cyan-900 pb-4'>
          <button className='text-cyan-400 font-bold border-b-2 border-cyan-400 pb-2'>Active Workflow</button>
          <button className='text-gray-500 hover:text-gray-400'>{tasks.length} Total</button>
        </div>

        {/* Filter and Sort */}
        <div className='flex justify-end gap-4 mb-6'>
          <button className='bg-[#0d1b2a] border border-cyan-900 text-gray-300 px-4 py-2 rounded-lg hover:border-cyan-400 transition-all'>
            <i className='ri-filter-line mr-2'></i>Filter
          </button>
          <button className='bg-[#0d1b2a] border border-cyan-900 text-gray-300 px-4 py-2 rounded-lg hover:border-cyan-400 transition-all'>
            <i className='ri-sort-asc mr-2'></i>Sort
          </button>
        </div>

        {/* Tasks List */}
        <div className='space-y-4'>
          {tasks.map((task) => (
            <div key={task.id} className='bg-[#0d1b2a] border border-cyan-900 rounded-lg p-6 hover:border-cyan-400 transition-all'>
              <div className='flex gap-4'>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className='w-6 h-6 rounded border-cyan-400 cursor-pointer mt-1'
                />
                <div className='flex-1'>
                  <div className='flex items-center gap-3 mb-2'>
                    <h3 className={`font-bold text-lg ${task.completed ? 'line-through text-gray-500' : 'text-white'}`}>
                      {task.title}
                    </h3>
                    {task.tag && (
                      <span className={`text-xs font-bold px-2 py-1 rounded ${task.tag === 'URGENT' ? 'bg-red-900 text-red-200' : 'bg-yellow-900 text-yellow-200'}`}>
                        {task.tag}
                      </span>
                    )}
                  </div>
                  <p className='text-gray-400 text-sm mb-3'>{task.description}</p>
                  <div className='flex gap-4 text-gray-500 text-xs'>
                    <span><i className='ri-calendar-line mr-1'></i>{task.date}</span>
                    <span><i className='ri-time-line mr-1'></i>{task.time}</span>
                    {task.attachments > 0 && <span><i className='ri-attachment-2 mr-1'></i>{task.attachments} Attachments</span>}
                  </div>
                </div>
                <button
                  onClick={() => deleteTask(task.id)}
                  className='text-red-400 hover:text-red-300 transition-all'
                >
                  <i className='ri-delete-bin-line text-xl'></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {tasks.length === 0 && (
          <div className='text-center py-16'>
            <i className='ri-inbox-line text-5xl text-gray-600 mb-4 block'></i>
            <p className='text-gray-500 text-lg'>Ready for the next challenge? Add a task to grow your list.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Todo