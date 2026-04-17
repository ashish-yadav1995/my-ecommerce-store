import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const userdata = JSON.parse(localStorage.getItem("user_data"));
  const loggedin = userdata ? userdata.loggedin : false;
  const usertype = userdata ? userdata.usertype : "";

  return (
    <>
      <nav style={{ display: "flex", gap: "20px", justifyContent: "flex-end" }}>
        {!loggedin && (
          <>
            <Link to="/login">login</Link>
            <Link to="/signup">Register</Link>
          </>
        )}

        {loggedin && usertype == "admin" ? (
          <Link to="/admin-dashboard" style={{ marginRight: "20px" }}>
            Admin
          </Link>
        ) : (
          loggedin && (
            <>
              <Link to="/userdetails">UserDetails</Link>
              <Link to="/product">Product</Link>
            </>
          )
        )}

        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

export default Navbar;
