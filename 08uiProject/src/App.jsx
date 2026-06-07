import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'
const App = () => {
  const users = [
    {
      img:"https://i.pinimg.com/736x/49/35/6a/49356a364e280e2ede66e661905e43b0.jpg",
      intro:"",
      tag:"satisfied"
    },
    {
       img:"https://i.pinimg.com/736x/68/f7/0c/68f70c0e2aac43ea87807b6fd07b05e8.jpg",
      intro:"",
      tag:"Underserved"
    },
    {
       img:"https://i.pinimg.com/736x/c7/48/fb/c748fb01d4395f41f17750a1ccec5749.jpg",
      intro:"",
      tag:"Underbanked"
    }
  ]
  return (
    <div>
    <Section1 users={users}/>
    <Section2/>
    </div>
  )
}

export default App