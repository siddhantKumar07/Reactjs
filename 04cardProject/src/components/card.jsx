import React from 'react'
import bookmarkImg from '../assets/Bookmark--Streamline-Sharp-Remix.png'  ;
const card = (props) => {
  return (
    <div className='card'>
     <div className="nav">
      <img src={props.img} />
      <button>
        Save <img src={bookmarkImg} alt="" />
      </button>
     </div>
     <div className="mid">
      <h3 className='name'>{props.name}</h3>
      <p className='position'>{props.position}</p>
      <div className="btns">
        <button >{props.jobType}</button>
        <button>{props.jobLevel}</button>
      </div>
     </div>
     <footer>
      <div className="left">
        <div className="money">
          <h3>{props.money}</h3>
        </div>
        <div className="address">
          <h3>{props.address}</h3>
        </div>
      </div>
<div className="right">
  <button>Apply now</button>
</div>
     </footer>

    </div>
  )
}

export default card