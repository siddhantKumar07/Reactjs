import React, { useContext, useEffect, useState } from "react";
import Login from "./components/auth/Login";
import EmployessDashboard from "./components/dashboard/EmployessDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  let Authdata = useContext(AuthContext);

  const handleLogin = (email, pass) => {
    if (Authdata && Authdata.admin.find((e) => {
  return e.email === email && e.pass === pass;
})) {
      console.log("welcome admin");
      setUser("admin");
      console.log(user);
    } else if (Authdata && Authdata.employees.find((e) => {
  return e.email === email && e.pass === pass;
})) {
      console.log("welcome user");
      setUser("user");
      console.log(user);
    } else {
      alert("who are you Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user == "admin" ? (
        <AdminDashboard />
      ) : user == "user" ? (
        <EmployessDashboard />
      ) : (
        <Login />
      )}
    </>
  );
};

export default App;
