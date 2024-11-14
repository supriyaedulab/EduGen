import React, { createContext } from 'react'
import { useAuth } from '../hooks/useAuthHook';
import { useContext } from 'react';
  const AuthContext = createContext();
 export const AuthProvider = ({ children }) => {
    const auth = useAuth(); // Use the custom hook here

    return (
      <AuthContext.Provider value={auth}>
        {children}
      </AuthContext.Provider>
    );
}

export const useAuthContext = () => {
    return useContext(AuthContext);
  };
