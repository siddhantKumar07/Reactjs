import React from 'react'

const pages = (props) => {
  return (
    <div>
        <a href={props.elem.url} target='_blank'>
       <div  className='h-60 w-60 rounded-3xl '>
        <img className='h-full w-full rounded-3xl bg-cover' src={props.elem.download_url} alt="" />
      </div>
      <h3 className='text-lg font-bold text-center text-white '>{props.elem.author}</h3>

      </a>
    </div>
  )
}

export default pages