import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      type="submit"
      className="btn btn-dark btn-lg btn-block btn-primary"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
