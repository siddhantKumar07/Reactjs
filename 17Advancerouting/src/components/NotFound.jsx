import React from 'react'

const NotFound = () => {
  return (
    <div className='flex justify-center flex-col items-center bg-red-700 h-screen w-full'>
        <h1 className='font-bold text-white text-3xl '>404 || Page Not found!!!</h1><br />
        <p className='text-2xl text-white font-bold '> You have entered wrong route or page</p>
    </div>
  )
}

export default NotFound