import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Restraurants from './pages/Restraurants'
import Instamart from './pages/Instamart'
import Dineout from './pages/Dineout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/restaurants' element={<Restraurants/>} />
        <Route path='/instamart' element={<Instamart/>} />
        <Route path='/dineout' element={<Dineout/>} />
    </Routes>
    </div>
  )
}

export default App