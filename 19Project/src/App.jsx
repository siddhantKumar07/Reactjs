import React, { useContext, useEffect, useState } from "react";
import Login from "./components/auth/Login";
import EmployessDashboard from "./components/dashboard/EmployessDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInData, setLoggedInData] = useState(null)
  const { userdata } = useContext(AuthContext);

  useEffect(() => {
    if(userdata){
      const loggedIn = JSON.parse(localStorage.getItem("loggedIn"))
          if(loggedIn?.role === "admin"){
            const admin = userdata.admin.find((admin) => admin.email === loggedIn.email)
            if(admin){
              setUser(loggedIn.role)
              setLoggedInData(admin)
            }
          }
          else if(loggedIn?.role === "employee"){
            const employee = userdata.employees.find((employee) => employee.email === loggedIn.email)
            if(employee){
              setUser(loggedIn.role)
              setLoggedInData(employee)
            }
          }
    }

  }, [userdata])
    
  // this will run when the user is press the login button after writing their credentials
  const handleLogin = (email, pass) => {
      const admin = userdata.admin.find((e) => { return e.email === email && e.pass === pass;})
      const employee =userdata.employees.find((e) => { return e.email === email &&
         e.pass===pass; })

         // this is for if the logged in user is admin
    if (userdata && admin) {
       localStorage.setItem("loggedIn",JSON.stringify({role:"admin", email: admin.email}))
      setUser("admin");
      setLoggedInData(admin)
      console.log(admin)
    } 
    // this is for if the logged in user is employeee
    else if (userdata&&employee) {
        localStorage.setItem("loggedIn",JSON.stringify({role:"employee", email: employee.email}))
           setUser("employee");
         setLoggedInData(employee) // this will set which user logged in 
         console.log(employee)
    } 
    else {
      alert("who are you Invalid Credentials");
    }
  };

  if (!userdata) return null;

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user == "admin" ? (
        <AdminDashboard setUser={setUser} loggedInAdmin={loggedInData} />
      ) : user == "employee" ? (
        <EmployessDashboard setUser={setUser} loggedInEmployee={loggedInData}/>
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </>
  );
};

export default App;
