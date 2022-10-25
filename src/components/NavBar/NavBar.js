import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return ( 
        <nav>
            <Link to="/">Home</Link> | {" "}
            <Link to="/account-summary">Account Summary</Link> | {" "}
            <Link to="/goals">Goals</Link> 
        </nav>
     );
}

export default NavBar;