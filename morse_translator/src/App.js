import './App.css';
import TextInput from './Components/TextInput/TextInput';
import { useState } from 'react';

function App() {

  const [textData, setTextData] = useState("");
  const [output, setOutPut] = useState("")

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

  const translate = () => {
    // turn string into array of arrays
    let string = textData;
    let array = string.split(" ");
    let finalArr = []
    for (let element of array) {
      let newEl = element.split("")
      finalArr.push(newEl)
    }
    let morseArr = [];
    for (let element of finalArr) {
      let subArr = []
      for (let character of element) {
        let morseChar = morseData[character]
        subArr.push(morseChar)
      } morseArr.push(subArr)
    }
    // convert each subarray character into morse
    let final = []
    for (let element of morseArr) {
      let newEl = element.join('')
      final.push(newEl);
    };
    final = final.join('/');
    setOutPut(final);
  }
  return (
    <div className="App">
      <TextInput textData={textData} handleTextInput={handleTextInput} />
      <button onClick={translate}>translate!</button>
      <p>{output}</p>
    </div>
  );
}

export default App;
