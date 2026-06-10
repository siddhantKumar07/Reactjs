import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
const App = () => {
  return (
    <div>
      <nav className="nav">
        <h2>Siddhant kumar</h2>
        <links>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        </links>
      </nav>
      <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App