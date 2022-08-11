import React from "react";
import './headerSimple.css';
import logo from '../assets/logo_header.png'
import sino from '../assets/bell_115256.svg'
const HeaderSimple = (props) => {
    return (
        <div className="Header-container">
               <img id="logo" src={logo}/>
               
               <img id="sino" src={sino}/>
	    </div>
    );

};
    export default HeaderSimple;

