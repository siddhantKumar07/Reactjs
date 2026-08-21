import React from 'react'
import {groceriesInstamart} from '../utils/FoodData'
import { Link } from 'react-router-dom'
const Groceries = () => {
  return (
    <div className='h-screen w-full py-4 flex flex-col justify-center items-center'>
        <h1 className='text-2xl text-black font-bold'>Shop Groceries on Instamart</h1>
        <div className='min-h-[250px] w-[80%] grid grid-flow-col grid-rows-1 auto-cols-[250px] gap-2 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-emerald-300 mt-10'>
         {groceriesInstamart.map((item)=>(
           <Link to={`${item.action.link}`} className='block h-full w-full'>
           
            <div key={item.id} className='h-[90%] px-2 py-3'>
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`} alt="" className='w-full rounded-3xl h-[80%] object-cover' />
                <h2 className='text-center text-xl font-bold text-gray-500'>{item.action.text}</h2>
            </div>
            </Link>
         ))}
        </div>
    </div>
  )
}

export default Groceries