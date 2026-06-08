import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'
const App = () => {
  const users = [
    {
      img:"https://i.pinimg.com/736x/49/35/6a/49356a364e280e2ede66e661905e43b0.jpg",
      intro:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
      tag:"satisfied"
    },
    {
       img:"https://i.pinimg.com/736x/68/f7/0c/68f70c0e2aac43ea87807b6fd07b05e8.jpg",
      intro:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
      tag:"Underserved"
    },
    {
       img:"https://i.pinimg.com/736x/c7/48/fb/c748fb01d4395f41f17750a1ccec5749.jpg",
      intro:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
      tag:"Underbanked"
    },
    {
       img:"https://i.pinimg.com/736x/04/de/eb/04deebf99f74b132a8f547b9ff3c69ed.jpg",
      intro:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
      tag:"Underbanked"
    },
    {
       img:"https://i.pinimg.com/736x/be/45/96/be4596e60334e21eac3c367c16f08985.jpg",
      intro:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
      tag:"Underbanked"
    }
  ]
  return (
    <div>
    <Section1 users={users}/>
    {/* <Section2/> */}
    </div>
  )
}

export default App