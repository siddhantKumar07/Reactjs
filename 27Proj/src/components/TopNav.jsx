import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const TopNav = () => {
  const [open, setOpen] = useState(false)

  const navItems = [
    { to: '/todo', label: 'To-Do list' },
    { to: '/dailyplanner', label: 'Daily Planner' },
    { to: '/motivational', label: 'Motivational' },
    { to: '/pomodoro', label: 'Pomodoro' },
    { to: '/dailygoal', label: 'Daily Goals' }
  ]

  return (
    <header className='sticky top-0 z-40 w-full border-b border-cyan-400/10 bg-[#131B2F]/95 backdrop-blur'>
      <div className='relative flex min-h-16 w-full items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10'>
        <Link to='/' className='min-w-0'>
          <h1 className='truncate text-2xl font-black tracking-normal text-[#57F1DB] sm:text-3xl lg:text-4xl'>
            Productivity Dashboard
          </h1>
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className='grid h-11 w-11 shrink-0 cursor-pointer place-items-center rounded-full bg-[#57F1DB] shadow-lg shadow-cyan-500/20 md:hidden'
          aria-label='Open menu'
          aria-expanded={open}
        >
          <i className={`${open ? 'ri-close-line' : 'ri-menu-line'} text-[#131B2F] text-2xl`}></i>
        </button>

        {open && (
          <div className='absolute left-0 right-0 top-full border-b border-cyan-400/20 bg-[#081022] shadow-2xl shadow-cyan-950/60 md:hidden'>
            <nav className='flex flex-col p-2'>
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className='rounded-md px-4 py-3 text-base font-bold text-slate-200 transition hover:bg-[#12203c] hover:text-[#57F1DB]'
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default TopNav
