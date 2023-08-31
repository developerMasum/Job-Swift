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
// import Overview from "../Components/Overview/Overview";
// import NewForm from "../Components/NewForm/NewForm";



import Overview from "../Components/Overview/Overview";
import Agenda from "../Pages/Dashboard/Agenda/Agenda";
import Company from "../Pages/Dashboard/Company/Company";
import OrgChartTab from "../Components/CompanyComponents/OrgChartTab";

// import PeoPleDirectory from "../Components/Company/PeoPleDirectory";
// import OrgChart from "../Components/Company/OrgChart";
// import Files from "../Components/Company/Files";
// import Onboarding from "../Components/Company/Onboarding";
// import Candidate from "../Components/Dashboard/Candidate/Candidate";
import Candidates from "../Pages/Dashboard/Candidates/Candidates";
import AppliedJobs from "../Pages/Dashboard/AppliedJobs/AppliedJobs";
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
        element: <ForgotPassword></ForgotPassword>,
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
      <PrivateRoute>  <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "jobs",
        element: <Jobs />,
      },
      {
        path: "jobs/post-job",
        element: <PostJob />,
      },
      {
        path: "jobs/applied-job",
        element: <AppliedJobs />,
      },
      {
        path: "report-center",
        element: <ReportCenter />,
      },
      {
        path: "peopleSearch",
        element: <PeopleSearch></PeopleSearch>,
      },
      {
        path: "agenda",
        element: <Agenda />,
      },
      {
        path: "company",
        element: <Company />,
      },
      {
        path: "OrgChartTab",
        element: <OrgChartTab />,
      },{
        path: "candidate",
        element: <Candidates />,
      },
    ],
  },
]);

export default router;
