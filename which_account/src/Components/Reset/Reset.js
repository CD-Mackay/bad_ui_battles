import React from "react";
import "./Reset.css";

const Reset = ({setView}) => {
  return (
    <div className="reset">
      <input type="password" placeholder="new password"></input>
      <input type="password" placeholder="new password"></input>
      <button onClick={() => setView("success")}>Reset!</button>
    </div>
  );
};

export default Reset;
