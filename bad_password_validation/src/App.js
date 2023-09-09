import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

function App() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    "password must contain a number": false,
  });
  const validatePass = (value) => {
    // Too much randomness in passwords, need to find a way to only complete the validation step
    let errorObj = { ...error };
    if (/\d/.test(value)) {
      errorObj["password must contain a number"] = true;
      errorObj["password must include the word robot"] = false;
    }

    if (value.includes("robot")) {
      errorObj["password must include the word robot"] = true;
      errorObj["password must contain the phrase zoop"] = false;
    }
    if (value.includes("zoop")) {
      errorObj["password must contain the phrase zoop"] = true;
      errorObj[
        "after you slide to the left, you must slide to the ______"
      ] = false;
    }
    if (value.includes("right")) {
      errorObj[
        "after you slide to the left, you must slide to the ______"
      ] = true;
      errorObj["password must contain zz"] = false;
    }
    if (value.includes("zz")) {
      errorObj["password must contain zz"] = true;
      errorObj["press f to pay respects"] = false;
    }
    if (value.includes("f")) {
      errorObj["press f to pay respects"] = true;
    }
    console.log(errorObj);
    setError(errorObj);
  };

  const showReqs = () => {
    let array = [];
    Object.keys(error).forEach(function (key, index) {
      array.push(
        <li
          index={index}
          className={error[key] === true ? "complete" : "incomplete"}
        >
          {key}
        </li>
      );
    });
    return array.map((element) => {
      return element;
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
