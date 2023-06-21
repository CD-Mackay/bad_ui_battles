import React from 'react';

const Input = ({type, name, onChange}) => {
  return (
    <>
    <label htmlF>{name}</label>
    <input onChange={onChange} type={type} placeholder={name} />
    </>
   )
};

export default Input