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
import CurrentPipelineReport from "../Pages/Dashboard/Report/CurrentPipelineReport";
import CandidiateBreakdownReport from "../Pages/Dashboard/Report/CandidiateBreakdownReport";
import ActivityReport from "../Pages/Dashboard/Report/ActivityReport";
import CandidateSource from "../Pages/Dashboard/Report/CandidateSource";
import HiringVelocity from "../Pages/Dashboard/Report/HiringVelocity";
import ProductivityReport from "../Pages/Dashboard/Report/ProductivityReport";
import HistoricPipeline from "../Pages/Dashboard/Report/HistoricPipeline";
import CandidiateFlow from "../Pages/Dashboard/Report/CandidiateFlow";
import TimeToHire from "../Pages/Dashboard/Report/TimeToHire";



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


    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute> <DashboardLayout /> </PrivateRoute>,
    children: [

      {
        path: "jobs",
        element: <Jobs />,
      },
      {
        path: 'jobs/post-job',
        element: <PostJob />
      },
      {
        path: 'report-center',
        element: <ReportCenter />

      },
      {
        path: 'peopleSearch',
        element: <PeopleSearch></PeopleSearch>
      },

      {
        path: 'report-center/current-pipeline',
        element: <CurrentPipelineReport></CurrentPipelineReport>

      },
      {
        path: 'report-center/candidiate-breakdown',
        element: <CandidiateBreakdownReport></CandidiateBreakdownReport>

      },
      {
        path: 'report-center/activity-report',
        element: <ActivityReport></ActivityReport>

      },
      {
        path: 'report-center/candidiate-flow',
        element: <CandidiateFlow></CandidiateFlow>

      },

      {
        path: 'report-center/candidiate-source',
        element: <CandidateSource></CandidateSource>

      },
      {
        path: 'report-center/hiring-velocity',
        element: <HiringVelocity></HiringVelocity>

      },
      {
        path: 'report-center/time-to-hire',
        element: <TimeToHire></TimeToHire>

      },
      {
        path: 'report-center/productivity-report',
        element: <ProductivityReport></ProductivityReport>

      },
      {
        path: 'report-center/historic-pipeline',
        element: <HistoricPipeline></HistoricPipeline>

      },
    ],
  },
]);

export default router;
