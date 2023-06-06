import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import { useState } from 'react';

function App() {

  const accounts = [
    {
      username: "Dennis@paddyspub.com",
      password: "password"
    },
    {
      username: "Charlie@paddyspub.com",
      password: "pass"
    },
    {
      username: "Frank@paddyspub.com",
      password: "pass"
    },
    {
      username: "Dee@paddyspub.com",
      password: "password"
    },
    {
      username: "Mac@paddyspub.com",
      password: "password"
    },
  ];

  const [view, setView] = useState("login");

  return (
    <div className="App">
      {view === "login" && <Login accounts={accounts} />}
      {/* {view === "accounts" && <Accounts />} */}
    </div>
  );
}

export default App;
