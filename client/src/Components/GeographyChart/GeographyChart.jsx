import React, { useEffect, useState } from "react"; // Import React and necessary hooks
import { Chart } from "react-google-charts"; // Import the Chart component from react-google-charts
import axios from "axios"; // Import Axios for making HTTP requests

const GeographyChart = () => {
  const [countryData, setCountryData] = useState([]); // Define state variable for country data

  useEffect(() => {
    // Use the useEffect hook to perform actions when the component mounts

    // Fetch country population data from an API
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      // Handle the response from the API

      // Map the API response data to a format suitable for the chart
      const populationData = response.data.map((country) => [
        country.name.common, // Country name
        country.population || 0, // Population (default to 0 if not available)
      ]);

      // Set the countryData state with the formatted data
      setCountryData([["Country", "Population"], ...populationData]);
    });
  }, []); // The empty dependency array [] means this effect runs once, when the component mounts

  return (
    <div className="w-full h-96">
      <Chart
        chartType="GeoChart" // Set the chart type to GeoChart
        width="100%"
        height="400px"
        data={countryData} // Provide the data to be displayed on the chart
      />
    </div>
  );
};

export default GeographyChart;
