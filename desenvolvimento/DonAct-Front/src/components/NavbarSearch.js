import React, {  useState } from "react";
import "../styles/navbar.css"
import logo from "../assets/logo.png"
const NavbarSearch= (props) => {
    const [nome, setNome] = useState("");
   
 
 
    return (
    <nav className="navbar">
        <div className="align-self-begin" >
            <a href="/"> <img className="logonav" src={logo} alt = "DonAct"></img></a>
        </div>
        <div className="nav-item align-self-end ml-auto login">
        <span className="material-icons">
											person
										</span>
                                        <label>Olá, {nome}</label>
        </div>
    </nav>
  );
};

export default NavbarSearch;