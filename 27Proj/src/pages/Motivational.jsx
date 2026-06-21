import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Motivational = () => {
  const [quote] = useState({
    text: "Challenges are what make life interested and overcoming them is what makes life meaningful.",
    author: "Joshua J. Marine"
  })

  return (
    <div className='h-screen bg-[#0B1326] w-full flex flex-col items-center justify-center p-8 relative overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-blue-900/20 pointer-events-none'></div>

      {/* Back Button */}
      <div className='absolute top-8 right-8 z-10'>
        <Link to={'/'} className='bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-2 px-4 rounded-lg transition-all'>
          Back
        </Link>
      </div>

      {/* Quote Card */}
      <div className='relative z-10 max-w-2xl w-full'>
        <div className='bg-gradient-to-br from-teal-800/50 to-cyan-900/50 backdrop-blur-md border border-cyan-400/30 rounded-2xl p-12 shadow-2xl'>
          {/* Quote Label */}
          <div className='text-center mb-8'>
            <span className='text-cyan-400 text-xs font-bold tracking-widest uppercase border border-cyan-400 px-4 py-2 rounded-full inline-block'>
              Quote of the Day
            </span>
          </div>

          {/* Quote Text */}
          <h2 className='text-3xl font-bold text-white text-center mb-6 leading-relaxed'>
            "{quote.text}"
          </h2>

          {/* Author */}
          <p className='text-center text-cyan-400 text-lg font-semibold'>
            {quote.author}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Motivational