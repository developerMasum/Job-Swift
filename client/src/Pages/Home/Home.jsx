import PaySection from "../../Components/Home/PaySection";
import HrPlatform from "../../Components/Home/HrPlatform";
import EmployeeExperience from "../../Components/Home/EmployeeExperience";
import HeadlineBar from "../Shared/HeadlineBar";
import MarketPlaceIntegrate from "../../Components/Home/MarketPlaceIntegrate/MarketPlaceIntegate";
import Hiring from "../../Components/Home/Hiring/Hiring";
import Banner from "../../Components/Home/Banner/Banner";
import Slider from "../../Components/Home/Slider/Slider";
import HrData from "../../Components/Home/MarketPlaceIntegrate/HrData";
import Overview from "../../Components/Overview/Overview";

const Home = () => {
  return (
    <div className="pt-5 lg:md:pt-16">
      <HeadlineBar />
      <Banner />
      <HrPlatform />
      <div className="md:px-12">
        <div className="mt-12">
          <HrData />
        </div>

        <div className="mt-12">
          <PaySection />
        </div>
        <div className="mt-12">
          <Hiring />
        </div>

        <div className="mt-16 mb-5">
          <EmployeeExperience />
        </div>
      </div>
      <div className="mt-12 mb-12">
        <MarketPlaceIntegrate />
      </div>
      {/* slider */}
      <div className="mt-12">
        <h2 className="text-5xl font-bold text-center text-primary font-sans italic ">
          Why People LOVE JobSwift
        </h2>
        <Slider />
        {/* slider addeed */}
      </div>
{/* From ashik Faysal for Overview check */}
      <div>
        <Overview />
      </div>
    </div>
  );
};

export default Home;
