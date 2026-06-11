import React, { useContext, useState } from 'react'
import Nav2 from './Nav2'
import Button from './Button'
import { ThemeDataContext } from '../context/ThemeContext'

const Nav = () => {
  const[theme]=useContext(ThemeDataContext)
  return (
    <div className={`nav ${theme}`}>
       <h1>Siddhant kumar</h1>
       <Nav2 />
       <Button/>
    </div>
  )
}

export default Nav