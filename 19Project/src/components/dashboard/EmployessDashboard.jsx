import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../tasklist/TaskList'
const EmployessDashboard = (props) => {
  return (
    <div className='bg-[#1c1c1c] h-screen w-full p-10'>
     <Header setUser={props.setUser} data={props}/>
     <TaskListNumber data={props}/>
     <TaskList data={props}/>
    </div>
  )
}

export default EmployessDashboard