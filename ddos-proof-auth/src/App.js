import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
    passConfirm: "",
  });
  const handleChange = (e) => {
    inputArr.forEach((element) => console.log(element.key));
    inputArr.sort(() => (Math.random() > 0.5 ? 1 : -1));
    inputArr.forEach((element) => console.log(element.key));
  };
  const inputArr = [
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

  const inputs = inputArr.map((element) => {
    return (
      <input type={element.type} key={element.key} placeholder={element.key} onChange={(e) => handleChange(e)} />
    );
  });

  return (
    <div className="App">
      <form className="login-form">{inputs}</form>
    </div>
  );
}

export default App;
