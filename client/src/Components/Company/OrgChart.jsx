import React from 'react';
import orgChart from "../../assets/Image/OrgChart.png";
import { FaPlaneDeparture } from "react-icons/fa";



const OrgChart = () => {
    return (
      <div className="my-48">
        <div>
          <div className="flex">
            <h3 className="text-4xl font-semibold mr-4">Organization chart</h3>
            <button className="btn btn-success">
              <FaPlaneDeparture size={16} />
              <span>BETA</span>
            </button>
          </div>
        </div>
        {/* Body */}
        <div className="flex justify-center items-center mt-24">
          <div className="text-center">
            <img className="mx-auto" src={orgChart} alt="OrgChart" />
            <h6 className="text-2xl my-4">
              View your company's employees in an organisation chart
            </h6>
            <p className="mb-4">
              Go to the <a href='#' className='text-blue-400 btn-link mx-1'>Company Directory</a> to add employees and build your org chart.
            </p>
          </div>
        </div>
      </div>
    );
};

export default OrgChart;