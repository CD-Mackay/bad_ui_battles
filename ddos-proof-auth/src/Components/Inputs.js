import React from "react";
import "./Inputs.css";

const Input = ({ type, name, onChange, inputRef, inputValue, label }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{label}</label>
      <input
        onChange={onChange}
        type={type}
        id={name}
        value={inputValue.name}
        name={name}
        ref={inputRef}
        placeholder={name}
      />
    </div>
  );
};

export default Input;
