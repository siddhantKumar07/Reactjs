import React from 'react'
import foodGrid from '../utils/FoodData'
import FoodCard from './FoodCard'
const FoodOptions = () => {
  return (
    <div className='w-[80%] h-[50%] mx-auto border-2 px-5 py-2'>
      {foodGrid.map((item)=>{
        return <FoodCard key={item.id} item={item}/>
      })}
    </div>
  )
}

export default FoodOptions