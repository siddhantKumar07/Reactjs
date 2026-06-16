import React, { useState } from 'react'
import  {useDispatch} from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'
const SearchBar = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const submitHandle=(e)=>{
        e.preventDefault()
        dispatch(setQuery(value))
        console.log("submitted :"+value)
        setValue('')
    }
  return (

        <form className='bg-sky-900 flex  py-2 px-15 gap-8' 
        onSubmit={(e)=>{
        submitHandle(e)
        }}
        >
            <input 
         className='px-4 py-3.5 w-[70%] text-xl text-white outline-none border-2 border-white rounded-xl'
         type="text"
         placeholder='search Anything' 
         value={value} 
         onChange={(e)=>{setValue(e.target.value)}}
         />
        <button
        className=' text-white text-lg font-bold active:scale-90 cursor-pointer rounded-xl px-4 border-2 border-white'
        >click to Search</button>
        </form>
  )
}

export default SearchBar