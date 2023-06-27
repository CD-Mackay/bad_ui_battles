import './App.css';
import { useState } from 'react';

function App() {

  const [phone, setPhone] = useState(5555555555)
  return (
    <div className="App">
      <input type="range" min="1111111111" max="9999999999"/>
    </div>
  );
}

export default App;
