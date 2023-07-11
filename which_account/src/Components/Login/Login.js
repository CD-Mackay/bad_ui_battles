import React, { useState } from "react";
import "./Login.css";

const Login = ({ handleLogin }) => {
  const [password, setPassword] = useState();

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login">
      <h3>
        Welcome to Which_Account! <br />
        <br />
        Please enter your password to proceed
      </h3>
      <form className="login-form">
        <input
          type="password"
          placeholder="enter password"
          onChange={(e) => handleChange(e)}
        ></input>
        <button onClick={(e) => handleLogin(e, password)}>Login</button>
      </form>
    </div>
  );
};

export default Login;
