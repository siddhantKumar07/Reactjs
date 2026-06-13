import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const authData = useContext(AuthContext)

console.log(authData.employees)
  return (

    <div className='bg-[#3b3a3a] p-5 rounded h-65 w-[95%]  overflow-auto'>
       <div className='bg-[#3b3a3a] px-2 py-4 flex rounded justify-between mb-3'>
            <h2 className='text-xl w-1/5 text-center font-bold text-white'>Employee Name</h2>
            <h2 className='text-xl w-1/5 text-center font-bold text-white'>New Task</h2>
            <h2 className='text-xl w-1/5 text-center font-bold text-white'>Active Task</h2>
            <h2 className='text-xl w-1/5 text-center font-bold text-white'>Completed Task</h2>
            <h2 className='text-xl w-1/5 text-center font-bold text-white'>Failed</h2>
        </div>
        {authData.employees.map((elem)=>{
            return  <div className='bg-red-400 px-2 py-4 flex rounded justify-between mb-3'>
            <h2 className='text-xl text-center font-bold w-1/5'>{elem.firstname}</h2>
            <h2 className='w-1/5 text-center'>new task</h2>
            <h2 className='w-1/5 text-center'>Active task</h2>
            <h2 className='w-1/5 text-center'>Completed task</h2>
            <h2 className='w-1/5 text-center'>Failed</h2>
        </div>
        })}


    </div>
  )
}

export default AllTask