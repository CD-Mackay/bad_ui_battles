import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [password, setPassword] = useState("");
  const validatePass = () => {

  }

  const handleInput = (e) => {
    const { value } = e.target;
    setPassword(value);
  }
  return (
    <div className="App">
      <form className="user-form">
        <input type="text"></input>
        <input type="password" value={password} onChange={(e) => handleInput(e)}></input>
      </form>
    </div>
  );
}

export default App;
