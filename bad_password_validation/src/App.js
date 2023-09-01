import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [password, setPassword] = useState("");
  const [error, setError] = useState([{string: "password must contain a number", completed: false}])
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
      <ul>
        {error.map((element) => {
          return <li>{element.string}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
