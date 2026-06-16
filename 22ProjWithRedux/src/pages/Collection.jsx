import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setData } from '../redux/features/collectionSlice';
import { Link } from 'react-router-dom';
const Collection = () => {
    let dispatch = useDispatch();
    let data =JSON.parse(localStorage.getItem("collection"))||[]

   useEffect(() => {
  dispatch(setData(data));
   }, [dispatch]);

    let returnedData = useSelector((state)=>state.Collection.data);
    console.log(returnedData);
    
  return (
    <div className='flex flex-col w-full'> 
    <nav className=' h-16 px-5 text-xl flex decoration-black underline'>
        <h1 className='text-center w-full font-bold text-black'>Welcome to The Collection page </h1>
  <Link to={'/'}><button className='border-2 border-white rounded-xl px-2 py-1.5 active:scale-90 cursor-pointer'>clickToHome</button></Link>
    </nav>


    <div className='flex gap-2 h-full w-full'>

 
  {returnedData.map((elem,idx)=>{
    return <div key={idx} className='h-70 w-70 rounded-xl relative [content-visibility:auto] [contain-intrinsic-size:280px]'>
        
        <a className='h-full w-full rounded-xl ' href={elem.src} target='_blank' rel='noreferrer'>
          { elem.type=="images"? <img  className='object-cover object-top rounded-xl h-full w-full' src={elem.thumbnail} alt={elem.title || ""} loading='lazy' decoding='async' /> :elem.type=="video"? <video   className='h-full w-full rounded-xl object-cover' poster={elem.thumbnail} preload='metadata' muted loop src={elem.src} onMouseEnter={(e)=>e.currentTarget.play()} onMouseLeave={(e)=>{ e.currentTarget.pause(); e.currentTarget.currentTime = 0 }}></video> : elem.type=="GIF"?<img className='object-cover rounded-xl h-full w-full' src={elem.thumbnail} alt={elem.title || ""} loading='lazy' decoding='async' />:" "}
       </a>
      
         <div className='flex items-center justify-between absolute  bottom-1 font-bold bg-transparent w-full px-1 py-1'>
       <h1  className=' font-bold  text-black capitalize text-lg pl-2 w-full '>{elem.title}</h1>
       </div>


    </div>
  })}
     </div>
    </div>
  )
}

export default Collection