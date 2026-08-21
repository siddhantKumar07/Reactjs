import React from 'react'
import {restaurantList} from '../utils/FoodData'
const RestrauntsList = () => {
  return (
    <div className='min-h-[70vh] w-full bg-emerald-300 flex justify-center items-center'>
      <div className='w-[80%] h-full flex flex-col gap-8 '>
  <h1 className='text-2xl font-bold text-center'>Discover best restraunts on Dineout</h1>
    <div className='w-full h-[90%] grid  grid-rows-1 grid-flow-col  auto-cols-[350px] gap-2 overflow-x-scroll overflow-y-hidden'>
    {restaurantList.map((restaurant)=>{
        return(
            <div className='h-full w-[350px] rounded-2xl border-2 '> 
            <div style={{backgroundImage:`url(https://media-assets.swiggy.com/swiggy/image/upload/${restaurant.mediaFiles[0].url})`,backgroundSize: 'cover',
    backgroundPosition: 'center',}} className='h-[50%] w-full rounded-2xl flex justify-start items-end'>
            <div className='flex justify-between items-center w-full px-3 py-4 shadow-lg bg-black/25 rounded-b-2xl'>
               <h1 className='text-lg font-bold text-white'>{restaurant.name}</h1>
             <p className='text-xl font-bold text-white'>{restaurant.rating.value}</p>
            </div>
            </div>
            
            <div className='h-[50%] w-full p-4'>
              
              <p className='text-gray-700'>{restaurant.cuisines.join(', ')}</p>
              <p className='text-gray-700'>{restaurant.locality}</p>
              <p className='text-gray-700'>{restaurant.costForTwo}</p>
              <p className='text-gray-700'>{restaurant.locationInfo?.distanceString || 'Distance unavailable'}</p>
              
            </div>
            
            </div>
        )
       
    })}

    </div>
      </div>
    </div>
  )
}

export default RestrauntsList