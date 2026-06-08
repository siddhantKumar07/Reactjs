import React from 'react'

const App = () => {
  const handleform=(e)=>{
  e.preventDefault()
  }
  return (
    <div className='h-screen w-full flex bg-black p-0.5  '>
     <form onSubmit={handleform} className='flex flex-col gap-4 justify-between  m-15 h-[50%] w-[40%] items-start p-7 bg-yellow-200'>

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
     <div className='flex bg-sky-300 h-52 w-40'></div>
    </div>
  )
}

export default App