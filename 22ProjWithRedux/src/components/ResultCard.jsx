import React from 'react'

const ResultCard = ({elem}) => {
    console.log(elem);
    
  return (
    <div className='h-70 w-70 rounded-xl'>
         { elem.type=="images"?<img className='object-cover rounded-xl h-full w-full' src={elem.src} alt="" /> :elem.type=="video"? <video className='h-full w-full rounded-xl object-cover' autoPlay muted loop controls src={elem.src}></video> : elem.type=="GIF"?<img className='object-cover rounded-xl h-full w-full' src={elem.src} alt="" />:" "}
         
       </div>
  )
}

export default ResultCard