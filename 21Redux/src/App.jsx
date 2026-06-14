import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementbyamount } from './redux/features/counterSlice';

const App = () => {
  const dispatch = useDispatch();
  const count =useSelector((state)=> state.counter.value)
  const [num, setNum] = useState('0')
  return (
    <div className='parent'>
      <h1>{count}</h1>
      <div className='btn'>
        <button
        onClick={()=>{
        dispatch(increment())
        }}>increment</button>
      <button
      onClick={()=>{
   dispatch(decrement())
      }}
      >Decrement</button>

      <input type="text" placeholder='Enter the value'
      value={num}
      onChange={(e)=>{
        setNum(e.target.value)
      }}
      />
      <button
      onClick={()=>{
        dispatch(incrementbyamount(Number(num)))
      }}
      >
        increaseByAmoount
      </button>
      </div>
    </div>
  )
}

export default App