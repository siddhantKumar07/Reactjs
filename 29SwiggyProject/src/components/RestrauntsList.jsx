import React from 'react'

const RestrauntsList = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <div className='w-[80%] h-full bg-emerald-300'>
  <h1 className='text-2xl font-bold text-center'>Discover best restraunts on Dineout</h1>
    <div className='w-full h-[90%] grid  grid-rows-1 grid-flow-col gap-2 overflow-x-scroll overflow-y-hidden'>
    {}

    </div>
      </div>
    </div>
  )
}

export default RestrauntsList