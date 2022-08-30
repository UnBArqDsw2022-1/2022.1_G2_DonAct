import React from "react";

const Button = ({ text }) => {
  return (
    <button type="submit" className="btn btn-dark btn-lg btn-block btn-primary">
      {text}
    </button>
  );
};

export default Button;
