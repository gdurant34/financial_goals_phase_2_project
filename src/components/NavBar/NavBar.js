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
    fontWeight: "bold"
  };

    return(
        <div id="nav-bar">
          <h1 className="site-title">
              Financial Goals
          </h1>
          <NavLink
            to="/"
            /* set "exact" so it knows to only set activeStyle when route is deeply equal to link */
            exact
            style={linkStyles}
            /* add prop for activeStyle */
            activeStyle={activeStyle}
            >Home</NavLink>

        <NavLink
            to="/account-summary"
            exact
            style={linkStyles}
            activeStyle={activeStyle}
            >Account Summary</NavLink>
          
          <NavLink
            to="/goals"
            exact
            style={linkStyles}
            activeStyle={activeStyle}
            >Active Goals</NavLink>

        <NavLink
            to="/completed-goals"
            exact
            style={linkStyles}
            activeStyle={activeStyle}
            >Completed Goals</NavLink>

        
        </div>
    );
}

export default NavBar;