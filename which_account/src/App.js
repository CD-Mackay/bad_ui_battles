import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login/Login";
import Accounts from "./Components/Accounts/Accounts";
import { useState, useRef } from "react";
import Reset from "./Components/Reset/Reset";
import handleSubmit from "./handles/handles";

function App() {
  const [possible, setPossible] = useState([]);

  const accounts = [
    {
      username: "Dennis@paddyspub.com",
      password: "password",
    },
    {
      username: "Charlie@paddyspub.com",
      password: "pass",
    },
    {
      username: "Frank@paddyspub.com",
      password: "pass",
    },
    {
      username: "Dee@paddyspub.com",
      password: "password",
    },
    {
      username: "Mac@paddyspub.com",
      password: "password",
    },
  ];

  const dataRef = useRef();

  const handleLogin = (e, pass) => {
    e.preventDefault();
    let possibleAccounts = accounts.filter(
      (element) => element.password === pass
    );
    setPossible(possibleAccounts);
    setView("accounts");
    return possibleAccounts;
  };

  const [view, setView] = useState("login");

  const submithandler = (e) => {
    e.preventDefault()
    handleSubmit(dataRef.current.value)
    dataRef.current.value = ""
  }

  return (
    <div className="App">
       <form onSubmit={submithandler}>
        <input type= "text" ref={dataRef} />
        <button type = "submit">Save</button>
      </form>
        {view === "login" && (
          <Login accounts={accounts} handleLogin={handleLogin} />
        )}
        {view === "accounts" && (
          <Accounts
            accounts={possible}
            allAccounts={accounts}
            setView={setView}
          />
        )}
        {view === "success" && <h2>You are now logged in!</h2>}
        {view === "reset" && <Reset setView={setView} />}
    </div>
  );
}

export default App;
