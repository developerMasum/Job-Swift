import PaySection from "../../Components/Home/PaySection";
import HrPlatform from "../../Components/Home/HrPlatform";
import EmployeeExperience from "../../Components/Home/EmployeeExperience";
import HeadlineBar from "../Shared/HeadlineBar";
import MarketPlaceIntegrate from "../../Components/Home/MarketPlaceIntegrate/MarketPlaceIntegate";
import Hiring from "../../Components/Home/Hiring/Hiring";
import Banner from "../../Components/Home/Banner/Banner";
import Slider from "../../Components/Home/Slider/Slider";
// import HrData from "../../Components/Home/MarketPlaceIntegrate/HrData";

import { Fade, Slide, Zoom } from "react-awesome-reveal";

// import NewBanner from "../../Components/Test/NewBanner";
// import HRPlatform from "../../Components/Test/HRPlatform";
import EmployeeExperienceSection from "../../Components/Test/EmployeeExperienceSection";

import BannerCompany from "../../Components/Home/Banner/BannerCompany";

// import Company from "../../Components/Company/Company";
import ProgramManager from "../../Components/ProgramManager/ProgramManager";
import GoogleCalender from "../../Components/NewTest/GoogleCalender";

const Home = () => {
  return (
    <div className="pt-5 lg:md:pt-16">
      <Slide>
        <HeadlineBar />
      </Slide>
      <Banner />

      <div>
        <BannerCompany />
      </div>
      <div className="md:px-12">
        <EmployeeExperienceSection></EmployeeExperienceSection>
      </div>
      <GoogleCalender></GoogleCalender>

      <div className="mt-12">
        <ProgramManager />
      </div>
      <Fade>
        <HrPlatform />
      </Fade>
      {/* <NewBanner></NewBanner> */}
      {/* <HRPlatform></HRPlatform> */}

      <div className="md:px-12">
        {/* <div className="mt-12">

          <HrData />

        </div>

        <div className="mt-12">

          <PaySection />

        </div> */}
        <div className="mt-12">
          <Slide>
            <Hiring />{" "}
          </Slide>
        </div>

        <div className="mt-16 mb-5">
          <Slide direction="right">
            {" "}
            <EmployeeExperience />
          </Slide>

          <div className="mt-12 mb-12">
            <Zoom>
              {" "}
              <MarketPlaceIntegrate />
            </Zoom>
          </div>

          {/* slider */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-center text-primary font-sans ">
              Why People Love JobSwift
            </h2>
            <Slider />
          </div>

          {/* Company */}
          {/* <Company /> */}
          {/* Program Manager from Ashik faysal */}
        </div>
      </div>
    </div>
  );
};
export default Home;
