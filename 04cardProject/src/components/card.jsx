import React from 'react'

const card = () => {
  return (
    <div className='card'>
     <div className="nav">
      <img src="" />
      <button>
        Save
      </button>
     </div>
     <div className="mid">
      <h3 className='name'>Name</h3>
      <p className='position'>POsition</p>
      <div className="btns">
        <button>Part time</button>
        <button>senior level</button>
      </div>
     </div>
     <footer>
      <div className="left">
        <div className="money">
          <h3>250$</h3>
        </div>
        <div className="address">
          <h3>Mumbai</h3>
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