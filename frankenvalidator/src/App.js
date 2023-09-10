import './App.css';
import { useEffect, useState, useRef} from 'react';
import Input from './Components/Input/Input';

function App() {

  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
    passConfirm: "",
  });

  const [view, setView] = useState("login");

  const inputRef = useRef(null);
  const hiddenInput = document.getElementById("hidden-input");

  const unFocus = () => {
    // inputRef.current.blur();
    console.log(hiddenInput);
    hiddenInput.focus();
  };

  let inputArr = [
    {
      type: "text",
      key: 1,
      field: "username",
      label: "username",
    },
    {
      type: "password",
      key: 2,
      field: "password",
      label: "password",
    },
    {
      type: "password",
      key: 3,
      field: "passConfirm",
      label: "confirm password",
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
    const { value, name } = e.target;
    console.log("value", value, "name", name);
    setInputValue((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    if (
      inputValue.password === inputValue.passConfirm &&
      inputValue.password !== ""
    ) {
      setView("success");
    }
  };

  useEffect(() => {
    const mountArray = shuffleInputs(inputArr);
    setInputs(mountArray);
  }, []);

  return (
    <div className="App">
        {inputs.map((element) => {
            return (
              <Input
                type={element.type}
                inputRef={inputRef}
                onChange={(e) => handleShuffle(e)}
                key={element.key}
                name={element.field}
                inputValue={inputValue}
                label={element.label}
              />
            );
          })}
    </div>
  );
}

export default App;
