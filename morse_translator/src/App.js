import './App.css';
import TextInput from './Components/TextInput/TextInput';
import { useState } from 'react';

function App() {

  const [textData, setTextData] = useState("");

  const handleTextInput = (e) => {
    e.preventDefault()
    const { value, name} = e.target;
    setTextData(value);
  }

  const morseData = {
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-",
  };

  return (
    <div className="App">
      <TextInput textData={textData} handleTextInput={handleTextInput} />
    </div>
  );
}

export default App;
