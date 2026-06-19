import React from 'react'
import { useRef } from 'react'
//useRef is a React Hook that creates a mutable object whose value persists across component re-renders. Unlike useState, updating a useRef value does not trigger a re-render of the component. It is mainly used for accessing DOM elements directly (such as inputs, buttons, or videos) and for storing values that need to survive between renders but do not need to be displayed in the UI.
const App = () => {
  // const input = useRef() // it will store the element
  // const selected=()=>{
  // console.log(input.current.focus())
  // }
  const divs = useRef();

  const rounded = ()=>{
   divs.current.style.borderRadius='50%'
  }
  return (
    <div className='flex h-screen w-full gap-10 bg-sky-300 items-center p-1 justify-center'>
      {/* <div className='h-50 w-60 bg-red-50 flex flex-col items-center justify-center'>
        <input ref={input} type="text" placeholder='write.....' className='p-2 mb-4'/>
      <button  onClick={selected} className='bg-black rounded text-white px-4 py-2'>Click</button>
      </div> */}

      <div className='border-2 h-80 w-96 flex flex-col items-center gap-7 py-4'>
        <div ref={divs} className='bg-sky-400 h-[50%] w-[45%]'></div>
        <button onClick={rounded} className='bg-black rounded text-white px-4 py-2'>click</button>
      </div>
    </div>
  )
}

export default App