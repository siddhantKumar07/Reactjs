import React from 'react'

const App = () => {
  const handleform=(e)=>{
  e.preventDefault()
  }
  return (
  <div className='h-screen w-full lg:flex bg-black p-0.5  '>
     <form onSubmit={handleform} className='flex flex-col gap-4 justify-between lg:w-1/2 m-10 h-[60%] w-[40%] items-start p-7'>
    <h1 className='text-3xl font-bold'>Add Notes</h1>
        <input type="text" 
      placeholder='Enter notes Heading'
      className=' outline-none px-4 py-3 w-full rounded text-white  border-2 text-3xl bg-black'
      />
      
      <textarea type="text"
      placeholder='Enter the details'
    className='px-4 py-8 max-h-40 outline-none rounded w-full text-white border-2 text-3xl bg-black'
      />
      <button className='px-4 cursor-pointer py-5 w-full bg-white outline-none text-black rounded-2xl font-bold text-2xl '>Add note</button>
     </form>
     <div className=' h-full  lg:w-1/2 border-l-4 lg:border-white pl-1'>
     <h1 className='text-center h-[5%] text-3xl font-bold text-white'>Your Tasks</h1>
<div className='flex gap-3 flex-wrap py-8 px-5 overflow-auto h-[calc(100vh-5%)]'>
  <div className='h-50 w-40 rounded-2xl bg-white'></div>
  <div className='h-50 w-40 rounded-2xl bg-white'></div>
  <div className='h-50 w-40 rounded-2xl bg-white'></div>
  <div className='h-50 w-40 rounded-2xl bg-white'></div>
  <div className='h-50 w-40 rounded-2xl bg-white'></div>
  <div className='h-50 w-40 rounded-2xl bg-white'></div>
  <div className='h-50 w-40 rounded-2xl bg-white'></div>
  <div className='h-50 w-40 rounded-2xl bg-white'></div>
  <div className='h-50 w-40 rounded-2xl bg-white'></div>
  <div className='h-50 w-40 rounded-2xl bg-white'></div>
  <div className='h-50 w-40 rounded-2xl bg-white'></div>
  <div className='h-50 w-40 rounded-2xl bg-white'></div>
  <div className='h-50 w-40 rounded-2xl bg-white'></div>

</div>

     </div>
    </div>
  )
}

export default App