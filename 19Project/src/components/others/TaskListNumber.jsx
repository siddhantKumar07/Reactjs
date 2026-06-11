import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='mt-6  h-50 w-full flex items-center justify-between gap-5'>
    <div className='bg-red-400 w-[45%] px-9 py-10 rounded-xl'>
        <h2 className='text-3xl font-bold'>0</h2>
        <h3 className='text-xl  font-medium'>New List</h3>
    </div>
    <div className='bg-green-600  px-9 py-10 w-[45%]  rounded-xl'>
  <h2 className='text-3xl font-bold'>0</h2>
        <h3 className='text-xl  font-medium'>New List</h3>
    </div>
    <div className='bg-yellow-300  px-9 py-10 w-[45%] rounded-xl '>
          <h2 className='text-3xl font-bold'>0</h2>
        <h3 className='text-xl  font-medium'>New List</h3>
    </div>
    <div className='bg-emerald-600 px-9 py-10 w-[45%] rounded-xl'>
        <h2 className='text-3xl font-bold'>0</h2>
        <h3 className='text-xl  font-medium'>New List</h3>
    </div>
    </div>
  )
}

export default TaskListNumber