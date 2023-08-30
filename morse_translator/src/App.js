import "./App.css";
import TextInput from "./Components/TextInput/TextInput";
import { useState } from "react";
import morseData from './constants'
import translate from './helpers'

function App() {
  const [textData, setTextData] = useState("");
  const [output, setOutPut] = useState("");
  const [error, setError] = useState("");

  const showHideError = (s) => {
    setError(s);
    setTimeout(() => {
      setError("")
    }, 2000);
  }
  const validateText = (s) => {
    if (!morseData[s] && !/\s/g.test(s)) {
      showHideError("Invalid Character");
    } else {
      return true;
    }
  };

  const handleTextInput = (e) => {
    e.preventDefault();
    const { value } = e.target;
    const newChar = value.slice(value.length - 1);
    console.log("newChar:", newChar)
    if (newChar === "" || validateText(newChar) || newChar === " ") {
      setTextData(value);
    }
  };

  return (
    <div className="App">
      <h1>Morse Code Translator</h1>
      <h3>Enter a brief messsage to have it converted to morse code!</h3>
      <TextInput textData={textData} handleTextInput={handleTextInput} />
      <button onClick={() => setOutPut(translate(textData))}>translate!</button>
      <p>{output}</p>
      <p>{error}</p>
    </div>
  );
}

export default App;
