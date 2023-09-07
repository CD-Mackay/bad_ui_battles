import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

function App() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState([
    { string: "password must contain a number", completed: false },
  ]);
  const validatePass = (value) => { // Too much randomness in passwords, need to find a way to only complete the validation step
    let errorArr = [...error];
    if (/\d/.test(value) && error.length < 2) {
      errorArr[0].completed = true;
    }
    if (/\d/.test(value) && error.length < 3) {
      errorArr[1].completed = true;
    }
    if (!value.includes("robot") && error.length < 2) {
      errorArr.splice(0, 0, {
        string: "password must contain the word robot",
        completed: false,
      });
    }
    if (
      value.includes("robot") &&
      !value.includes("zoop") &&
      error.length < 3
    ) {
      errorArr[0].completed = true;
      errorArr.splice(0, 0, {
        string: "password must contain zoop",
        completed: false,
      });
    }
    if (
      value.includes("zoop") &&
      !value.includes("right") &&
      error.length < 4
    ) {
      errorArr[0].completed = true;
      errorArr.splice(0, 0, {
        string: "After you slide to the left, you must slide to the _____",
        completed: false,
      });
    }
    if (value.includes("right") && error.length < 5) {
      errorArr[0].completed = true;
      errorArr.splice(0, 0, {
        string: "must include the letter z twice",
        completed: false,
      });
    }
    if (value.includes("zz") && error.length < 6) {
      errorArr[0].completed = true;
      errorArr.splice(0, 0, {
        string: "press f to pay respects",
        completed: false,
      });
    }
    if (value.includes("f") && error.length < 7) {
      errorArr[0].completed = true;
    }
    console.log(errorArr);
    setError(errorArr);
  };

  const showReqs = () => {
    return error.map((element, index) => {
      return (
        <li
          key={index}
          className={element.completed ? "complete" : "incomplete"}
        >
          {element.string}
          {element.completed ? <AiOutlineCheck color="green" /> : <AiOutlineClose color="red" />}
        </li>
      );
    });
  };

  const handleInput = (e) => {
    const { value } = e.target;
    setPassword(value);
    validatePass(value);
  };
  return (
    <div className="App">
      <h3>Welcome to Das App</h3>
      <p>To register, please enter your username and password</p>
      <form className="user-form">
        <input type="text" placeholder="username"></input>
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => handleInput(e)}
        ></input>
      </form>
      <ul>{password.length > 0 && showReqs()}</ul>
    </div>
  );
}

export default App;
