import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuItems from "./MenuItems";
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const clickeChnage = () => {
    setNavbarOpen( (prev) => !prev);   
    }
  return (
    <>
      <nav className="NavbarItems">
        <div>
        <h1 className="navbar-logo"> Pollution </h1>
        </div>
        
        <div className="menu-icon" onClick={clickeChnage} >
        <i clasName="mobil-icon" className={navbarOpen ? 'fas fa-times' : 'fas fa-bars'} ></i>      
        </div>
        <div className="navbar-box">
        <ul className={navbarOpen ? 'nav-menu active' : 'nav-menu'} >
          {MenuItems.map((value) => {
            return (
                <li>
                <Link
                to={value.url} 
                className={value.clasName}>
                {value.title}
                </Link>
                </li>
            );
          })}
        </ul>
        <button>Sign Up</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
