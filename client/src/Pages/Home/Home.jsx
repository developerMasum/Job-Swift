// import PaySection from "../../Components/Home/PaySection";
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

import IntegrationMarketplace from "../../Components/Home/MarketPlaceIntegrate/MarketPlaceIntegate";
import Evaluate from "../../Components/Home/Evaluate/Evaluate";
import KeyFeatures from "../../Components/Home/KeyFeature/Features";

const Home = () => {
  return (
    <div className="">
    
      <Banner />

      <div>
        <BannerCompany />
      </div>
      <div className="md:px-12">
        <EmployeeExperienceSection></EmployeeExperienceSection>
      </div>

      {/* <KeyFeatures></KeyFeatures> */}

      <div className="mt-12">
        <ProgramManager />
      </div>
      {/* <Fade>
        <HrPlatform />
      </Fade> */}
      {/* <NewBanner></NewBanner> */}
      {/* <HRPlatform></HRPlatform> */}

      <div className="md:px-12">
        {/* <div className="mt-12">

          <HrData />

        </div>

        <div className="mt-12">

          <PaySection />

        </div> */}
        {/* <Hiring /> */}

        <div className="mt-16 mb-5">
          <Slide direction="right">
            {" "}
            {/* <EmployeeExperience /> */}
          </Slide>

          {/* <div className="mt-12 mb-12">
            <Zoom>
              {" "}
              <MarketPlaceIntegrate />
            </Zoom>
          </div> */}

          {/* <IntegrationMarketplace></IntegrationMarketplace> */}
          <Evaluate></Evaluate>

          {/* slider */}
          <div className="mt-12">
            <h2 className="md:text-4xl text-2xl mb-12 md:mb-0 font-bold text-center text-teal-700 italic font-sans ">
              Why People Love JobSwift
              <p className="text-sm font-bold text-slate-700 pt-3">best companies employers feedback</p>
            </h2>
            <Slider />
          </div>

          {/* Company */}
          {/* <Company /> */}

          {/* <div className="mt-12">
            
            <SendTextMessage />
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Home;
