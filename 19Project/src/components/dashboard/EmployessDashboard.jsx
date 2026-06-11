import React from 'react'

const EmployessDashboard = () => {
  return (
    <div className='bg-sky-300 h-screen w-full'>
      <header className='flex items-center justify-between h-20 w-full bg-gray-400 px-10'>
        <h1 className='text-2xl font-bold'>Hello <br /> Siddhant 👋</h1>
        <button className='px-3.5 py-3 bg-red-800 text-white font-bold rounded-4xl cursor-pointer active:scale-90'>Log Out</button>
      </header>
    </div>
  )
}

export default EmployessDashboard