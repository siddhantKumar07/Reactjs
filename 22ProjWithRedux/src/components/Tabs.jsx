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
    <div className='flex justify-start mt-2 gap-7 ml-10'>
        {tabs.map((elem,idx)=>{
          return  <button
                    onClick={()=>{
                        handleClick(elem)
                    }}
                    className={`${activeTab==elem?'bg-red-600':'bg-emerald-400'} px-10 py-2  bg-emerald-400 rounded-xl active:scale-90 cursor-pointer text-lg`} key={idx}>{elem}</button>
        })}
    </div>
  )
}

export default Tabs