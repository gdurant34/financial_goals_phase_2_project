import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  const linkStyles = {
    color: "#00D4FF",
    padding: "10px 20px",
    marginRight: "20px",
    background: "#0D2E4E",
    textDecoration: "inherit", /* no underline */
    borderRadius: "10px"
  };

  const activeStyle = {
    border: "solid #00D4FF 2px",
    fontWeight: "bold",
    color: "#00D4FF",
    padding: "10px 20px",
    marginRight: "20px",
    background: "#0D2E4E",
    textDecoration: "inherit", /* no underline */
    borderRadius: "10px"
  };

    return(
        <div id="nav-bar">
          <h1 className="site-title">
              Financial Goals
          </h1>
          <NavLink
            to="/home"            
            style={({ isActive }) => isActive ? activeStyle : linkStyles}
            >Home
            </NavLink>

        <NavLink
            to="/account-summary"          
            style={({ isActive }) => isActive ? activeStyle : linkStyles}
            >Account Summary</NavLink>
          
          <NavLink
            to="/goals"            
            style={({ isActive }) => isActive ? activeStyle : linkStyles}
            >Active Goals</NavLink>

        <NavLink
            to="/completed-goals"            
            style={({ isActive }) => isActive ? activeStyle : linkStyles}
            >Completed Goals</NavLink>
        </div>
    );
}

export default NavBar;