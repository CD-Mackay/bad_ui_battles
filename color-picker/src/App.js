import { useState } from "react";
import "./App.css";
import { ChromePicker } from "react-color";

function App() {
  const [color, setColor] = useState("");

  const handleChangeColor = (color) => {
    console.log(color.rgb);
    setColor(color.hex);
  };
  return (
    <div className="App">
      <ChromePicker onChangeComplete={handleChangeColor}
      color={color}
       />
    </div>
  );
}

export default App;
