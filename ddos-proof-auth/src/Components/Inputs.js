import { render } from "@testing-library/react";
import React, { useEffect, useReducer } from "react";
import "./Inputs.css";

const Inputs = ({ inputs, handleChange }) => {

  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const handleInput = (e)  =>{
    handleChange(e);
    forceUpdate();
  }
  const renderInputs = () => {
    return inputs.map((element) => {
      return (
        <>
          <label key={element.key * 4}>{element.field}</label>
          <input
            className="input-field"
            type={element.field}
            key={element.key}
            placeholder={element.key}
            onChange={(e) => handleInput(e)}
          />
        </>
      );
    });
  };

  let shown = renderInputs();


  useEffect(() =>{
    console.log("inputs!");
  })

  return <form className="input-form">{shown}<button onClick={(e) => handleInput(e)}>update</button></form>;
};

export default Inputs;
