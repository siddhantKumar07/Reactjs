import React, { useState } from 'react'
import Nav2 from './Nav2'

const Nav = () => {
    const [theme, setTheme] = useState('light')
  return (
    <div className='nav'>
       <h1>Siddhant kumar</h1>
       <Nav2 theme={theme}/>
    </div>
  )
}

export default Nav