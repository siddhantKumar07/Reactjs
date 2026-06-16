import React from 'react'

const CollectionCard = ({elem,idx,handleRemove}) => {
  return (
   <div key={idx} className='h-70 w-70 rounded-xl relative [content-visibility:auto] [contain-intrinsic-size:280px]'>
        
        <a className='h-full w-full rounded-xl ' href={elem.src} target='_blank' rel='noreferrer'>
          { elem.type=="images"? <img  className='object-cover object-top rounded-xl h-full w-full' src={elem.thumbnail} alt={elem.title || ""} loading='lazy' decoding='async' /> :elem.type=="video"? <video   className='h-full w-full rounded-xl object-cover' poster={elem.thumbnail} preload='metadata' autoPlay muted loop src={elem.src}  ></video> : elem.type=="GIF"?<img className='object-cover rounded-xl h-full w-full' src={elem.thumbnail} alt={elem.title || ""} loading='lazy' decoding='async' />:" "}
       </a>
      
         <div className='flex items-center gap-2 justify-between absolute  bottom-1 font-bold bg-transparent w-full px-1 py-1'>
       <h1  className=' font-bold  text-black capitalize text-lg pl-2 w-full '>{elem.title}</h1>
       <button className='rounded-md cursor-pointer active:scale-90 px-1.5 py-1 bg-blue-700 text-white text-lg' onClick={()=>{
        handleRemove(idx)
       }}>Remove</button>
       </div>


    </div>
  )
}

export default CollectionCard