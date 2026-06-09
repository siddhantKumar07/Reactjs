import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  // "Jab component render ho jaye ya koi state/value change ho jaye, tab jo code chalana ho uske liye useEffect use karte hain.
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0)
  useEffect(()=>{
      console.log("changing the state...")
  },[num2])
  return (
    <div>
      <h1>value= {num}</h1>

      <h1>num2 ={num2}</h1>
      <button
       onMouseLeave={()=>{
        setNum(num+1)
       }}
       onMouseEnter={()=>{
        setNum2(num2+10)
       }}
      >click</button>
    </div>
  )
}

export default App