import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState([
    { string: "password must contain a number", completed: false },
  ]);
  const validatePass = (value) => {
    let errorArr = [...error];
    console.log(/\d/.test(value), value);
    if (/\d/.test(value)) {
      errorArr[0].completed = true;
    }
    if (!value.includes("robot") && error.length < 2) {
      errorArr.push({
        string: "password must contain the word robot",
        completed: false,
      });
    }
    if (value.includes("robot") && !value.includes("zoop") && error.length < 3) {
      console.log("third!")
      errorArr[1].completed = true;
      errorArr.push({ string: "password must contain zoop", completed: false });
    }
    if (value.includes("zoop") && !value.includes("right")&& error.length < 4) {
      errorArr[2].completed = true;
      errorArr.push({string: "After you slide to the left, you must slide to the _____", completed: false})
    }
    if (value.includes("right") && error.length < 5) {
      errorArr[3].completed = true;
      errorArr.push({string: "must include the letter z twice", completed: false})
    }
    if (value.includes("zz") && error.length < 6) {
      errorArr[4].completed = true;
      errorArr.push({string: "press f to pay respects", completed: false})
    }
    if (value.includes("f") && error.length < 7) {
      errorArr[5].completed = true;
    }
    setError(errorArr);
  };

  const showReqs = () => {
    return error.map((element, index) => {
      return (
        <li key={index} className={element.completed ? "complete" : "incomplete"}>
          {element.string}
        </li>
      );
    });
  };

  const handleInput = (e) => {
    const { value } = e.target;
    console.log(value);
    setPassword(value);
    validatePass(value);
  };
  return (
    <div className="App">
      <form className="user-form">
        <input type="text"></input>
        <input
          type="password"
          value={password}
          onChange={(e) => handleInput(e)}
        ></input>
      </form>
      <ul>{showReqs()}</ul>
    </div>
  );
}

export default App;
