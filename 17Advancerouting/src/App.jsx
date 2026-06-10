import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/home'
import About from './components/about'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Product from './components/Product'
import NotFound from './components/NotFound'
const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route  path='/contact' element={<Contact/>}/>
        <Route  path='/product' element={<Product/>}/>
        <Route  path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App