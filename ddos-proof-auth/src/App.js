import { render } from "@testing-library/react";
import { useCallback, useEffect, useState } from "react";
import Inputs from "./Components/Inputs";
import "./App.css";

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  console.log("forceupdate!")
  return () => setValue((value) => value + 1); // update state to force render
  // A function that increment 👆🏻 the previous state like here
  // is better than directly setting `setValue(value + 1)`
}
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

  const forceUpdate = useForceUpdate();

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
    for (let element of inputArr) {
      console.log(element.key)
    }
    let newtest = test + 1;
    setTest(newtest);
    forceUpdate();
  };

  useEffect(() => {
    console.log("useffect");
  }, [test]);

  return (
    <div className="App">
      <Inputs
        inputs={inputArr}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
