import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
    passConfirm: "",
  });

  const shuffleInputs = (array) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };
  const handleChange = (e) => {
    inputArr.forEach((element) => console.log(element.key));
    inputArr = shuffleInputs(inputArr);
    inputArr.forEach((element) => console.log(element.key));
  };
  let inputArr = [
    {
      type: "text",
      key: 1,
    },
    {
      type: "password",
      key: 2,
    },
    {
      type: "password",
      key: 3,
    },
  ];



  return (
    <div className="App">
      <form className="login-form">
        {inputArr.map((element) => {
          return (
            <input
              type={element.type}
              key={element.key}
              placeholder={element.key}
              onChange={(e) => handleChange(e)}
            />
          );
        })}
      </form>
    </div>
  );
}

export default App;
