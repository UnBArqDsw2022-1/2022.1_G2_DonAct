import React from "react";

const Button = ({ text, type = "submit" }) => {
  return (
    <button type={type} className="btn btn-dark btn-lg btn-block btn-primary">
      {text}
    </button>
  );
};

export default Button;
