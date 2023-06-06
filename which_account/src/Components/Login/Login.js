import React, { useState } from 'react';

const Login = ({accounts, handleLogin}) => {

  const [password, setPassword] = useState()

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form>
      <input type="password" placeholder="enter password" onChange={(e) => handleChange(e)}></input>
      <button onClick={(e) => handleLogin(e, password)}>Login</button>
    </form>
  )
};

export default Login;