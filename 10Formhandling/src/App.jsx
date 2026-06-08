import React from 'react'

const App = () => {
  const formSubmit=(e)=>{
    e.preventDefault();
    console.log("form submitted")
    console.log(e.target[0].value)
    e.target[0].innerText=" "
  }
  return (
    <div>
      <form onSubmit={formSubmit} >
        <input type="text" placeholder='enter your name ' />
        <button>click</button>
      </form>
    </div>
  )
}

export default App