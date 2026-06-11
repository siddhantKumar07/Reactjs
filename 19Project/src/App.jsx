import React, { useEffect } from 'react'
import Login from './components/auth/Login'
import EmployessDashboard from './components/dashboard/EmployessDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import { setLocalStorage,getLocalStorage } from './utils/localStorage'
const App = () => {
  useEffect(() => {
    // setLocalStorage()
    getLocalStorage()
},[])
  
  return (
  <>
  <Login/>
  {/* <EmployessDashboard/> */}
  {/* <AdminDashboard/> */}
  </>

  )
}

export default App