import React from 'react'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
const Home = () => {
  return (
   <div className=' w-full h-full  text-white '>
 <SearchBar/>
 <ResultGrid/>
    </div>
  )
}

export default Home