import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Nav2 = () => {
  const [theme,setTheme] =useContext(ThemeDataContext)
  console.log(theme)
  return (
    <div className='nav2'>
        <h2>home</h2>
        <h2>about</h2>
        <h2>contact</h2>
        <h2>{theme}</h2>
    </div>
  )
}

export default Nav2