import React from 'react'

const Header = () => {
  return (
     <header className='flex items-center justify-between h-20 w-full px-2.5'>
        <h1 className='text-2xl text-white font-medium'>Hello <br /> <span className='text-3xl'>Siddhant 👋</span> </h1>
        <button className='px-3.5 py-3 bg-red-800 text-white font-bold rounded-xl cursor-pointer active:scale-90'>Log Out</button>
      </header>
  )
}

export default Header