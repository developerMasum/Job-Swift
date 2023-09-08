import React from "react";
import { Zoom, Fade } from "react-awesome-reveal";
import Lottie from "lottie-react";
import lottie from "../../../assets/login/animation_lmae0zqo.json";
const Banner = () => {
  return (
    <div>
      <div className="bg-[#e7ecf1]">
        <div className="md:flex items-center md:mx-40 mx-3 gap-5 py-10">
          <div className="md:pt-5">
            <Fade cascade damping={0.1}>
              <h2 className="text-3xl font-sans  font-black text-cyan-700">
                {" "}
                HR, Payroll, Benefits. The Complete HR Software.
              </h2>
              <p className="my-5 text-2xl text-[#404347]">
                Simplify HR with award-winning solutions for everything from hire
                to retire.
              </p>
              <div className="form-control">
                <label className="input-group md:mb-0 mb-5">
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="input input-bordered rounded-full"
                  />
                  <span className="bg-cyan-700 text-white md:text-[15px] text-[10px]">
                    Get My Free Demo
                  </span>
                </label>
                {/* <label className='text-[#99292e]'>Please enter an email address.</label> */}
              </div>
            </Fade>
          </div>
          <Zoom>
            <div>
              {/* <Lottie animationData={lottie} loop={true} /> */}
              <img
                className=""
                src="https://www.bamboohr.com/media_1696a7c6e712d8189262ac2a9d4e0ba3ff0b737be.png?width=2000&format=webply&optimize=medium"
                alt=""
              />
            </div>
          </Zoom>
        </div>

      </div>
      {/* <div className='bg-[#F7FFE5] py-20 rounded-bl-[600px] rounded-br-[300px]'></div> */}
    </div>
  );
};

export default Banner;
