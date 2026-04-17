import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const saveduser = JSON.parse(localStorage.getItem("user_data"));
   const loggedin = saveduser?saveduser.loggedin:false;
  return loggedin === true ? <Outlet /> : <Navigate to="/Login" />;
}

export default ProtectedRoute;
