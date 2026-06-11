import React, { useEffect, useState } from 'react'
import Login from './components/auth/Login'
import EmployessDashboard from './components/dashboard/EmployessDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'

const App = () => {
  const [user, setUser] = useState(null)
  
    const handleLogin= (email,pass)=>{
      if(email=="admin@email.com"&&pass=='123'){
        console.log("welcome admin")
      }
      else if(email=="user@email.com"&&pass=='123'){
        console.log("welcome user")
      }
      else {
        alert("who are you Invalid Credentials")
      }
    }
  
  return (
  <>
  {!user?<Login handleLogin={handleLogin}/>: " "}
  {/* <EmployessDashboard/> */}
  {/* <AdminDashboard/> */}
  </>

  )
}

export default App