import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { renderTabContent } from "../../../Components/CompanyComponents/renderTabContent";

const Company = () => {
  const [activeTab, setActiveTab] = useState("tabs1");
  
  return (

    <div className="pt-20 bg-[#f2f4f6]">
    <div
      className="bg-white px-6 py-8 rounded-md"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.1) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
      }}
    >
      <div>
        <button
          style={{
            borderBottom: activeTab === "tabs1" ? "2px solid gray" : "none",
            color: activeTab === "tabs1" ? "black" : "grey",
          }}
          className="text-sm uppercase pb-2 font-medium"
          onClick={() => {
            setActiveTab("tabs1");
          }}
        >
          People Directory
        </button>
        <button
          className="text-sm uppercase ml-7 pb-2 font-medium"
          style={{
            borderBottom: activeTab === "tabs2" ? "2px solid gray" : "none",
            color: activeTab === "tabs2" ? "black" : "grey",
          }}
          onClick={() => {
            setActiveTab("tabs2");
          }}
        >
          Org Chart
        </button>
        <button
          className="text-sm ml-7 pb-2 font-medium"
          style={{
            borderBottom: activeTab === "tabs3" ? "2px solid gray" : "none",
            color: activeTab === "tabs3" ? "black" : "grey",
          }}
          onClick={() => {
            setActiveTab("tabs3");
          }}
        >
         FILES
        </button>
        <button
          className="text-sm ml-7 uppercase pb-2 font-medium"
          style={{
            borderBottom: activeTab === "tabs4" ? "2px solid gray" : "none",
            color: activeTab === "tabs4" ? "black" : "grey",
          }}
          onClick={() => {
            setActiveTab("tabs4");
          }}
        >
         Onboarding
        </button>
        
      </div>

      <div className="text-center">{renderTabContent(activeTab)}</div>
    </div>
  </div>
  );
};

export default Company;
