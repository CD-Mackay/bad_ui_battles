import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import "./Inputs.css";

const Inputs = ({ inputs, handleChange }) => {
  const renderInputs = () => {
    return inputs.map((element) => {
      return (
        <>
          <label>{element.field}</label>
          <input
            className="input-field"
            type={element.field}
            key={element.key}
            placeholder={element.key}
            onChange={(e) => handleChange(e)}
          />
        </>
      );
    });
  };

  let shown = renderInputs();

  useEffect(() =>{
    console.log("inputs!");
  })

  return <form className="input-form">{shown}</form>;
};

export default Inputs;
