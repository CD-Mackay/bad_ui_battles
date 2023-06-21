import React from 'react';

const Input = ({type, name, onChange}) => {
  return (
    <>
    <label htmlFor={name}>{name}</label>
    <input onChange={onChange} type={type} placeholder={name} />
    </>
   )
};

export default Input