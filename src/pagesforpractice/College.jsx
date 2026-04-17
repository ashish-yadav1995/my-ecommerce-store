import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";

function College() {
  return (

    <>
      <h1 style={{fontSize:"40px"}}>college page</h1>
    <div > 
      <NavLink style={{margin:"10px"}} to="students">Students</NavLink>
      <NavLink style={{margin:"10px"}} to="department">department</NavLink>
      <NavLink style={{margin:"10px"}} to="collegedetails">collegedetails</NavLink>
      <Outlet/>
    </div>
    </>
  );
}

export default College;
