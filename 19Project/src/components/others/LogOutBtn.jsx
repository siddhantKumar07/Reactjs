import React from 'react'
import Li
const LogOutBtn = () => {
    const handleLogout=()=>{
        localStorage.setItem("loggedIn",JSON.stringify({role:" "}))
    
    }
  return (
         <button onClick={handleLogout}  className='px-3.5 py-3 bg-red-800 text-white font-bold rounded-xl cursor-pointer active:scale-90'>Log Out</button>
         <Link></Link>
  )
}

export default LogOutBtn