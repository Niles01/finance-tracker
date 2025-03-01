import { useAuth } from "@clerk/clerk-react";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { isSignedIn } = useAuth();
  
  return isSignedIn ? <Outlet /> : <Navigate to="/sign-in" replace />;
};

export default PrivateRoute;
