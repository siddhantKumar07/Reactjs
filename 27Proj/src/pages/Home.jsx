import React from 'react'
import TopNav from '../components/TopNav'
import RightNav from '../components/RightNav'
import Front from '../components/Front'

const Home = () => {
  return (
    <div className='flex min-h-screen h-screen w-full flex-col bg-[#0B1326]'>
      <TopNav />
      <div className='flex min-h-0 flex-1'>
        <RightNav />
        <main className='min-w-0 flex-1'>
          <Front />
        </main>
      </div>
    </div>
  )
}

export default Home
