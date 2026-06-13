import React from 'react'

const FailedTask = ({task,key}) => {
  return (
  <div className='flex items-start gap-8 flex-col shrink-0 h-[90%] w-[25%] bg-sky-800 rounded-xl m-3 px-3.5'>
        <div key={key} className='h-15 w-full flex items-center justify-between '>
            <h2 className='font-bold text-2xl text-white rounded-xl px-2.5 py-1'>Failed Task</h2>
            <h3>{task.taskDate }</h3>
        </div>
        <h1 className='text-3xl font-bold'>{task.taskTitle}</h1>
        <p className='text-lg'>{task.taskDescription}</p>
        <button className='bg-red-600 px-3.5 py-2 rounded-xl'>Failed Task</button>
    </div>
      )
}

export default FailedTask