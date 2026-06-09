import React from 'react'
import axios from 'axios'
const App = () => {
  async function getImge(){
    const response = await axios.get("https://picsum.photos/v2/list")
    console.log(response.data)
  }
  return (
    <div>
        <button onClick={getImge} className='h-10 text-2xl active:scale-90 cursor-pointer rounded-3xl m-5 w-20 bg-sky-500'>
          click
        </button>
    </div>
  )
}

export default App