import "./App.css";
import TextInput from "./Components/TextInput/TextInput";
import { useState } from "react";
import morseChart from "./constants";
import { translate, reverseTranslate } from "./helpers";
import MorseInput from "./Components/MorseInput/MorseInput";

function App() {
  const [textData, setTextData] = useState("");
  const [morseData, setMorseData] = useState("");
  const [output, setOutPut] = useState("");
  const [error, setError] = useState("");

  const showHideError = (s) => {
    setError(s);
    setTimeout(() => {
      setError("");
    }, 2000);
  };
  const validateText = (s) => {
    if (!morseChart[s] && !/\s/g.test(s)) {
      showHideError("Invalid Character");
    } else {
      return true;
    }
  };

  const handleTextInput = (e) => {
    e.preventDefault();
    const { value } = e.target;
    const newChar = value.slice(value.length - 1);
    console.log("newChar:", newChar);
    if (newChar === "" || validateText(newChar) || newChar === " ") {
      setTextData(value);
    }
  };

  const handleMorseInput = (e) => {
    e.preventDefault();
    const { value } = e.target;
    const newChar = value.slice(value.length - 1);
    console.log("newChar:", newChar);
    if (newChar === "" || validateText(newChar) || newChar === " ") {
      setMorseData(value);
    }
  };

  return (
    <div className="App">
      <h1>Morse Code Translator</h1>
      <h3>Enter a brief messsage to have it converted to morse code!</h3>
      <TextInput textData={textData} handleTextInput={handleTextInput} />
      <button onClick={() => setMorseData(translate(textData))}>
        translate!
      </button>
      <p>{morseData}</p>
      <p>{error}</p>
      <MorseInput morseData={morseData} handleMorseInput={handleMorseInput} />
      <button onClick={() => setOutPut(reverseTranslate(morseData))}>Reverse!</button>
      <p>{output}</p>
    </div>
  );
}

export default App;
