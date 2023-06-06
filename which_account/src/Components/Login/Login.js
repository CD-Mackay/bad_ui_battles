import React, { useState } from 'react';

const Login = ({accounts}) => {

  const [password, setPassword] = useState()

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let possibleAccounts = accounts.filter((element) => element.password === password)
    console.log(possibleAccounts)
    return possibleAccounts;
  }
  return (
    <form>
      <input type="password" placeholder="enter password" onChange={(e) => handleChange(e)}></input>
      <button onClick={(e) => handleLogin(e)}>Login</button>
    </form>
  )
};

export default Login;