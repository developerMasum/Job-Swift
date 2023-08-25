import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DemoPage from "../Pages/DemoPage/DemoPage";
import DetailsMarketPlaceIntegrate from "../Pages/DetailsMarketPlaceIntegrate/DetailsMarketPlaceIntegrate";
import EmployeePerformance from "../Pages/EmployeePerformance/EmployeePerformance";
import LearnMoreHrDataReporting from "../Pages/LearnMoreHrDataReporting/LearnMoreHrDataReporting";
import PayrollTimeBenefits from "../Pages/PayrollTimeBenefits/PayrollTimeBenefits";
import HiringOnboarding from "../Components/HiringOnboarding/HiringOnboarding";
import DashboardLayout from "../Layouts/DashboardLayout";
import LogIn from "../Pages/Auth/LogIn";
import SignIn from "../Pages/Auth/SignIn";
import Jobs from "../Pages/Dashboard/Jobs/Jobs";
import { PostJob } from "../Pages/Dashboard/PostJob/PostJob";
import ReportCenter from "../Components/ReportCenter/ReportCenter";
import PrivateRoute from "./PrivateRoute";
import PeopleSearch from "../Pages/Dashboard/PeopleSearch/PeopleSearch";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";


import Overview from "../Components/Overview/Overview";
import Agenda from "../Pages/Dashboard/Agenda/Agenda";
import PeoPleDirectory from "../Components/CompanyCompo/PeoPleDirectory";
import OrgChart from "../Components/CompanyCompo/OrgChart";
import Files from "../Components/CompanyCompo/Files";
import Onboarding from "../Components/CompanyCompo/Onboarding";
import Company from "../Pages/Dashboard/Company/Company";
// import Company from "../Components/Company/Company";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "demo-page",
        element: <DemoPage></DemoPage>,
      },

      {
        path: "/details-marketplace",
        element: <DetailsMarketPlaceIntegrate />,
      },
      {
        path: "employee-experience",
        element: <EmployeePerformance></EmployeePerformance>,
      },
      {
        path: "/hr-data",
        element: <LearnMoreHrDataReporting></LearnMoreHrDataReporting>,
      },
      {
        path: "/single-pay",
        element: <PayrollTimeBenefits />,
      },
      {
        path: "/hiring",
        element: <HiringOnboarding></HiringOnboarding>,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "login/forgotPassword",
        element: <ForgotPassword></ForgotPassword>
      },
      {
        path: "/register",
        element: <SignIn />,
      },
      {
        path: "/overview",
        element: <Overview />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
       
        <DashboardLayout />
       
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path:"jobs",
        element:<Jobs />,
      },
      {
        path:'jobs/post-job',
        element:<PostJob />
      },
      {
        path:'report-center',
        element: <ReportCenter />
        
      },
      {
        path:'peopleSearch',
        element:  <PeopleSearch></PeopleSearch>
      },
      {
        path: "agenda",
        element: <Agenda />,
      }
      
    ],
  },
]);

export default router;
