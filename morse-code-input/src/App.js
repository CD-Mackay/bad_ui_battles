import "./App.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [stringFrag, setStringFrag] = useState("");
  const [fullString, setFullString] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showChart, setShowChart] = useState(false);

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

  const convertData = (obj) => {
    let result = [];
    for (let element in obj) {
      result.push([element, obj[element]]);
    }
    return result;
  };

  console.log(JSON.stringify(convertData(morseData)));

  const morseArr = [
    ["0", "-----"],
    ["1", ".----"],
    ["2", "..---"],
    ["3", "...--"],
    ["4", "....-"],
    ["5", "....."],
    ["6", "-...."],
    ["7", "--..."],
    ["8", "---.."],
    ["9", "----."],
    ["a", ".-"],
    ["b", "-..."],
    ["c", "-.-."],
    ["d", "-.."],
    ["e", "."],
    ["f", "..-."],
    ["g", "--."],
    ["h", "...."],
    ["i", ".."],
    ["j", ".---"],
    ["k", "-.-"],
    ["l", ".-.."],
    ["m", "--"],
    ["n", "-."],
    ["o", "---"],
    ["p", ".--."],
    ["q", "--.-"],
    ["r", ".-."],
    ["s", "..."],
    ["t", "-"],
    ["u", "..-"],
    ["v", "...-"],
    ["w", ".--"],
    ["x", "-..-"],
    ["y", "-.--"],
    ["z", "--.."],
    [".", ".-.-.-"],
    [",", "--..--"],
    ["?", "..--.."],
    ["!", "-.-.--"],
    ["-", "-....-"],
    ["/", "-..-."],
    ["@", ".--.-."],
    ["(", "-.--."],
    [")", "-.--.-"],
  ];

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
      <textarea disabled value={fullString}></textarea>
      <div className="button-wrapper">
        <Button
          variant="outline-primary"
          size="sm"
          onClick={() => addCodeFrag(".")}
        >
          .
        </Button>
        <Button
          variant="outline-primary"
          size="sm"
          onClick={() => addCodeFrag("-")}
        >
          -
        </Button>
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
      <Button variant="info" onClick={showChart ? () => setShowChart(false) : () => setShowChart(true)}size="sm">
        Lost?
      </Button>
      {showChart && morseArr.map((element) => {
        return <p>{element[0]}: {element[1]}</p>
      })}
    </div>
  );
}

export default App;
