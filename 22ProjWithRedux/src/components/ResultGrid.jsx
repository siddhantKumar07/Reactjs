import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {fetchPhotos,fetchVideo,fetchGifs} from '../api/mediaApi'
import {clearResults,setLoading,setError,setResults,setQuery} from '../redux/features/searchSlice'
import { store } from '../redux/store'
const  ResultGrid = () => {
    const {query,activeTab,results,loading,error}=useSelector((store)=>store.search)
    const dispatch = useDispatch;
useEffect(()=>{
        let data=[];

    const getData =async()=>{
        if(activeTab=="images"){
            data=await fetchPhotos(query)
     
        }
        if(activeTab=="videos"){
            data=await fetchVideo(query)
        }
        if(activeTab=="GIF"){
            data=await fetchGifs(query)
        }
              dispatch(ResultGrid(data));
    }
    getData()
},[query,activeTab,dispatch])
  return (
    <div className='h-[80vh] w-full my-7 bg-amber-200'>
        {}
    </div>
  )
}

export default ResultGrid