import React from "react";
import { Zoom, Fade, Roll } from "react-awesome-reveal";

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
              <img
                className=""
                src="https://www.bamboohr.com/media_1696a7c6e712d8189262ac2a9d4e0ba3ff0b737be.png?width=2000&format=webply&optimize=medium"
                alt=""
              />
            </div>
          </Zoom>
        </div>
        <div>
          <h2 className="md:mt-16 px-3 md:px-0 text-[30px] font-black text-center text-[#00673b]">
            30,000+ Companies Big & Small Trust Job Swift
          </h2>
        </div>
        <div className="py-14 md:flex justify-center md:gap-16 grid grid-rows-3 grid-flow-col gap-4 gap-y-5">
          <Roll >
            <img
              src="https://www.bamboohr.com/assets/partner-logos/postmates.svg?width=250&format=webply&optimize=medium"
              alt=""
            />
            <img
              src="https://www.bamboohr.com/assets/partner-logos/usertesting.svg?width=250&format=webply&optimize=medium"
              alt=""
            />
            <img
              src="https://www.bamboohr.com/assets/partner-logos/soundcloud.svg?width=250&format=webply&optimize=medium"
              alt=""
            />
            <img
              src="https://www.bamboohr.com/assets/partner-logos/ziprecruiter.svg?width=250&format=webply&optimize=medium"
              alt=""
            />
            <img
              src="https://www.bamboohr.com/assets/partner-logos/jacksonville-jaguars.svg?width=250&format=webply&optimize=medium"
              alt=""
            />
            <img
              src="https://www.bamboohr.com/assets/partner-logos/change-org.svg?width=250&format=webply&optimize=medium"
              alt=""
            />
          </Roll>
        </div>
      </div>
      {/* <div className='bg-[#F7FFE5] py-20 rounded-bl-[600px] rounded-br-[300px]'></div> */}
    </div>
  );
};

export default Banner;
