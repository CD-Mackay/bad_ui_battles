import "./App.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import MorseChart from "./Components/MorseChart/MorseChart";
import { morseArr, morseData } from "./data.js";
import { Helmet } from "react-helmet-async";

function App() {
  const [stringFrag, setStringFrag] = useState("");
  const [fullString, setFullString] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showChart, setShowChart] = useState(false);

  const addChar = (newChar) => {
    let stringCopy = fullString;
    stringCopy = stringCopy + newChar;
    setFullString(stringCopy);
  };

  const addCodeFrag = (code) => {
    let codeCopy = stringFrag;
    codeCopy = codeCopy + code;
    setStringFrag(codeCopy);
  };

  const translateCode = () => {
    const newChar = Object.keys(morseData, stringFrag).find(
      (key) => morseData[key] === stringFrag
    );
    if (newChar !== undefined) {
      addChar(newChar);
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

  return (
    <div className="App">
      <Helmet>
        <title>Morse Code Input</title>
      </Helmet>
      <textarea disabled value={fullString}></textarea>
      <div className="button-wrapper">
        <div className="input-wrapper">
          <Button
            variant="outline-primary"
            size="md"
            onClick={() => addCodeFrag(".")}
          >
            .
          </Button>
          <Button
            variant="outline-primary"
            size="md"
            onClick={() => addCodeFrag("-")}
          >
            -
          </Button>
        </div>
        <Button variant="success" size="sm" onClick={translateCode}>
          Enter
        </Button>
      </div>
      <span>Current pattern: {stringFrag}</span>
      <span>
        Current character:
        {Object.keys(morseData, stringFrag).find(
          (key) => morseData[key] === stringFrag
        )}
      </span>
      {errorMessage !== "" && <Alert variant="warning">{errorMessage}</Alert>}
      <Button
        variant="info"
        onClick={
          showChart ? () => setShowChart(false) : () => setShowChart(true)
        }
        size="md"
      >
        Lost?
      </Button>
      {showChart && <MorseChart data={morseArr} />}
    </div>
  );
}

export default App;
