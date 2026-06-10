import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/pages'
const App = () => {
  const [user, setUser] = useState([])
  const [nextCount, setnextCount] = useState(2)
  const [previousCount, setPreviousCount] = useState(nextCount )
  

  let printuserData ="no data available "
  if(user.length>0){
    printuserData = user.map((elem,idx)=>{
      return <div key={idx}>
        <Card elem={elem}/>
      </div>
      
    })
  }
  // when the user click the previous button it will decrease the page number of the api
  const previousData = async ()=>{
    setPreviousCount(previousCount>1?previousCount-1:previousCount)
    const response = await axios.get(`https://picsum.photos/v2/list?page=${previousCount}&limit=10`)
    setUser(response.data) 
    setnextCount(previousCount+1)
  }


  // when user click on next this function runs and increase the page number of the api 
  const nextData = async ()=>{
    setnextCount(nextCount+1);
const response = await axios.get(`https://picsum.photos/v2/list?page=${nextCount}&limit=10`)
    setUser(response.data) 
    setPreviousCount(nextCount-1)
  }

  // it will run once when the pg load 
   async function getData(){
    const response = await axios.get("https://picsum.photos/v2/list?page=1&limit=10")
    setUser(response.data) 
  }

  // this will called once when the page open or loads 
  useEffect(() => {
  getData()
  },[])
  
 
  return (
    <div className='bg-black'>
        <div className='h-full w-full text-2xl text-sky-700 pt-5 flex gap-10 items-center  flex-wrap justify-center font-bold'>
          {printuserData}
        </div>
        <div className='flex items-center justify-center py-8  gap-8 '>
          <button onClick={previousData}  className='bg-sky-600 cursor-pointer active:scale-95 rounded text-black px-6 py-3 font-bold '>Prev</button>
          <h1 className='text-white font-bold'>Page no {nextCount-1}</h1>
          <button onClick={nextData} className='bg-sky-600 rounded cursor-pointer active:scale-95 text-black px-6 py-3 font-bold '>Next</button>
        </div>
    </div>
  )
}

export default App