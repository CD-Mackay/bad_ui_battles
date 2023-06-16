import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleChange = () => {
    inputArr.sort(() => (Math.random() > 0.5 ? 1 : -1));
    console.log(inputArr);
  };

  const inputArr = [
    <input type="text" placeholder="1" onChange={handleChange} key={1} />,
    <input type="password" placeholder="2" onChange={handleChange} key={2} />,
    <input type="password" placeholder="3" onChange={handleChange} key={3} />,
  ];

  return (
    <div className="App">
      <form className="login-form">
        {inputArr.map((element) => {
          return element;
        })}
      </form>
    </div>
  );
}

export default App;
