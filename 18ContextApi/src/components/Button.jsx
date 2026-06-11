import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {
    const [theme,setTheme] = useContext(ThemeDataContext);
  return (
    <div>
        <button
        onClick={()=>{
            console.log(setTheme("dark"))
    
        }}
        > change Theme</button>
    </div>
  )
}

export default Button