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
import CandidateProfile from "../Components/Dashboard/Candidate/CandidateProfile";
import AdminRoute from "./AdminRoute";
import ProfileSettings from "../Components/Dashboard/UserSettings/ProfileSettings";
import CandidiateUserDetails from "../Pages/Dashboard/Candidates/CandidiateUserDetails";

import CandidiateFlow from "../Pages/Dashboard/Report/CandidiateFlow";
import EditJobs from "../Pages/Dashboard/Jobs/EditJobs/EditJobs";
import Blogs from "../Components/Blogs/Blogs";
import BlogDetails from "../Components/Blogs/BlogDetails";
import EmailUs from "../Pages/Dashboard/EmailUs/EmailUs";
import TermsAndConditions from "../Pages/TermsAndConditions/TermsAndConditions";
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
        path: "/demo-page",
        element: <DemoPage></DemoPage>,
      },

      {
        path: "/details-marketplace",
        element: <DetailsMarketPlaceIntegrate />,
      },
      {
        path: "/employee-experience",
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
        path: "/terms",
        element: <TermsAndConditions />,
      },
      {
        path: "/login/forgotPassword",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "/register",
        element: <SignIn />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/overview/:id",
        element: <Overview />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/job_post/${params.id}`),
      },
      {
        path: "/editJobs/:id",
        element: <EditJobs />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/all-post/${params.id}`),
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
        element: (
          <AdminRoute>
            <HomeAdmin />
          </AdminRoute>
        ),
      },
      {
        path: "admin/users",
        element: (
          <AdminRoute>
            <UsersAdmin />
          </AdminRoute>
        ),
      },
      {
        path: "jobs/post-job",
        element: <PostJob />,
      },
      {
        path: "jobs/applied-job/:id",
        element: <AppliedJobs />,

        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/all-post/${params.id}`),
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
        path: "inbox-email",
        element: <EmailUs />,
      },
      {
        path: "candidate/profile/:id",
        element: <CandidiateUserDetails />,
        // loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
      },
      {
        path: "settings/profile",
        element: <ProfileSettings />,
      },

      {
        path: "report-center/candidiate-flow",
        element: <CandidiateFlow></CandidiateFlow>,
      },

      {
        path: "report-center/candidiate-source",
        element: <CandidateSource></CandidateSource>,
      },
      {
        path: "report-center/hiring-velocity",
        element: <HiringVelocity></HiringVelocity>,
      },
      {
        path: "report-center/time-to-hire",
        element: <TimeToHire></TimeToHire>,
      },
      {
        path: "report-center/productivity-report",
        element: <ProductivityReport></ProductivityReport>,
      },
      {
        path: "report-center/historic-pipeline",
        element: <HistoricPipeline></HistoricPipeline>,
      },
    ],
  },
]);

export default router;
