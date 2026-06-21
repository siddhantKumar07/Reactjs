import React from 'react'
import { Link } from 'react-router-dom'

const RightNav = () => {
  const navItems = [
    { to: '/todo', label: 'To-Do list', icon: 'ri-checkbox-circle-line' },
    { to: '/dailyplanner', label: 'Daily Planner', icon: 'ri-calendar-schedule-line' },
    { to: '/motivational', label: 'Motivational', icon: 'ri-sparkling-line' },
    { to: '/pomodoro', label: 'Pomodoro', icon: 'ri-timer-flash-line' },
    { to: '/dailygoal', label: 'Daily Goals', icon: 'ri-trophy-fill' }
  ]

  return (
    <aside className='hidden h-full w-72 shrink-0 border-r border-cyan-400/10 bg-[#081022] px-4 py-6 shadow-xl shadow-cyan-950/30 md:flex md:flex-col'>
      <nav className='flex flex-col gap-2'>
        {navItems.map((item) => (
          <Link
            key={item.to}
            className='flex min-h-14 items-center gap-3 rounded-lg px-4 text-lg font-bold text-slate-300 transition hover:bg-[#12203c] hover:text-[#57F1DB]'
            to={item.to}
          >
            <i className={`${item.icon} text-xl text-[#57F1DB]`}></i>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default RightNav

