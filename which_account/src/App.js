import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import Accounts from './Components/Accounts/Accounts';
import { useState } from 'react';

function App() {

  const [possible, setPossible] = useState([])

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

  const handleLogin = (e, pass) => {
    e.preventDefault();
    let possibleAccounts = accounts.filter((element) => element.password === pass)
    setPossible(possibleAccounts);
    setView("accounts");
    return possibleAccounts;
  }

  const [view, setView] = useState("login");

  return (
    <div className="App">
      {view === "login" && <Login accounts={accounts} handleLogin={handleLogin} />}
      {view === "accounts" && <Accounts accounts={possible} />}
    </div>
  );
}

export default App;
