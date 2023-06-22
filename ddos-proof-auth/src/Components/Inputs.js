import React from 'react';

const Input = ({type, name, onChange, inputRef}) => {
  return (
    <>
    <label htmlFor={name}>{name}</label>
    <input onChange={onChange} type={type} ref={inputRef} placeholder={name} />
    </>
   )
};

export default Input