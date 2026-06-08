import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  function increasecount(){
    console.log("increasing")
    setCount(count+1)
  }
  function decreasecount(){
setCount(count-1)
  }
  return (
   <div>
    <h1>{count}</h1>
    <div className="btnContainer">
    <button onClick={increasecount}>Incraese</button>
    <button onClick={decreasecount}>Decrease</button>
    </div>

   </div>
  )
}

export default App