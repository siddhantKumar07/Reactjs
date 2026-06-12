import React from 'react'

const TaskList = ({data}) => {
    data.loggedInEmployee.tasks.forEach((each)=>{
  console.log(each)
    })
  return (
    <div className='tasklist overflow-scroll h-[55%] w-full rounded-xl flex items-center justify-start flex-nowrap gap-2  '>
       {data.loggedInEmployee.tasks.map((task,idx)=>{
          return <div className='flex items-start gap-8 flex-col shrink-0 h-[90%] w-[25%] bg-sky-600 rounded-xl m-3 px-3.5'>
        <div key={idx} className='h-15 w-full flex items-center justify-between '>
            <h2 className='font-bold text-2xl bg-red-600 text-white rounded-xl px-2.5 py-1'>High</h2>
            <h3>{task.taskDate }</h3>
        </div>
        <h1 className='text-3xl font-bold'>{task.taskTitle}</h1>
        <p className='text-lg'>{task.taskDescription}</p>
    </div>
       })} 

 
  
    </div>
  )
}

export default TaskList