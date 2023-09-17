import "./App.css";
import { useEffect, useState, useRef } from "react";
import Input from "./Components/Input/Input";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { morseArr, morseData } from "./data";
import { validatePass, addCodeFrag, addChar } from "./helpers";
import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

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
  const [phone, setPhone] = useState("5555555555");
  const [view, setView] = useState("address");
  const [error, setError] = useState({
    "password must contain a number": false,
  });

  const [stringFrag, setStringFrag] = useState("");
  const [fullString, setFullString] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showChart, setShowChart] = useState(false);
  const [inputs, setInputs] = useState(inputArr);
  const [address, setAddress] = useState({
    street: "",
    number: "",
    city: ""
  });
  const [addressPart, setAddressPart] = useState("street");

  const translateCode = () => {
    const newChar = Object.keys(morseData, stringFrag).find(
      (key) => morseData[key] === stringFrag
    );
    if (newChar !== undefined) {
      let newAddress = {...address};
      newAddress[addressPart] = addChar(newChar, fullString);
      setFullString(addChar(newChar, fullString));
    } else {
      showError();
    }
    setStringFrag("");
  };

  const showError = () => {
    setErrorMessage("Not a valid character");
    setTimeout(() => {
      setErrorMessage("");
    }, 2000);
  };

  const inputRef = useRef(null);
  const hiddenInput = document.getElementById("hidden-input");

  const handleRegisterPhone = () => {
    setView("address");
  };

  const handleRegisterAddress = () => {
    setView("success");
  };

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
      // validatePass(value);
      setError(validatePass(value, error));
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
      {view === "phone-number" && (
        <div>
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
        </div>
      )}
      {view === "address" && (
        <div>
          {/* <textarea disabled value={fullString}></textarea> */}
          <input type="text" disabled placeholder="street" value={address.street}></input>
          <input type="text" disabled placeholder="number" value={address.number}></input>
          <input type="text" disabled placeholder="city" value={address.city}></input>

          <div className="button-wrapper">
            <div className="input-wrapper">
              <button
                variant="outline-primary"
                size="md"
                onClick={() => setStringFrag(addCodeFrag(".", stringFrag))}
              >
                .
              </button>
              <button
                variant="outline-primary"
                size="md"
                onClick={() => setStringFrag(addCodeFrag("-", stringFrag))}
              >
                -
              </button>
            </div>
            <button variant="success" size="sm" onClick={translateCode}>
              Enter
            </button>
          </div>
          <span>Current pattern: {stringFrag}</span>
          <span>
            Current character:
            {Object.keys(morseData, stringFrag).find(
              (key) => morseData[key] === stringFrag
            )}
          </span>
          <button onClick={() => setAddressPart("street")}>Street</button>
          <button onClick={() => setAddressPart("number")}>Number</button>
          <button onClick={() => setAddressPart("city")}>City</button>

          <button onClick={handleRegisterAddress}>Continue</button>
          {errorMessage && <Alert variant="warning">{errorMessage}</Alert>}
        </div>
      )}
    </div>
  );
}

export default App;
