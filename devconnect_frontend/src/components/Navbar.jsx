import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { useUserContext } from "../UserContext";

const Navbar = () => {

  const { loggedin, logout } = useUserContext();

  const showUserOptions = () => {
    if (loggedin) {
      return (
        <ul className="navbar-nav ms-auto">
          <button onClick={logout} className="btn btn-danger">
            Logout
          </button>
        </ul>
      );
    } else {
      return (
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              Signup
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      );
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/home">
            Devconnect
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " to="/home">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/addblog">
                  AddBlog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/viewblog">
                  ViewBlog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  Profile
                </NavLink>
              </li>
             
            </ul>
            {showUserOptions()}
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
