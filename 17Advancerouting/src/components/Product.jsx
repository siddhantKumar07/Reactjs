import React from 'react'
import { Link } from 'react-router-dom'
const Product = () => {
  return (
    <div  className='bg-red-400 h-[89vh]'>
        <div>
            <Link to={'/product/men'}>Men's Collection</Link>
            <Link to={'/product/men'}>Women's Collection</Link>
        </div>
      <h1 className='text-9xl text-black text-center'>Product page</h1>
    </div>
  )
}

export default Product