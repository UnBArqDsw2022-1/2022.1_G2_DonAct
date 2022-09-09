import React from "react";

import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_content">
        <div className="header_icons">
          <span className="material-icons">person</span>
          <label>Olá usuário</label>
        </div>
      </div>
    </div>
  );
};

export default Header;
