import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [password, setPassword] = useState("");
  const [error, setError] = useState([{string: "password must contain a number", completed: false}])
  const validatePass = () => {
    if (/\d/.test(password)) {
      let errorArr = [...error];
      errorArr[0].completed = true;
      errorArr.push({string: "password must contain the word robot", completed: false});
      console.log(errorArr);
      setError(errorArr);
    }
  }

  const handleInput = (e) => {
    const { value } = e.target;
    setPassword(value);
    validatePass()
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
