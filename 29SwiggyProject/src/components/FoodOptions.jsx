import React from 'react'
import foodGrid from '../utils/FoodData'
import FoodCard from './FoodCard'
const FoodOptions = () => {
  return (
    <div className='w-full h-full bg-sky-300 flex justify-center items-center'>
     <div className='h-[70%] w-[90%] border-2 px-3 py-2 flex flex-wrap shrink-0 gap-2 justify-between  items-center overflow-scroll'>
     {foodGrid.map((item)=>{
        return <FoodCard key={item.id} item={item}/>
      })}
      </div>
    </div>
  )
}

export default FoodOptions