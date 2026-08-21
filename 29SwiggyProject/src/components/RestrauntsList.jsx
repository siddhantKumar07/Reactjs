import React from 'react'
import {restaurantList} from '../utils/FoodData'
const RestrauntsList = () => {
  return (
    <div className='h-screen w-full bg-emerald-300 flex justify-center items-center'>
      <div className='w-[80%] h-full flex flex-col gap-8 '>
  <h1 className='text-2xl font-bold text-center'>Discover best restraunts on Dineout</h1>
    <div className='w-full h-[90%] grid  grid-rows-1 grid-flow-col  auto-cols-[250px] gap-10 overflow-x-scroll overflow-y-hidden'>
    {restaurantList.map((restaurant)=>{
        return(
            <div className='h-[50%] w-[250px] rounded-2xl border-2'>
             <img className="h-full rounded-2xl w-full object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/${restaurant.mediaFiles[0].url}`} alt="" />
            </div>
        )
       
    })}

    </div>
      </div>
    </div>
  )
}

export default RestrauntsList