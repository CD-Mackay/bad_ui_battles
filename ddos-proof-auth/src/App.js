import { render } from "@testing-library/react";
import { useCallback, useEffect, useState } from "react";
import Inputs from "./Components/Inputs";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
    passConfirm: "",
  });

  const [test, setTest] = useState(1);

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
    inputArr = shuffleInputs(inputArr);
    for (let element of inputArr) {
      console.log(element.key)
    }
    let newtest = test + 1;
    setTest(newtest);
    setInputs(inputArr)
  };

  useEffect(() => {
    const mountArray = shuffleInputs(inputArr)
    setInputs(mountArray)
  }, [test]);

  function handleShuffle() {
    const changes = shuffleInputs([...inputs]);
    setInputs(changes);
    console.log("everyday I'm shufflin");
  }

  return (
    <div className="App">
      {inputs.map((element) => {
       return <input type={element.field} onChange={handleShuffle} key={element.key} placeholder={element.field} />
      })}
    </div>
  );
}

export default App;
