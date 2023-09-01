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
import CurrentPipelineReport from "../Pages/Dashboard/Report/CurrentPipelineReport";
import CandidiateBreakdownReport from "../Pages/Dashboard/Report/CandidiateBreakdownReport";
import ActivityReport from "../Pages/Dashboard/Report/ActivityReport";
import FindCandidates from "../Pages/Dashboard/Jobs/FindCandidates/FindCandidates/FindCandidates";
import FindCandidatesLayout from "../Pages/Dashboard/Jobs/FindCandidates/FindCandidatesLayout/FindCandidatesLayout";
import Teammembers from "../Pages/Dashboard/Jobs/Teammembers/Teammembers";
import ApplicationForm from "../Pages/Dashboard/Jobs/ApplicationForm/ApplicationForm";
import WorkFlow from "../Pages/Dashboard/Jobs/WorkFlow/WorkFlow";
import JobsDetails from "../Pages/Dashboard/Jobs/JobsDetails/JobsDetails";
import CandidateSource from "../Pages/Dashboard/Report/CandidateSource";
import HiringVelocity from "../Pages/Dashboard/Report/HiringVelocity";
import ProductivityReport from "../Pages/Dashboard/Report/ProductivityReport";
import HistoricPipeline from "../Pages/Dashboard/Report/HistoricPipeline";
import CandidiateFlow from "../Pages/Dashboard/Report/CandidiateFlow";
import TimeToHire from "../Pages/Dashboard/Report/TimeToHire";

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
import ContactUs from "../Components/ContactUs/ContactUs";
import HomeAdmin from "../Components/AdminDashBoard/HomeAdmin";
import UsersAdmin from "../Components/AdminDashBoard/UsersAdmin";
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
        path: "/contact-us",
        element: <ContactUs />,
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
      </PrivateRoute>
    ),
    children: [
      {
        path: "jobs",
        element: <Jobs />,
      },
      {
        path: "admin/dashboard",
        element: <HomeAdmin />,
      },
      {
        path: "admin/users",
        element: <UsersAdmin />,
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
        path: "jobs/findCandidates",
        element: <FindCandidatesLayout></FindCandidatesLayout>,
        children: [
          {
            path: "teamMembers",
            element: <Teammembers></Teammembers>,
          },
          {
            path: "candidates",
            element: <FindCandidates></FindCandidates>,
          },
          {
            path: "applicationForm",
            element: <ApplicationForm></ApplicationForm>,
          },

          {
            path: "workFlow",
            element: <WorkFlow></WorkFlow>,
          },
          {
            path: "jobDetails",
            element: <JobsDetails></JobsDetails>,
          },
        ],
      },
      {
        path: "report-center",
        element: <ReportCenter />,
      },

      {
        path: "report-center/current-pipeline",
        element: <CurrentPipelineReport></CurrentPipelineReport>,
      },
      {
        path: "report-center/candidiate-breakdown",
        element: <CandidiateBreakdownReport></CandidiateBreakdownReport>,
      },
      {
        path: "report-center/activity-report",
        element: <ActivityReport></ActivityReport>,
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
      },
      {
        path: "candidate",
        element: <Candidates />,
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
