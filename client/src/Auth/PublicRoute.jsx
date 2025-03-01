import { useAuth } from "@clerk/clerk-react";
import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ element }) => {
  const { isSignedIn } = useAuth();
  
  return isSignedIn ? <Navigate to="/dashboard" replace /> : <div className="mt-8 flex justify-center items-center">{element}</div>;
};

export default PublicRoute;
