import React, { use, useState } from 'react'
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
  async function getImge(){
    const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=20")
    setUser(response.data)
    console.log(await user);
    
  }
  return (
    <div className='bg-black'>
        <button onClick={getImge} className='h-10 text-2xl active:scale-90 cursor-pointer rounded-3xl m-2 w-20 bg-sky-500'>
          click
        </button>
        <div className='h-full w-full text-2xl flex gap-5 items-center  flex-wrap justify-center font-bold'>
          {printuserData}
        </div>
    </div>
  )
}

export default App