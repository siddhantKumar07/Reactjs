import React from 'react'
import foodGrid from '../utils/FoodData'
import FoodCard from './FoodCard'
const FoodOptions = () => {
  return (
    <div className='w-full h-full bg-sky-300 py-7 flex justify-center items-center'>
     <div className='h-[70%] w-[85%] border-2 px-3 py-2 flex flex-nowrap gap-5 items-center overflow-scroll'>
     {foodGrid.map((item)=>{
        return <FoodCard key={item.id} item={item}/>
      })}
      </div>
    </div>
  )
}

export default FoodOptions