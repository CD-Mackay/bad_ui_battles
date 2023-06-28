import logo from "./logo.svg";
import "./App.css";
import { useState } from 'react';

function App() {

  const [stringFrag, setStringFrag] = useState("");
  const [fullString, setFullString] = useState("");

  const morseData = {
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  };

  const addChar = (newChar) => {
    let stringCopy = fullString;
    stringCopy = stringCopy + newChar;
    setFullString(stringCopy);
  };

  const addCodeFrag = (code) => {
    let codeCopy = stringFrag;
    codeCopy = codeCopy + code;
    setStringFrag(codeCopy);
  }

  const translateCode = () => {
    
  }

  return (
    <div className="App">
      <textarea disabled>{stringFrag}</textarea>
      <div className="button-wrapper">
        <button onClick={() => addCodeFrag(".")}>.</button>
        <button onClick={() => addCodeFrag("-")}>-</button>
        <button>Enter</button>
      </div>
    </div>
  );
}

export default App;
