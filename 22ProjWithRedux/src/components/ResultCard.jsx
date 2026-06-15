import React from 'react'

const ResultCard = ({elem}) => {
    console.log(elem);
    
  return (
    <div className='h-70 w-70 rounded-xl relative'>
       <a href={elem.src} target='_blank'>
        <div className='h-full w-full rounded-xl '>
          { elem.type=="images"? <img  className='object-cover object-top rounded-xl h-full w-full' src={elem.src} alt="" /> :elem.type=="video"? <video className='h-full w-full rounded-xl object-cover' autoPlay muted loop src={elem.src}></video> : elem.type=="GIF"?<img className='object-cover rounded-xl h-full w-full' src={elem.src} alt="" />:" "}
       </div>
       </a>
         <h1 className='absolute bottom-2 font-bold text-black capitalize text-md left-3'>{elem.title}</h1>
       </div>
  )
}

export default ResultCard