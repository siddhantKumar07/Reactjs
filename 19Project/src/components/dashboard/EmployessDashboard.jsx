import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../tasklist/TaskList'
const EmployessDashboard = () => {
  return (
    <div className='bg-[#1c1c1c] h-screen w-full p-10'>
     <Header/>
     <TaskListNumber/>
     <TaskList/>
    </div>
  )
}

export default EmployessDashboard