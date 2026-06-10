import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [user, setUser] = useState([])
  const [nextCount, setnextCount] = useState(2)
  const [previousCount, setPreviousCount] = useState(nextCount
    
  )
  

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
  // when the user click the previous button it will decrease the page number of the api
  const previousData = async ()=>{
    setPreviousCount(previousCount>1?previousCount-1:previousCount)
    const response = await axios.get(`https://picsum.photos/v2/list?page=${previousCount}&limit=20`)
    setUser(response.data) 
    setnextCount(previousCount+1)
  }


  // when user click on next this function runs and increase the page number of the api 
  const nextData = async ()=>{
    setnextCount(nextCount+1);
const response = await axios.get(`https://picsum.photos/v2/list?page=${nextCount}&limit=20`)
    setUser(response.data) 
    setPreviousCount(nextCount-1)
  }

  // it will run once when the pg load 
   async function getData(){
    const response = await axios.get("https://picsum.photos/v2/list?page=1&limit=20")
    setUser(response.data) 
  }

  // this will called once when the page open or loads 
  useEffect(() => {
  getData()
  },[])
  // useEffect(() => {

  // },[user])
  
 
  return (
    <div className='bg-black'>
        <div className='h-full w-full text-2xl text-sky-700 flex gap-5 items-center  flex-wrap justify-center font-bold'>
          {printuserData}
        </div>
        <div className='flex items-center justify-center py-6 bg-amber-300 gap-4.5'>
          <button onClick={previousData} className='bg-sky-600 cursor-pointer active:scale-95 rounded text-black px-6 py-3 font-bold '>Prev</button>
          <button onClick={nextData} className='bg-sky-600 rounded cursor-pointer active:scale-95 text-black px-6 py-3 font-bold '>Next</button>
        </div>
    </div>
  )
}

export default App