import { useState } from "react";
import "./App.css";
import { ChromePicker } from "react-color";
import { showMonth, showYear } from "./helpers/helpers";

function App() {
  const [color, setColor] = useState({ r: 0, g: 0, b: 0 });
  const [date, setDate] = useState({ day: 0, month: 0, year: 0 });

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
    <div className="App">
      <ChromePicker onChangeComplete={handleChangeColor} color={color} />
      <h6>Please enter your birthday</h6>
      <div className="wrapper">
        <div className="input-wrapper">
          <label htmlFor="day">day</label>
          <input
            type="number"
            disabled={true}
            value={date.day.toString().slice(0, 2)}
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
      {checkValidDate() && 
      <p>You have selected: {showMonth(Number(date.month.toString().slice(0, 2)))} {date.day}, 19{showYear(date.year)} </p>
      }
    </div>
  );
}

export default App;
