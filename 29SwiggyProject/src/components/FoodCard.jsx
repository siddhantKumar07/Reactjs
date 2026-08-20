import React from 'react'
import {Link} from 'react-router-dom'
const FoodCard = ({ item }) => {
  return (
    <div  className='rounded-xl h-[50%] w-[20%]'>
    <Link to={item.entityId} className='h-[70%] w-full'>
 <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`} alt="foodImage" className='h-full  w-full object-cover' />
</Link>
    </div>
  )
}

export default FoodCard