import React from "react";
import Marquee from "react-fast-marquee";

const BannerCompany = () => {
  const partnerCompaniesTwo = [
    {
      logoUrl:
        "https://i.ibb.co/T2TdrMX/company-01.jpg",
    },
    {
      logoUrl:
        "https://i.ibb.co/NmGFmw2/company-02.jpg",
    },
    {
      logoUrl:
        "https://i.ibb.co/QFsJL81/company-03.jpg",
    },
    {
      logoUrl:
      "https://i.ibb.co/xJpLnhC/company-04.jpg",
    },
    {
      logoUrl:
        "https://i.ibb.co/PtngFWX/company-05.jpg",
    },
    {
      logoUrl:
        "https://i.ibb.co/k0hfQzn/company-06.jpg",
    },
    {
      logoUrl:
        "https://i.ibb.co/z5qxpdQ/company-07.jpg",
    },
    {
      logoUrl:
        "https://i.ibb.co/0Mx3j8p/company-08.jpg",
    },
  ];
  const partnerCompaniesOne = [

    {
      logoUrl:
      "https://i.ibb.co/xJpLnhC/company-04.jpg",
    },
    {
      logoUrl:
        "https://www.bamboohr.com/assets/partner-logos/postmates.svg?width=250&format=webply&optimize=medium",
    },
    {
      logoUrl:
        "https://www.bamboohr.com/assets/partner-logos/usertesting.svg?width=250&format=webply&optimize=medium",
    },
    {
      logoUrl:
        "https://www.bamboohr.com/assets/partner-logos/soundcloud.svg?width=250&format=webply&optimize=medium",
    },
    {
      logoUrl:
        "https://www.bamboohr.com/assets/partner-logos/ziprecruiter.svg?width=250&format=webply&optimize=medium",
    },
    {
      logoUrl:
        "https://www.bamboohr.com/assets/partner-logos/jacksonville-jaguars.svg?width=250&format=webply&optimize=medium",
    },
    {
      logoUrl:
        "https://www.bamboohr.com/assets/partner-logos/change-org.svg?width=250&format=webply&optimize=medium",
    },
  ];

  return (
    <div className="bg-white py-16 text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-teal-700 italic">
          Trusted by 30,000+ Companies
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore the companies that trust us to simplify their HR and hiring
          processes.
        </p>
        <div className="md:flex">
         
        </div>
        <div className="md:flex mt-4">
        <Marquee speed={60} gradient={true} pauseOnHover={true}>
        {partnerCompaniesTwo.map((company, index) => (
            <div
              key={index}
              className="bg-white p-4 h-[200px] border-[.5px] border-gray-300 w-[280px] rounded-md hover:bg-cyan-50 hover:text-cyan-500 transition duration-300 ease-in-out"
            >
              <img
                src={company.logoUrl}
                alt={company.name}
                className="w-36 h-36 mx-auto mb-4"
              />
            </div>
          ))}
          </Marquee>
        </div>
        <div className="md:flex mt-4">
        <Marquee speed={60} gradient={true} pauseOnHover={true} direction="right">
        {partnerCompaniesOne.map((company, index) => (
            <div
              key={index}
              className="bg-white p-4 border-[.5px] h-[200px] border-gray-300 w-[280px] rounded-md hover:bg-cyan-50 hover:text-cyan-500 transition duration-300 ease-in-out"
            >
              <img
                src={company.logoUrl}
                alt={company.name}
                className="w-36 h-36 mx-auto mb-4"
              />
            </div>
          ))}
          </Marquee>
        </div>

       



      </div>
    </div>
  );
};

export default BannerCompany;
