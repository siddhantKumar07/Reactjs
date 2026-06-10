import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <nav className='h-20 w-full bg-sky-600 flex justify-between px-2.5  align-center'>
       <h2 className='text-3xl self-center'>Siddhant kumar</h2>
      <div className='text-2xl font-bold w-[30%] flex justify-between items-center'>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/contact'}>Contact</Link>
      <Link to={'/product'}>Product</Link>
      </div>
    </nav>
  )
}

export default Nav