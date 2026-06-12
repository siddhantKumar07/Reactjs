import React, { useContext, useEffect, useState } from "react";
import Login from "./components/auth/Login";
import EmployessDashboard from "./components/dashboard/EmployessDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInData, setLoggedInData] = useState(null)
  let Authdata = useContext(AuthContext);
 

  useEffect(() => {
    if(Authdata){
      const loggedIn = JSON.parse(localStorage.getItem("loggedIn"))
          if(loggedIn){
            setUser(loggedIn.role)
          }
    }


  }, [Authdata])
    
  // this will run when the user is press the login button after writing their credentials
  const handleLogin = (email, pass) => {
      const admin = Authdata.admin.find((e) => { return e.email === email && e.pass === pass;})
      const employee =Authdata.employees.find((e) => { return e.email === email &&
         e.pass===pass; })

         // this is for if the logged in user is admin
    if (Authdata && admin) {
       localStorage.setItem("loggedIn",JSON.stringify({role:"admin"}))
      setUser("admin");
      setLoggedInData(admin)
      console.log(admin)
    } 
    // this is for if the logged in user is employeee
    else if (Authdata&&employee) {
        localStorage.setItem("loggedIn",JSON.stringify({role:"employee"})) // iske wajah se problem hogi
           setUser("employee");
         setLoggedInData(employee) // this will set which user logged in 
         console.log(employee)
     
     
    } 
    else {
      alert("who are you Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user == "admin" ? (
        <AdminDashboard loggedInAdmin={user=="admin"?loggedInData:''} />
      ) : user == "employee" ? (
        <EmployessDashboard loggedInEmployee={user=="employee"?loggedInData:" "}/>
      ) : (
        <Login />
      )}
    </>
  );
};

export default App;
