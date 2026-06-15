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

        <form className='flex justify-center py-3 gap-4' 
        onSubmit={(e)=>{
        submitHandle(e)
        }}
        >
            <input 
         className='px-4 py-1.5 bg-black text-white outline-none border-2 border-white rounded'
         type="text"
         placeholder='search Anything' 
         value={value} 
         onChange={(e)=>{setValue(e.target.value)}}
         />
        <button
        className='bg-black text-white text-lg font-bold active:scale-90 cursor-pointer rounded-xl px-2'
        >click to Search</button>
        </form>
  )
}

export default SearchBar