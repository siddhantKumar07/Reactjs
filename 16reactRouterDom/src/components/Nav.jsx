import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (

        <nav className="nav">
        <h2>Siddhant kumar</h2>
        <links>
        <Link className='link' to='/' >Home</Link>
        <Link className='link' to={'/about'}  >About</Link>
        <Link className='link' to={'/contact'}  >Contact</Link>
        </links>
      </nav>
  )
}

export default Nav