import React from 'react'
import {Link} from 'react-router-dom'
const RightNav = () => {
  return (
    <div className='h-full  py-6 bg-[#081022] gap-7 w-[22%] flex flex-col items-start justify-start overflow-x-hidden shadow-lg shadow-cyan-900'>
    <Link className=' text-2xl font-bold text-(--text-color) hover:bg-[#12203c] transition-all hover:translate-x-2 ease-in-out duration-400 w-full py-4 px-6' to={'todo'}>To-Do list</Link>
    <Link className=' text-2xl font-bold text-(--text-color) hover:bg-[#12203c] transition-all hover:translate-x-2 ease-in-out duration-400 w-full py-4 px-6' to={'dailyplanner'}>Daily Planner</Link>
    <Link className=' text-2xl font-bold text-(--text-color) hover:bg-[#12203c] transition-all hover:translate-x-2 ease-in-out duration-400 w-full py-4 px-6'to={'motivational'}>Motivational</Link>
    <Link className=' text-2xl font-bold text-(--text-color) hover:bg-[#12203c] transition-all hover:translate-x-2 ease-in-out duration-400 w-full py-4 px-6' to={'pomodoro'}>Pomodoro</Link>
    <Link className=' text-2xl font-bold text-(--text-color) hover:bg-[#12203c] transition-all hover:translate-x-2 ease-in-out duration-400 w-full py-4 px-6' to={'dailygoal'}>Daily Goals</Link>


    </div>
  )
}

export default RightNav