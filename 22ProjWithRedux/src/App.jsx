import React from 'react'
import Home from './pages/Home'
import Collection from './pages/Collection'
import { Routes,Route } from 'react-router-dom'
const App = () => {
 
  return (
    <div className='h-screen w-full bg-sky-700 text-white '>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/collection'element={<Collection/>} />
</Routes>

    </div>
  )
}

export default App