import React from 'react'
import { MapPin, Search } from 'lucide-react'
import HeaderCard from './HeaderCard'
const Header = () => {
  return (
    <header className='bg-[#FF5200] h-screen w-full p-1  relative'>
        <div className='h-[8%] w-full px-28  mt-7 flex items-center shrink-0 justify-between gap-10'>
          <div className='h-[100%] w-[15%] py-2 px-2'>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="" className='w-full h-[90%] cursor-pointer active:scale-90' />

          </div>
          <div className='w-[60%]  h-full text-white flex items-center justify-end gap-8 px-10 '>
            <button className=' cursor-pointer text-white font-bold text-base active:scale-90'>Swiggy Corporate</button>
            <button  className='cursor-pointer text-white font-bold text-base active:scale-90'>Partner with us</button>
            <button className='cursor-pointer h-[90%] px-5 font-semibold text-white text-lg border-2 rounded-xl border-white active:scale-90'>Get the app</button>
            <button className='cursor-pointer h-[90%] bg-black px-10 font-semibold text-white text-lg  rounded-xl active:scale-90 '>Sign in</button>

          </div>
        </div>

        {/* left image */}
        <img className='absolute left-0 top-[15%] h-[65%] w-[17%]' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
        <img className='absolute right-0 top-[15%] h-[65%] w-[17%]' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
        <div className='h-[35%] w-[60%] mx-auto flex flex-col gap-10 mt-20  px-4'>
          <h1 className='text-5xl px-10 text-center font-bold text-white font-sans py-2 '>Order food & groceries. Discover best restaurants. Swiggy it!</h1>
          <div className=' flex items-center justify-between w-full gap-4'>
          <div className='px-3 w-[40%]  py-4 bg-white rounded-2xl flex items-center gap-2'>
           <MapPin size={30} color="#FF5200" />
            <input type="text" placeholder='Enter your delivery location' className='outline-none text-lg w-full text-black font-bold placeholder:text-gray-500'  />
          </div>
          
          <div className='px-5 w-[55%] py-4 bg-white rounded-2xl flex items-center gap-2'>
          <input type="text" placeholder='Search for restaurant, item or more' className='outline-none text-lg w-full text-black font-bold placeholder:text-gray-500' />
          <Search size={30} color="#bababa" />
          </div>
          </div>
        </div>
        <div className='h-[42%] w-[75%] py-1 mx-auto flex items-center justify-between gap-10 '>
      <HeaderCard  image={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"} />
      <HeaderCard   image={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"} />
      <HeaderCard   image={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"}/>
        </div>
    </header>
  )
}

export default Header