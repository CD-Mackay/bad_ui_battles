import { useState } from "react";
import "./App.css";
import { ChromePicker } from "react-color";

function App() {
  const [color, setColor] = useState({ r: 0, g: 0, b: 0 });
  const [date, setDate] = useState({ day: 0, month: 0, year: 0 });

  const handleChangeColor = (colour) => {
    setColor({ r: colour.rgb.r, g: colour.rgb.g, b: colour.rgb.b });
    setDate({ day: colour.rgb.r, month: colour.rgb.g, year: colour.rgb.b });
  };
  return (
    <div className="App">
      <ChromePicker onChangeComplete={handleChangeColor} color={color} />
      <p>{color.r.toString().slice(0, 2)}</p>
      <p>{color.g.toString().slice(0, 2)}</p>
      <p>{color.b.toString().slice(0, 2)}</p>
    </div>
  );
}

export default App;
