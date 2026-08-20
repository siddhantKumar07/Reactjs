import React from 'react'
import foodGrid from '../utils/FoodData'
import FoodCard from './FoodCard'
const FoodOptions = () => {
  return (
    <div className="w-full py-7 flex justify-center">
      <div className="w-[85%] h-[420px] border-2 px-3 py-2 grid grid-rows-2 grid-flow-col auto-cols-[140px] gap-6 overflow-x-auto overflow-y-hidden scrollbar-none">
        {foodGrid.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default FoodOptions