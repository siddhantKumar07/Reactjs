import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
const Product = () => {
  return (
    <div  className='bg-red-400 h-[89vh] flex flex-col gap-20 items-center'>
        <div className='flex  gap-10 text-3xl text-center py-6'>
            <Link to={'/product/men'}>Men's Collection</Link>
            <Link to={'/product/women'}>Women's Collection</Link>
        </div>
<Outlet/>
    </div>
  )
}

export default Product