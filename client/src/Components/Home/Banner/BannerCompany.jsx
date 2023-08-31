import React from 'react';
import { Roll } from "react-awesome-reveal";

const BannerCompany = () => {
    return (
        <div>
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
    );
};

export default BannerCompany;