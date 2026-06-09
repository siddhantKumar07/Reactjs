import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  // "Jab component render ho jaye ya koi state/value change ho jaye, tab jo code chalana ho uske liye useEffect use karte hain.
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(100)

  function changenum(){
    console.log("num is changing  ")
  }
  function changenum2(){
    console.log("num is changing  ")
  }
  useEffect(()=>{
    changenum()
      console.log("changing the state...")
  },[num])
  return (
    <div>
      <h1>value= {num}</h1>

      <h1>num2 ={num2}</h1>
      <button
       onClick={()=>{
        setNum(num+1)
       }}
      >click</button>
      <button  onClick={()=>{
        setNum2(num2-1)
       }}>click</button>
    </div>
  )
}

export default App