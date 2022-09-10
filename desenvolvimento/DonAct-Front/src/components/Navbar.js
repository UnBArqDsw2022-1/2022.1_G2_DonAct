import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/logo.png";
const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="align-self-begin">
        <a href="/">
          {" "}
          <img className="logonav" src={logo} alt="DonAct"></img>
        </a>
      </div>
      <div className="nav-item align-self-end ml-auto login">
        {window.location.pathname !== "/donor/dash" && (
          <Link to="/login">
            <button
              type="submit"
              className="btn btn-dark btn-md navbar-right loginButton"
            >
              Entrar
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
