import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userdata, setUserData] = useState(null);

  useEffect(() => {
    const { employees, admin } = getLocalStorage();

    setUserData({ employees, admin });
  }, [userdata]); // this useEffect will re-render whenever the userdata is modied and by this we have got real time changes

  return (
    <div>
      <AuthContext.Provider value={userdata} >{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
