import React from 'react'

const AcceptTask = ({task,key}) => {
  return (
    <div className='flex items-start gap-8 flex-col shrink-0 h-[90%] w-[25%] bg-purple-600 rounded-xl m-3 px-3.5'>
        <div key={key} className='h-15 w-full flex items-center justify-between '>
            <h2 className='font-bold text-2xl  text-white rounded-xl px-2.5 py-1'>Accepted Task</h2>
            <h3>{task.taskDate }</h3>
        </div>
        <h1 className='text-3xl font-bold'>{task.taskTitle}</h1>
        <p className='text-lg'>{task.taskDescription}</p>
 <div className='flex justify-between items-center gap-3 '>
          <button className='bg-green-600 cursor-pointer active:scale-90 px-3.5 py-2 rounded-xl'>Mark as completed</button>
          <button className='bg-red-600 cursor-pointer active:scale-90 px-3.5 py-2 rounded-xl'>mark as failed</button>
        </div>    </div>
  )
}

export default AcceptTask