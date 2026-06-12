import React from 'react'

const TaskListNumber = ({data}) => {
  const active=data.loggedInEmployee.taskNumbers.active||0;
  const newTask =data.loggedInEmployee.taskNumbers.newTask||0
  const completed=data.loggedInEmployee.taskNumbers.completed||0;
  const failed =data.loggedInEmployee.taskNumbers.failed||0;
  return (
    <div className='mt-6  h-50 w-full flex items-center justify-between gap-5'>
    <div className='bg-red-400 w-[45%] px-9 py-10 rounded-xl'>
        <h2 className='text-3xl font-bold'>{active}</h2>
        <h3 className='text-xl  font-medium'>Active</h3>
    </div>
    <div className='bg-green-600  px-9 py-10 w-[45%]  rounded-xl'>
  <h2 className='text-3xl font-bold'>{newTask}</h2>
        <h3 className='text-xl  font-medium'>NewTask</h3>
    </div>
    <div className='bg-yellow-300  px-9 py-10 w-[45%] rounded-xl '>
          <h2 className='text-3xl font-bold'>{completed}</h2>
        <h3 className='text-xl  font-medium'>Completed</h3>
    </div>
    <div className='bg-emerald-600 px-9 py-10 w-[45%] rounded-xl'>
        <h2 className='text-3xl font-bold'>{failed}</h2>
        <h3 className='text-xl  font-medium'>Failed</h3>
    </div>
    </div>
  )
}

export default TaskListNumber