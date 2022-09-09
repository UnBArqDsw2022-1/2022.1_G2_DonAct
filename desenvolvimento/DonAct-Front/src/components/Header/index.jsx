import React from "react";

import { Link } from "react-router-dom";

import donation from "../../assets/headrimg.jpeg";
import heart from "../../assets/heart.png";
import bubbles from "../../assets/bubbles.png";
import Button from "../Button";

import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <div className=" headerImg">
        <img className="donationimg" alt="donation" src={donation} />
      </div>

      <div className="prospection text-start">
        <img className="heartimg" alt="heart" src={heart} />
       
        <p className="text-home">
          <span>Encontre uma ONG!</span>
          <span>Ajude quem precisa!</span>
        </p>
        
        <div className="btn-singup">
          <Link to="/choice">
            <Button text="Cadastre-se"></Button>
          </Link>
        </div>

        <img className="bubblesimg" alt="bubbles "src={bubbles} />
      </div>
    </div>
  );
};

export default Header;
