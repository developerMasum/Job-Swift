import React from "react";
import ProgressCards from "./ProgressCards";
import DownloadDashboard from "./DownloadDashboard";
import AdminLineChart from "./Charts/AdminLineChart";
import TopCompanyTable from "./TopCompanyTable";
import GeographyChart from "./Charts/GeographyChart";
import AdminPieChart from "./Charts/AdminPieChart";
// import GeographyChart from "./Charts/GeographyChart";

const HomeAdmin = () => {
  return (
    <div className=" pl-2 md:lg:pl-48 pt-16">
      <DownloadDashboard />

      <ProgressCards />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mt-12 w-full">
  <div className="md:col-span-1 xl:col-span-2">
    <AdminLineChart />
  </div>
  <div className="md:col-span-1 xl:col-span-2">
    <TopCompanyTable />
  </div>
  <div className="md:col-span-1 xl:col-span-2">
    <GeographyChart />
  </div>
  <div className="md:col-span-1 xl:col-span-2">
    <AdminPieChart />
  </div>
</div>

    </div>
  );
};

export default HomeAdmin;
