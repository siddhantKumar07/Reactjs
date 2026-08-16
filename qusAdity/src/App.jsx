import React, { useState } from 'react'
import axios from 'axios'
const App = () => {
  const [data, setData] = useState();

  const fetching =async()=>{
const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
console.log(response.data);
setData(response.data)
  }
fetching()
  return (
    <div>
     <h1>hello </h1>
    </div>
  )
}

export default App