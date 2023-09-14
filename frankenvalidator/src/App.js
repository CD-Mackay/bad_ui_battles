import "./App.css";
import { useEffect, useState, useRef } from "react";
import Input from "./Components/Input/Input";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

function App() {
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

  // State Declarations
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
    passConfirm: "",
  });
  const [phone, setPhone] = useState("5555555555")
  const [view, setView] = useState("phone-number");
  const [error, setError] = useState({
    "password must contain a number": false,
  });
  const [inputs, setInputs] = useState(inputArr);

  const inputRef = useRef(null);
  const hiddenInput = document.getElementById("hidden-input");

  const validatePass = (value) => {
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
    setError(errorObj);
  };

  const handleRegisterPhone = () => {
    setView("address")
  };

  const handleRegisterAddress = () => {
    setView("success")
  }

  const showReqs = () => {
    let array = [];
    Object.keys(error).forEach(function (key, index) {
      array.push(
        <li
          index={index}
          className={error[key] === true ? "complete" : "incomplete"}
        >
          {key}{" "}
          {error[key] === true ? (
            <AiOutlineCheck color="green" />
          ) : (
            <AiOutlineClose color="red" />
          )}
        </li>
      );
    });
    return array.map((element) => {
      return element;
    });
  };

  const unFocus = () => {
    // inputRef.current.blur();
    console.log(hiddenInput);
    hiddenInput.focus();
  };

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
    if (name === "password") {
      validatePass(value);
    }
    setInputValue((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleRegisterUsername = () => {
    if (
      inputValue.password === inputValue.passConfirm &&
      inputValue.password !== ""
    ) {
      setView("phone-number");
    }
  };

  useEffect(() => {
    const mountArray = shuffleInputs(inputArr);
    setInputs(mountArray);
  }, []);

  function handleShuffle(e) {
    handleChange(e);
    unFocus();
    const changes = shuffleInputs([...inputs]);
    setInputs(changes);
    console.log("everyday I'm shufflin");
  }

  return (
    <div className="App">
      {view === "username" && (
        <div>
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
          <button onClick={handleRegisterUsername}>Continue</button>
          {showReqs()}
          <input type="button" id="hidden-input" />
        </div>
      )}
      {view === "phone-number" && <div>
        {/* Add color based phone picker */}
        <h4>Please Input your phone number to proceed</h4>
      <input
        id="slider"
        type="range"
        min="1111111111"
        value={phone}
        onChange={(e) => handlePhoneChange(e)}
        max="9999999999"
      />
      <div className="span-wrapper">
        <span>({phone.toString().slice(0, 3)})</span>
        <span>-{phone.toString().slice(3, 6)}</span>
        <span>-{phone.toString().slice(6)}</span>
      </div>
        <button onClick={handleRegisterPhone}>Continue</button>
        </div>}
        {view === "address" && <div>
          {/* Add Morse code input to register address */}
          <button onClick={handleRegisterAddress}>Continue</button></div>}
    </div>
  );
}

export default App;
