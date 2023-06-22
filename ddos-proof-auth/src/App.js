
import { useEffect, useState, useRef } from "react";
import Input from "./Components/Inputs";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
    passConfirm: "",
  });

  const inputRef = useRef(null);
  const hiddenInput = document.getElementById('hidden-input')

  const unFocus = () => {
    // inputRef.current.blur();
    console.log(hiddenInput)
    hiddenInput.focus();
  }

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
    unFocus();
    const changes = shuffleInputs([...inputs]);
    setInputs(changes);
    console.log("everyday I'm shufflin");
  }

  return (
    <div className="App">
      {inputs.map((element) => {
       return <Input type={element.type} inputRef={inputRef} onChange={handleShuffle} key={element.key} name={element.field} />
      })}
      <input type="button" id="hidden-input" />
    </div>
  );
}

export default App;
