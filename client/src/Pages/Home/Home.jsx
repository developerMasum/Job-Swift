import PaySection from "../../Components/Home/PaySection";
import HrPlatform from "../../Components/Home/HrPlatform";
import EmployeeExperience from "../../Components/Home/EmployeeExperience";
import HeadlineBar from "../Shared/HeadlineBar";
import MarketPlaceIntegrate from "../../Components/Home/MarketPlaceIntegrate/MarketPlaceIntegate";
import Hiring from "../../Components/Home/Hiring/Hiring";
import Banner from "../../Components/Home/Banner/Banner";
import Slider from "../../Components/Home/Slider/Slider";
import HrData from "../../Components/Home/MarketPlaceIntegrate/HrData";
import Register from "../Auth/Register";

const Home = () => {
  return (
    <div className="">
      {/* pt-5 lg:md:pt-16 */}
      <HeadlineBar />
      <Banner />
  <Fade  >
  <HrPlatform />
  </Fade>

     <div className="md:px-12">
     <div className="mt-12">
      <JackInTheBox> 
        <HrData />
        </JackInTheBox>
      </div>

      <div className="mt-12">
      <JackInTheBox><PaySection /></JackInTheBox>
      </div>
      <div className="mt-12">
        <Slide  >  <Hiring />   </Slide>
       
      </div>

      <div className="mt-16 mb-5">
       <Slide direction="right" > <EmployeeExperience /></Slide>
      </div>
     </div>
      <div className="mt-12 mb-12">
      <Zoom >  <MarketPlaceIntegrate /></Zoom>
      </div>
      {/* slider */}
      <div className="mt-12">
        <h2 className="text-5xl font-bold text-center text-primary font-sans italic ">
          Why People LOVE JobSwift
        </h2>
        <Slider />
      {/* slider addeed */}
      </div>
      
    </div>
  );
};

export default Home;
