import React from 'react'
import axios from 'axios'
const App = () => {
  const apis =async()=>{
    // const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // const data = await response.json();
    // console.log(data)
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data)
  }
  return (
    <div><button onClick={apis}> click</button></div>
  )
}

export default App