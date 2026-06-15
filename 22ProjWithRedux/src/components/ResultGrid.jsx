import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {fetchPhotos,fetchVideo,fetchGifs} from '../api/mediaApi'
import {clearResults,setLoading,setError,setResults,setQuery} from '../redux/features/searchSlice'
import { store } from '../redux/store'
import ResultCard from './ResultCard'



const  ResultGrid = () => {
    const {query,activeTab,results,loading,error}=useSelector((store)=>store.search)
    const dispatch = useDispatch();
useEffect(()=>{
    if(!query) return
    const getData =async()=>{
            dispatch(setLoading())
           let data=[];
      try{
  if(activeTab=="images"){
            data=await fetchPhotos(query)
            data=data.map((items)=>{
                return {
                    id:items.id,
                    type:"images",
                    title:items.alt_description,
                    thumbnail:items.urls.small,
                    src:items.urls.full
                }
            })
     
        }
        if(activeTab=="videos"){
            data=await fetchVideo(query)
            data=data.map((items)=>{
                return {
                    id:items.id,
                    type:"video",
                    title:items.user.name,
                    thumbnaill:items.image,
                    src:items.video_files[3].link
                }
            })
        }
        if(activeTab=="GIF"){
            data=await fetchGifs(query)
             data=data.map((items)=>{
                return {
                    id:items.id,
                    type:"GIF",
                    title:items.title,
                    thumbnail:items.images.fixed_width_small.url,
                    src: items.images.fixed_height.url
                }
            })
           
        }
          dispatch(setResults(data))
      }catch(err){
         dispatch(setError(err.message))
      }
            
    }
    getData()
},[query,activeTab])
 if(error) return <h1>Error</h1>
 if(loading) return <h1>Loading....</h1>

  return (
    <div className='scrollbar-thumb-red-700  h-[80vh] w-full py-2 overflow-auto my-7 flex items-center justify-center gap-2 flex-wrap'>
      {results.map((elem ,idx)=>{
       return <ResultCard key={idx} elem={elem}/>
      })}

    </div>
  )
}

export default ResultGrid