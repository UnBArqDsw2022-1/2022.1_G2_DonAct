import React from "react";

import github from "../../assets/github 1.svg";

import "./styles.css";

const Footer = () => {
  return (
    <div id="Footer">
      Contato
      <div>
        <div id="Buttons_Footer">
          <button>
            {" "}
            <img src={github} alt="icon Github"></img>
          </button>
        </div>

        <div id="Contacts">
          <div id="Contacts_esquerda"> lorem ipsum lorem ipsum lorem ipsum</div>
          <div id="Contacts_direita"> lorem ipsum lorem ipsum lorem ipsum</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
