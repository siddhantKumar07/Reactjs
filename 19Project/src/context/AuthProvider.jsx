import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userdata, setUserData] = useState(null);

  useEffect(() => {
    const { employees, admin } = getLocalStorage();

    setUserData({ employees, admin });
  }, []);

  return (
    <AuthContext.Provider value={{ userdata, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
