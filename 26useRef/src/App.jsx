import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
//useRef is a React Hook that creates a mutable object whose value persists across component re-renders. Unlike useState, updating a useRef value does not trigger a re-render of the component. It is mainly used for accessing DOM elements directly (such as inputs, buttons, or videos) and for storing values that need to survive between renders but do not need to be displayed in the UI.
const App = () => {
  // const input = useRef() // it will store the element
  // const selected=()=>{
  // console.log(input.current.focus())
  // }
  // const divs = useRef();

  // const rounded = ()=>{
  //  divs.current.style.borderRadius='50%'
  // }


  // by using ref you can store values on anything and it does not change after re-render 

  const [value, setValue] = useState(0)
  const refvalue = useRef(0)

  const handleref=()=>{ // it will not re render the component and also store the current value it does not change when re render happens but when you do same with the variable so the variable count starts again with initial value
    refvalue.current+=1;
    console.log(refvalue.current)
  }
  useEffect(()=>{
    console.log("re render chala"); // it runs whenevr the value changes
  })
  return (
    <div className='flex h-screen w-full gap-10 bg-sky-300 items-center p-1 justify-center'>
      {/* <div className='h-50 w-60 bg-red-50 flex flex-col items-center justify-center'>
        <input ref={input} type="text" placeholder='write.....' className='p-2 mb-4'/>
      <button  onClick={selected} className='bg-black rounded text-white px-4 py-2'>Click</button>
      </div> */}
{/* 
      <div className='border-2 h-80 w-96 flex flex-col items-center gap-7 py-4'>
        <div ref={divs} className='bg-sky-400 h-[50%] w-[45%]'></div>
        <button onClick={rounded} className='bg-black rounded text-white px-4 py-2'>click</button>
      </div> */}

      <div className='m-20 h-80 w-80 bg-amber-200 flex flex-col items-center justify-center gap-6'>
        <h1 className='text-white text-xl font-bold' value={value}>{value}</h1>
        <button className='bg-black text-white rounded px-2 py-1'
        onClick={()=>{
          setValue(value+1)
        }}>click</button>
        <button className='bg-black text-white rounded px-2 py-1'
        onClick={()=>{
          handleref()
        }}>clickref</button>
      </div>
    </div>
  )
}

export default App