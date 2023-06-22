import React from 'react';

const Input = ({type, name, onChange, inputRef, inputValue}) => {


  return (
    <>
    <label htmlFor={name}>{name}</label>
    <input onChange={onChange} type={type} id={name} value={inputValue.name} name={name} ref={inputRef} placeholder={name} />
    </>
   )
};

export default Input