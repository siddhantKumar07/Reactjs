import React from 'react'

const card = ({name,details,img}) => {
  return ( 

  <div className='card'>
    <img src={img} alt="" />
    <h1>{name}</h1>
    <p> {details}</p>
    <button> view  profile</button>
  </div>


  
  )
}

export default card