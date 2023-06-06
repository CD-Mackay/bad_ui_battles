import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';

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

  return (
    <div className="App">
      <Login accounts={accounts} />
    </div>
  );
}

export default App;
