import React from 'react'
import { useNavigate } from 'react-router'

const About = () => {
   let navigate = useNavigate();
  return (
   <div  className='bg-red-400 h-[89vh]'>
      <button onClick={()=>{
       
           navigate('/')
      }} className='cursor-pointer bg-sky-400 px-7 py-2.5 m-2 rounded active:scale-90'>click To home </button>
      <button onClick={()=>{
       
           navigate(-1)
      }} className='cursor-pointer bg-sky-400 px-7 py-2.5 m-2 rounded active:scale-90'>Back </button>
      <h1 className='text-9xl text-black text-center'>About page</h1>
    </div>
  )
}

export default About