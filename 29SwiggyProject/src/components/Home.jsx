import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Restaurants from '../pages/Restraurants'
import Instamart from '../pages/Instamart'
import Dineout from '../pages/Dineout'
const Home = () => {
  return (
    <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path='/restaurants' element={<Restaurants/>} />
        <Route path='/instamart' element={<Instamart/>} />
        <Route path='/dineout' element={<Dineout/>} />
    </Routes>
)
}

export default Home