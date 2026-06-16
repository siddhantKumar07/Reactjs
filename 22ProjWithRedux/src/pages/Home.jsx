import React from 'react'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
const Home = () => {
  return (
   <div className=' w-full h-screen p-[1px] bg-sky-700 text-white '>
 <SearchBar/>
 <ResultGrid/>
    </div>
  )
}

export default Home