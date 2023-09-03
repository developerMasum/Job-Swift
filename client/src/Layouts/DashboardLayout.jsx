import React, { useContext, useState } from "react";
import Sidebar from "../Pages/Dashboard/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";
const DashboardLayout = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
