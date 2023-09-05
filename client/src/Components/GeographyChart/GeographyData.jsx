// GeographyData.js

import React, { useState, useEffect } from "react";
import GeographyChart from "./GeographyChart";

const GeographyData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Define your JSON data directly in this file
    const jsonData = [
      {
        country: "United States",
        area_sq_km: 9372610,
        population: 331002651,
      },
      {
        country: "Canada",
        area_sq_km: 9984670,
        population: 37742154,
      },
      {
        country: "United Kingdom",
        area_sq_km: 242900,
        population: 67886011,
      },
      // Add more data as needed
    ];

    // Set the JSON data to the state
    setData(jsonData);
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        <GeographyChart data={data} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default GeographyData;
