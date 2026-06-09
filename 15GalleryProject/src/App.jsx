import React, { use, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [user, setUser] = useState([])
  

  let printuserData ="no data available "
  if(user.length>0){
    printuserData = user.map(()=>{
      return "hello "
    })
  }
  async function getImge(){
    const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=15")
    setUser(response.data)
    console.log(await user);
    
  }
  return (
    <div>
        <button onClick={getImge} className='h-10 text-2xl active:scale-90 cursor-pointer rounded-3xl m-5 w-20 bg-sky-500'>
          click
        </button>
        <div className='text-2xl font-bold'>
          {printuserData}
        </div>
    </div>
  )
}

export default App