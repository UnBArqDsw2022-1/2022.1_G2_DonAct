import React from "react";
import "../styles/login.css";

const Input = ({
  classLabel,
  text,
  type,
  classInput,
  placeholder,
  required,
  id,
  name,
  handleChange,
  handleBlur,
  value,
}) => {
  return (
    <>
      <label className={classLabel}>
        {text} {required ? "*" : " "}
      </label>
      <input
        type={type}
        className={classInput}
        placeholder={placeholder}
        id={id}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
    </>
  );
};

export default Input;
