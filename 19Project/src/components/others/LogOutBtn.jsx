import React from 'react'
const LogOutBtn = (props) => {
   const handleLogout = () => {
  localStorage.removeItem("loggedIn")
 props.changeUser("")
}
  return (
         <button onClick={handleLogout}  className='px-3.5 py-3 bg-red-800 text-white font-bold rounded-xl cursor-pointer active:scale-90'>
  Log Out</button>
        
  )
}

export default LogOutBtn