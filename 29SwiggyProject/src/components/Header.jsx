import React from 'react'

const Header = () => {
  return (
    <header className='bg-[#FF5200] h-[95vh] w-full p-1'>
        <div className='h-[10%] w-full px-32  mt-7 flex items-center justify-between'>
          <div className='h-[90%] w-[15%] py-2 px-2'>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="" className='w-full h-[90%] cursor-pointer active:scale-90' />

          </div>
          <div className='w-[60%] h-full text-white flex items-center justify-around '>
            <button className=' cursor-pointer text-white font-bold text-base active:scale-90'>Swiggy Corporate</button>
            <button  className='cursor-pointer text-white font-bold text-base active:scale-90'>Partner with us</button>
            <button className='cursor-pointer h-[80%] px-5 font-semibold text-white text-lg border-2 rounded-xl border-white active:scale-90'>Get the app</button>
            <button className='cursor-pointer h-[80%] bg-black px-10 font-semibold text-white text-lg  rounded-xl active:scale-90 '>Sign in</button>

          </div>
        </div>
        <div></div>
        <div></div>
    </header>
  )
}

export default Header