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
      <p>{phone}</p>
    </div>
  );
}

export default App;
