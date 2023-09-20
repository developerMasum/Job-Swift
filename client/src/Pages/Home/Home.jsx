import Banner from "../../Components/Home/Banner/Banner";
import { Slide } from "react-awesome-reveal";
import BannerCompany from "../../Components/Home/Banner/BannerCompany";
import ProgramManager from "../../Components/ProgramManager/ProgramManager";
import Evaluate from "../../Components/Home/Evaluate/Evaluate";
import AtsFeature from "../../Components/AtsFeature/AtsFeature";
import Slider from "../../Components/Home/Slider/Slider";

const Home = () => {
  return (
    <div className="">
      <Banner />

      <div>
        <BannerCompany />
      </div>

      <AtsFeature></AtsFeature>

      <div className="mt-12">
        <ProgramManager />
      </div>

      <div className="md:px-12">
        <div className="mt-16 mb-5">
          <Slide direction="right"></Slide>

          <Evaluate></Evaluate>

          {/* slider */}
          <div className="mt-12">
            <h2 className="md:text-4xl text-2xl mb-12 md:mb-0 font-bold text-center text-teal-700  font-sans ">
              Why People Love JobSwift
              <p className="text-sm font-bold text-slate-700 pt-3">
                best companies employers feedback
              </p>
            </h2>
            <Slider></Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
