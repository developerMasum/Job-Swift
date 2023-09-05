import React from "react";
import { IgrGeographicMapModule } from "igniteui-react-maps";
import { IgrDataChartInteractivityModule } from "igniteui-react-charts";
import { IgrGeographicMap } from "igniteui-react-maps";
import * as d3 from "d3";

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

const populationData = [
  { name: "United States", population: 10000000 },
  { name: "Canada", population: 7500000 },
  { name: "Brazil", population: 12000000 },
  { name: "Mexico", population: 5000000 },
  { name: "United Kingdom", population: 9000000 },
  { name: "Germany", population: 6000000 },
  { name: "France", population: 11000000 },
  { name: "Australia", population: 8500000 },
  { name: "India", population: 750000 },
  { name: "China", population: 3000000 },
];

function getColorScale(populationData) {
  const populationValues = populationData.map((entry) => entry.population);
  return d3
    .scaleLinear()
    .domain([0, d3.max(populationValues)])
    .range(["#f0f0f0", "#ff5733"]); // You can adjust the color range as needed
}

const colorScale = getColorScale(populationData);

const GeographyChart = () => {
  return (
    <div className="w-1/2 mx-auto mt-8">
      <IgrGeographicMap
        width="600px"
        height="600px"
        zoomable="true"
        getBrush={(_, item) => {
          const countryName = item.name; // Assuming the map data has a "name" property for countries
          const populationEntry = populationData.find(
            (entry) => entry.name === countryName
          );
          if (populationEntry) {
            const population = populationEntry.population;
            const color = colorScale(population);

            // Apply conditional Tailwind CSS classes based on population
            const tailwindClass =
              population >= 10000000
                ? "bg-red-500"
                : population >= 5000000
                ? "bg-yellow-500"
                : "bg-green-500";

            return {
              fill: color,
              className: tailwindClass,
            };
          }
          return { fill: "#f0f0f0" }; // Default color and no class for countries not in the population data
        }}
      />
    </div>
  );
};

export default GeographyChart;
