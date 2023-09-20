import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

const GeographyChart = () => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      const populationData = response.data.map((country) => [
        country.name.common,
        country.population || 0,
      ]);

      setCountryData([["Country", "Population"], ...populationData]);
    });
  }, []);

  const chartOptions = {
    colorAxis: { colors: ["#348b8e"] }, // Set the color to blue
  };

  return (
    <div className="w-3/4 my-8 ml-20">
    <div>
      <p className="uppercase text-sm font-bold text-cyan-700 pb-3">
        Geography Based User Traffic
      </p>
    </div>
    <div className="relative" style={{ maxHeight: "400px" }}>
      <Chart
        chartType="GeoChart"
        width="100%"
        height="100%"
        data={countryData}
        options={chartOptions} // Pass the chart options here
      />
    </div>
  </div>
  
  );
};

export default GeographyChart;
