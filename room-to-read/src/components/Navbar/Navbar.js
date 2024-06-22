import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
import cookies from "../cookies";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleLogOut = ()=>{
    handleClick()
    localStorage.clear()
    cookies.remove('adminData')
    window.location.reload()
  }


  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span>Room To Read</span>
            <span className="icon">
              {/* <CodeIcon /> */}
            </span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
              Home
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                exact
                to="/studentregistration"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                RegistrationPage
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/studentlist"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                StudentList
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/librarydashboard"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Library Dashboard
              </NavLink>
            </li>
           {cookies.get('adminData') ? <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleLogOut}
              >
               LogOut
              </NavLink>
            </li>:
            <li className="nav-item">
            <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               Login
              </NavLink></li>}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            ) : (
                <span className="icon">
                  <HamburgetMenuOpen />{" "}
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;