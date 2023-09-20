import "./App.css";
import { useEffect, useState, useRef } from "react";
import Input from "./Components/Input/Input";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { morseData, inputArr } from "./data";
import { validatePass, addCodeFrag, addChar } from "./helpers";
import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function App() {

  // State Declarations
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
    passConfirm: "",
  });
  const [phone, setPhone] = useState("5555555555");
  const [view, setView] = useState("username");
  const [error, setError] = useState({
    "password must contain a number": false,
  });

  const [stringFrag, setStringFrag] = useState("");
  const [fullString, setFullString] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [showChart, setShowChart] = useState(false);
  const [inputs, setInputs] = useState(inputArr);
  const [address, setAddress] = useState({
    street: "",
    number: "",
    city: "",
  });
  const [addressPart, setAddressPart] = useState("street");

  const translateCode = () => {
    const newChar = Object.keys(morseData, stringFrag).find(
      (key) => morseData[key] === stringFrag
    );
    if (newChar !== undefined) {
      let newAddress = { ...address };
      newAddress[addressPart] = addChar(newChar, fullString);
      setAddress(newAddress);
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
      setError(validatePass(value, error));
    }
    setInputValue((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  function handleShuffle(e, inputs) {
    handleChange(e);
    unFocus();
    const changes = shuffleInputs([...inputs]);
    return changes;
  }

  const unFocus = () => {
    console.log(hiddenInput);
    hiddenInput.focus();
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

  return (
    <div className="App">
      {view === "username" && (
        <div>
          {inputs.map((element) => {
            return (
              <Input
                type={element.type}
                inputRef={inputRef}
                onChange={(e) => setInputs(handleShuffle(e, inputs))}
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
          <div id="address-inputs">
            <div className="button-input-combo">
              <input
                type="text"
                disabled
                placeholder="street"
                value={address.street}
              ></input>
              <button onClick={() => setAddressPart("street")}>
                Input Street
              </button>
            </div>
            <div className="button-input-combo">
              <input
                type="text"
                disabled
                placeholder="number"
                value={address.number}
              ></input>
              <button onClick={() => setAddressPart("number")}>
                Input Apt/House Number
              </button>
            </div>
            <div className="button-input-combo">
              {" "}
              <input
                type="text"
                disabled
                placeholder="city"
                value={address.city}
              ></input>
              <button onClick={() => setAddressPart("city")}>Input City</button>
            </div>
          </div>

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
          <button onClick={handleRegisterAddress}>Continue</button>
          {errorMessage && <Alert variant="warning">{errorMessage}</Alert>}
        </div>
      )}
    </div>
  );
}

export default App;
