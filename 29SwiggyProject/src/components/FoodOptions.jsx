import React from 'react'
import {foodGrid} from '../utils/FoodData'
import FoodCard from './FoodCard'
const FoodOptions = () => {
  return (
    <div className="w-full py-7 flex justify-center flex-col items-center gap-5">
      <h1 className="text-2xl font-bold text-gray-800">Order Our Best Food Options</h1>
      <div className="w-[85%] h-[420px]  px-3 py-2 grid grid-rows-2 grid-flow-col auto-cols-[140px] gap-6 overflow-x-auto overflow-y-hidden scrollbar-none">
        {foodGrid.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default FoodOptions