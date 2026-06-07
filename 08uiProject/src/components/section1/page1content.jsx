import React from 'react'
import LeftContent from './leftContent'
import RightContent from './rightContent'
const page1content = () => {
  return (
    <div className='flex align-middle gap-10 h-[calc(100vh-8rem)] px-15'>
        <LeftContent/>
        <RightContent/>
</div>
  )
}

export default page1content