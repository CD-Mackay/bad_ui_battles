import "./App.css";
import { useState } from "react";

function App() {
  const [phone, setPhone] = useState(5555555555);

  const handleChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div className="App">
      <h4>Please Input your phone number to proceed</h4>
      <input
        id="slider"
        type="range"
        min="1111111111"
        value={phone}
        onChange={(e) => handleChange(e)}
        max="9999999999"
      />
      <div className="span-wrapper">
        <span>({phone.toString().slice(0, 3)})</span>
        <span>-{phone.toString().slice(3, 6)}</span>
        <span>-{phone.toString().slice(7)}</span>
      </div>
    </div>
  );
}

export default App;
