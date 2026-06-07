import React from 'react'
import Nav from './nav'
import Page1content from './page1content'
const section1 = (props) => {
  return (
  
    <div className='h-screen w-full text-2xl  text-white'> 
    <Nav/>
    <Page1content users ={props.users}/>
    </div>
  )
}

export default section1