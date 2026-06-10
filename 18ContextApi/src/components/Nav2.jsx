import React from 'react'

const Nav2 = ({theme}) => {
  return (
    <div className='nav2'>
        <h2>home</h2>
        <h2>about</h2>
        <h2>contact</h2>
        <h2>{theme }</h2>
    </div>
  )
}

export default Nav2