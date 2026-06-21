import React from 'react'
import TopNav from '../components/TopNav'
import RightNav from '../components/RightNav'
import Front from '../components/Front'
const Home = () => {
  return (
    <div className='w-full h-screen bg-[#b7bfd1]'>
        <TopNav/>
        <div className='flex h-[91.8%] w-full'>
          <RightNav/>
        <Front/>
        </div>
    </div>
  )
}

export default Home