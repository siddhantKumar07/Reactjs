import React from 'react'
import {Link} from 'react-router-dom'
const FoodCard = ({ item }) => {
  return (
    <div className="w-full h-full rounded-xl">
      <Link to={item.entityId} className="block w-full h-full">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
          alt="foodImage"
          className="w-full h-full object-cover rounded-xl"
        />
      </Link>
    </div>
  )
}

export default FoodCard