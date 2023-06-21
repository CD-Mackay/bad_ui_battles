import { render } from "@testing-library/react";
import { useCallback, useEffect, useState } from "react";
import Input from "./Components/Inputs";
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
      field: "username",
    },
    {
      type: "password",
      key: 2,
      field: "password",
    },
    {
      type: "password",
      key: 3,
      field: "passConfirm",
    },
  ];

  const [inputs, setInputs] = useState(inputArr);



  const shuffleInputs = (array) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };
  const handleChange = (e) => {
    e.preventDefault();
    setInputValue()
  };

  useEffect(() => {
    const mountArray = shuffleInputs(inputArr)
    setInputs(mountArray)
  }, []);

  function handleShuffle() {
    const changes = shuffleInputs([...inputs]);
    setInputs(changes);
    console.log("everyday I'm shufflin");
  }

  return (
    <div className="App">
      {inputs.map((element) => {
       return <Input type={element.type} onChange={handleShuffle} key={element.key} name={element.field} />
      })}
    </div>
  );
}

export default App;
