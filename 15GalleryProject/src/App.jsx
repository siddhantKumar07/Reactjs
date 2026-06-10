import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [user, setUser] = useState([])
  

  let printuserData ="no data available "
  if(user.length>0){
    printuserData = user.map((elem)=>{
      return <a href={elem.url} target='_blank'>
        <div>
       <div  className='h-60 w-60 rounded-3xl '>
        <img className='h-full w-full rounded-3xl bg-cover' src={elem.download_url} alt="" />
      </div>
      <h3 className='text-lg text-white'>{elem.author}</h3>
      </div>
      </a>
      
    })
  }
  const previousData = async ()=>{
    const response = await axios.get("https://picsum.photos/v2/list?page=3&limit=20")
    setUser(response.data) 
  }
  const nextData = async ()=>{
const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=20")
    setUser(response.data) 
  }
   async function getData(){
    const response = await axios.get("https://picsum.photos/v2/list?page=1&limit=20")
    setUser(response.data) 
  }

  // this will called once when the page open or loads 
  useEffect(() => {
  getData()
  },[user])
  
 
  return (
    <div className='bg-black'>
        <div className='h-full w-full text-2xl text-sky-700 flex gap-5 items-center  flex-wrap justify-center font-bold'>
          {printuserData}
        </div>
        <div className='flex items-center justify-center py-6 bg-amber-300 gap-4.5'>
          <button onClick={previousData} className='bg-sky-600 rounded text-black px-6 py-3 font-bold '>Prev</button>
          <button onClick={nextData} className='bg-sky-600 rounded text-black px-6 py-3 font-bold '>Next</button>
        </div>
    </div>
  )
}

export default App