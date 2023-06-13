import "./App.css";
import Login from "./Components/Login/Login";
import Accounts from "./Components/Accounts/Accounts";
import { useState, useRef, useEffect } from "react";
import Reset from "./Components/Reset/Reset";
import handleSubmit from "./handles/handles";
import { firestore } from "./firebase_setup/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";

function App() {
  const [possible, setPossible] = useState([]);

  const dataRef = useRef();

  const [view, setView] = useState("login");
  const [users, setUsers] = useState([]);

  const handleLogin = (e, pass) => {
    e.preventDefault();
    let possibleAccounts = users.filter(
      (element) => element.password === pass
    );
    setPossible(possibleAccounts);
    setView("accounts");
    return possibleAccounts;
  };

  const submithandler = async (e) => {
    e.preventDefault();  
  };

  const getUsers = async () => {
    const data = await getDocs(collection(firestore, "users"));
    let dataList = [];
    data.forEach((element) => dataList.push({data: element.data(), id: element.id}));
    setUsers(dataList);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      {view === "login" && (
        <Login accounts={users} handleLogin={handleLogin} />
      )}
      {view === "accounts" && (
        <Accounts
          accounts={possible}
          allAccounts={users}
          setView={setView}
        />
      )}
      {view === "success" && <h2>You are now logged in!</h2>}
      {view === "reset" && <Reset setView={setView} />}
    </div>
  );
}

export default App;
