import './App.css';
import { useState } from 'react';

function App() {

  const [phone, setPhone] = useState(5555555555)

  const handleChange = (e) => {
    setPhone(e.target.value)
  }
  return (
    <div className="App">
      <input type="range" min="1111111111" value={phone} onChange={(e) => handleChange(e)}max="9999999999" />
      <span>({phone.toString().slice(0,3)})</span>
      <span>-{phone.toString().slice(3,6)}</span>
      <span>-{phone.toString().slice(7)}</span>
    </div>
  );
}

export default App;
