import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Motivational = () => {
  const [quotes, setQuote] = useState("")
  const [author, setAuthor] = useState("")

// for motivation page
const fetchQuotes =async ()=>{
  try{
 const response = await axios.get("https://motivational-spark-api.vercel.app/api/quotes/random")
  const data = response.data;
  console.log(data)
  setQuote(data.quote)
  setAuthor(data.author)
  }catch(err){
    console.log(err)
  }
}

useEffect(()=>{
  fetchQuotes();
},[])

  return (
    <div className='relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0B1326] p-5 sm:p-8'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-blue-900/20 pointer-events-none'></div>

      {/* Back Button */}
      <div className='absolute right-5 top-5 z-10 sm:right-8 sm:top-8'>
        <Link to={'/'} className='bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-2 px-4 rounded-lg transition-all'>
          Back
        </Link>
      </div>

      {/* Quote Card */}
      <div className='relative z-10 w-full max-w-2xl'>
        <div className='rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-teal-800/50 to-cyan-900/50 p-6 shadow-2xl backdrop-blur-md sm:p-12'>
          {/* Quote Label */}
          <div className='text-center mb-8'>
            <span className='text-cyan-400 text-xs font-bold tracking-widest uppercase border border-cyan-400 px-4 py-2 rounded-full inline-block'>
              Quote of the Day
            </span>
          </div>

          {/* Quote Text */}
          <h2 className='mb-6 text-center text-2xl font-bold leading-relaxed text-white sm:text-3xl'>
            "{quotes}"
          </h2>

          {/* Author */}
          <p className='text-center text-cyan-400 text-lg font-semibold'>
            {author}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Motivational
