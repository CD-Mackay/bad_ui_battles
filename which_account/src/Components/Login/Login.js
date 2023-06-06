import React from 'react';

const Login = ({accounts}) => {

  const handleLogin = (e) => {
    e.preventDefault();
  }
  return (
    <form>
      <input type="password" placeholder="enter password"></input>
      <button onClick={(e) => handleLogin(e)}>Login</button>
    </form>
  )
};

export default Login;