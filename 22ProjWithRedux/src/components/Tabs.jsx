import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'
const Tabs = () => {
    const dispatch =useDispatch()
    const tabs = ["images","videos","GIF"]
    const handleClick =(elem)=>{
     dispatch(setActiveTab(elem))
       
    }
    const activeTab = useSelector((state)=> state.search.activeTab)
  return (
    <div className='flex justify-start items-start  gap-7'>
        {tabs.map((elem,idx)=>{
          return  <button
                    onClick={()=>{
                        handleClick(elem)
                    }}
                    className={`${activeTab==elem?'bg-[#C0C1FF] hover:bg-[#abacef] text-blue-700':'bg-[#171F33]'} px-10 py-1 hover:bg-[#1e2840]  rounded-full active:scale-90 cursor-pointer text-lg`} key={idx}>{elem}</button>
        })}
    </div>
  )
}

export default Tabs