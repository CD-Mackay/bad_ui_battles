import React from "react";
import "./MorseChart.css";

const MorseChart = ({ data }) => {
  return (
    <div className="morse-chart">
      {data.map((element, index) => {
        return (
          <span className="morse-chart-element" key={index}>
            {element[0]}<strong>{element[1]}</strong>
          </span>
        );
      })}
    </div>
  );
};

export default MorseChart;
