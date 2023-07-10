import { useState } from "react";
import "./App.css";
import { ChromePicker } from "react-color";
import { showMonth, showYear } from "./helpers/helpers";

function App() {
  const [color, setColor] = useState({ r: 0, g: 0, b: 0 });
  const [date, setDate] = useState({ day: 0, month: 0, year: 0 });
  const [showPicker, setShowPicker] = useState(false);

  const handleChangeColor = (colour) => {
    setColor({ r: colour.rgb.r, g: colour.rgb.g, b: colour.rgb.b });
    setDate({ day: colour.rgb.r, month: colour.rgb.g, year: colour.rgb.b });
  };

  const checkValidDate = () => {
    const { day, month } = date;
    if (Number(day.toString().slice(0, 2)) > 31) {
      return false;
    }
    if (Number(month.toString().slice(0, 2)) > 12) {
      return false;
    }
    return true;
  };
  return (
    <div className="App" style={{backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`}}>
      <div className="page-wrapper">
        <h1>Please enter your birthday</h1>
        <p>Use the input below to enter your date of birth</p>
        <button onClick={() => setShowPicker(showPicker ? false : true)}>
          {showPicker ? "Hide input" : "Show Input"}
        </button>
        {showPicker && (
          <ChromePicker onChange={handleChangeColor} color={color} />
        )}
        <br></br>
        <div className="wrapper">
          <div className="input-wrapper">
            <label htmlFor="day">day</label>
            <input
              type="number"
              disabled={true}
              value={date.day.toString().slice(0, 1)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="month">month</label>

            <input
              type="number"
              disabled={true}
              value={date.month.toString().slice(0, 2)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="year">year</label>

            <input
              type="number"
              disabled={true}
              value={date.year.toString().slice(0, 2)}
            />
          </div>
        </div>
        {!checkValidDate() && <p>Invalid date</p>}
        {checkValidDate() && (
          <p>
            You have selected:{" "}
            {showMonth(Number(date.month.toString().slice(0, 2)))} {date.day.toString().slice(0,2)},
            19
            {showYear(date.year)}
          </p>
        )}
        <button disabled={!checkValidDate()}>Confirm Birthday</button>
      </div>
    </div>
  );
}

export default App;
