import React from 'react'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
const Home = () => {
  return (
   <div className=' w-full min-h-screen bg-[#0B1326] h-full  text-white '>
 <SearchBar/>
 <ResultGrid/>
    </div>
  )
}

export default Home