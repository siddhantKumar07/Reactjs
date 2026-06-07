import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'
const App = () => {
  const users = [
    {
      img:"",
      intro:"",
      tag:""
    },
    {
       img:"",
      intro:"",
      tag:""
    },
    {
       img:"",
      intro:"",
      tag:""
    }
  ]
  return (
    <div>
    <Section1/>
    <Section2/>
    </div>
  )
}

export default App