import React from 'react'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'
const App = () => {
 
  return (
    <div className='h-screen w-full bg-sky-700 text-white '>
 <SearchBar/>
 <Tabs/>
 <ResultGrid/>
    </div>
  )
}

export default App