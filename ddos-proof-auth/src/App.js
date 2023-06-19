import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
    passConfirm: "",
  });

  let inputArr = [
    {
      type: "text",
      key: 1,
      field: "username"
    },
    {
      type: "password",
      key: 2,
      field: "password"
    },
    {
      type: "password",
      key: 3,
      field: "passConfirm"
    },
  ];

  const shuffleInputs = (array) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };
  const handleChange = (e) => {
    inputArr = shuffleInputs(inputArr);
  };

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
