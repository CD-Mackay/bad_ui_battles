import { render } from '@testing-library/react';
import React from 'react';

const Inputs = ({inputs, handleChange}) => {

  const renderInputs = () => {
    return inputs.map((element) => {
      console.log(element.key);
      return (
        <input
          type={element.field}
          key={element.key}
          placeholder={element.key}
          onChange={(e) => handleChange(e)}
        />
      );
    });
  };

  return (
    <form>
      {renderInputs()}
    </form>
  )
};

export default Inputs;
