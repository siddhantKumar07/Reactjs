import React from 'react'
import {restaurantList} from '../utils/FoodData'
const RestrauntsList = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <div className='w-[80%] h-full bg-emerald-300'>
  <h1 className='text-2xl font-bold text-center'>Discover best restraunts on Dineout</h1>
    <div className='w-full h-[90%] grid  grid-rows-1 grid-flow-col  auto-cols-[250px] gap-2 overflow-x-scroll overflow-y-hidden'>
    {restaurantList.map((restaurant)=>{
        return(
            <div className='h-full w-full'>
             <img src="" alt="" />
            </div>
        )
    })}

    </div>
      </div>
    </div>
  )
}

export default RestrauntsList