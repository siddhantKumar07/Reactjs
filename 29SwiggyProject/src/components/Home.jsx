import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import FoodOptions from './FoodOptions'
import Groceries from './Groceries'
const Home = () => {
  return (
  <div className='h-screen w-full flex flex-col gap-5'>
   <Header/>
   <FoodOptions/>
   <Groceries/>
  </div>
)
}

export default Home