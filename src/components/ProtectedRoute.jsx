import React from "react";
import { useAuthContext } from "../contexts/AuthProvider";


const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, err } = useAuthContext();
    
    // console.log("isAuthenticated", isAuthenticated)
    // console.log("token", token)
    if(err){
        return <div>Something went wrong.....</div>
    }
  
    return isAuthenticated ? children : <div>something went wrong...</div>;
};

export { ProtectedRoute };
