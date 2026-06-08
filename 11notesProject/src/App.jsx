import React from 'react'

const App = () => {
  return (
    <div className='h-screen w-full bg-sky-300 p-0.5  '>
     <form className='flex  gap-4 justify-between items-start p-7 '>
       <div className='flex flex-col gap-8 items-start  m-15 h-[50%] w-[40%]'>
        <input type="text" 
      placeholder='Enter notes Heading'
      className='px-4 py-3 w-full rounded text-white text-3xl bg-black'
      />
      
      <input type="text"
      placeholder='Enter the details'
    className='px-4 py-8 rounded w-full text-white text-3xl bg-black'
      />
      <button className='px-4 py-5 w-full bg-white text-black rounded-2xl font-bold text-2xl '>Add note</button>
       </div>
            <img src="https://tse2.mm.bing.net/th/id/OIP.Qn2__HNWh2ZkOmTiqORy3gHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />

     </form>
    </div>
  )
}

export default App