import React from 'react'
import LogOutBtn from './LogOutBtn'

const Header = ({data}) => {

   const actualData = data.loggedInAdmin||data.loggedInEmployee;
  return (
     <header className='flex items-center justify-between h-20 w-full px-10.5'>
        <h1 className='text-2xl text-white font-medium'>Hello <br /> <span className='text-3xl'>{actualData.firstname} 👋</span> </h1>
         <LogOutBtn />
      </header>
  )
}

export default Header