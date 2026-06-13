import React from 'react'

const NewTask = ({task}) => {
  return (
    <div className='flex items-start gap-8 flex-col shrink-0 h-[90%] w-[25%] bg-yellow-300 rounded-xl m-3 px-3.5'>
        <div className='h-15 w-full flex items-center justify-between '>
            <h2 className='font-bold text-2xl bg-green-400 text-white rounded-xl px-2.5 py-1'>New Task</h2>
            <h3>{task.taskDate }</h3>
        </div>
        <h1 className='text-3xl font-bold'>{task.taskTitle}</h1>
        <p className='text-lg'>{task.taskDescription}</p>
        <div className='flex justify-between items-center gap-3 '>
          <button className='bg-green-600 cursor-pointer active:scale-90 px-3.5 py-2 rounded-xl'>Accept</button>
          <button className='bg-red-600 cursor-pointer active:scale-90 px-3.5 py-2 rounded-xl'>Deny</button>
        </div>
    </div>
  )
}

export default NewTask