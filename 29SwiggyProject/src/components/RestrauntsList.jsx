import React from 'react'
import {restaurantList} from '../utils/FoodData'
import { Link } from 'react-router-dom'
const RestrauntsList = () => {
  return (
    <div className='min-h-[70vh] w-full  flex justify-center items-center'>
      <div className='w-[80%] h-full flex flex-col gap-4  '>
  <h1 className='text-2xl font-bold text-center'>Discover best restraunts on Dineout</h1>
    <div className='w-full h-[70%] grid pb-4  grid-rows-1 grid-flow-col  auto-cols-[350px] gap-4 overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-thumb-emerald-300'>
    {restaurantList.map((restaurant)=>{

        return(
            <div className='h-full w-[350px] rounded-2xl  '> 
             <Link  to={`https://www.swiggy.com/restaurants/${restaurant.locationInfo?.city.name}/${restaurant.locality}/${restaurant.name.split(" ").join("-") }-${restaurant.id}/dineout`} className='h-full w-full rounded-2xl'>
              <div style={{backgroundImage:`url(https://media-assets.swiggy.com/swiggy/image/upload/${restaurant.mediaFiles[0].url})`,backgroundSize: 'cover',
    backgroundPosition: 'center',}} className='h-[80%] w-full rounded-2xl rounded-b-none flex justify-start items-end'>
            <div className='flex justify-between items-center w-full px-3 py-4 shadow-lg bg-black/25 rounded-b-2xl'>
               <h1 className='text-lg font-bold text-white'>{restaurant.name}</h1>
             <p className='text-xl font-bold text-white'>{restaurant.rating.value}</p>
            </div>
            </div>
            
            <div className='h-[20%] w-full p-1 flex flex-col gap-2'>

              <div className='flex justify-between'>
                  <div className=''>
                <p className='text-gray-700'>{restaurant.cuisines.join(', ')}</p>
              <p className='text-gray-700'>{restaurant.locality}</p>
              </div>
              
              <div>
                <p className='text-gray-700'>{restaurant.costForTwo}</p>
              <p className='text-gray-700 text-end'>{restaurant.locationInfo?.distanceString || 'Distance unavailable'}</p>
              </div>
              </div>
            </div>
             </Link>
            
            </div>
        )
       
    })}

    </div>
      </div>
    </div>
  )
}

export default RestrauntsList