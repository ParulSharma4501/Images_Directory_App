import React from 'react';

import { Link } from "react-router-dom";

import "./header.styles.css";

function Header() {
    return (
        <div className="header">
            <div className="one">
                ImaJazz
            </div>
        
            <div className=" hover-underline-animation ">
                <Link to="/api/login" className="two">Login</Link>
            </div>

            <div className=" hover-underline-animation ">
            <Link to="/api/register" className="two">Register</Link>
            </div>
        </div>
    )
}


//
export default Header;
