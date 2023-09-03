import React from "react";
import ProgressCards from "./ProgressCards";
import DownloadDashboard from "./DownloadDashboard";
import AdminLineChart from "./Charts/AdminLineChart";
import TopCompanyTable from "./TopCompanyTable";

const HomeAdmin = () => {
  return (
    <div className="md:lg:pl-40 pt-16">
      <DownloadDashboard />

      <ProgressCards />
      <div className="grid grid-cols-1 md:lg:grid-cols-2 gap-12 mt-12 w-full  ">
     <div  > <AdminLineChart /> </div>
     <div  > <TopCompanyTable /></div>
      </div>
    </div>
  );
};

export default HomeAdmin;
