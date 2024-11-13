import React, { useEffect } from "react";
import { useAuth } from "../hooks/useAuthHook";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, token  } = useAuth();
    
    // console.log("isAuthenticated", isAuthenticated)
    // console.log("token", token)
  
    return isAuthenticated ? children : <div>something went wrong...</div>;
};

export { ProtectedRoute };
