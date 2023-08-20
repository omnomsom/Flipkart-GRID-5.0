import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Men", 2],
  ["Women", 7],
  ["Others", 1],
];

const options = {
  colors: ["#047BD5", "#F7A200", "#F8E831"], // Add more colors as needed
  legend: {
    position: "right", // Position the legend on the right side
    alignment: "center", // Align the legend items to the center
  },
  chartArea: {
    width: "80%", // Adjust the chart area width
    height: "80%", // Adjust the chart area height
  },
};

const GenderDemographicsChart = () => {
  return (
    <div className="w-11/12 h-5/6 flex flex-col items-center justify-center">
      <Chart  
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"100%"}
      />
       <p className="text-sm mt--5 mb-2">Gender Distribution</p>
    </div>
  );
};

export default GenderDemographicsChart;