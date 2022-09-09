import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="align-self-begin">
        <a href="/">
          {" "}
          <img className="logonav" src={logo} alt="DonAct"></img>
        </a>
      </div>

      <div className="nav-item align-self-end ml-auto login">
        <Link to="/login">
          <button
            type="submit"
            className="btn btn-dark btn-md navbar-right loginButton"
          >
            Entrar
          </button>
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;
