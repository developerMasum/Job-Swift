import React from "react";

const BannerCompany = () => {
  const partnerCompanies = [
    {
      name: "Postmates",
      website: "https://www.postmates.com/",
      logoUrl:
        "https://www.bamboohr.com/assets/partner-logos/postmates.svg?width=250&format=webply&optimize=medium",
    },
    {
      name: "UserTesting",
      website: "https://www.usertesting.com/",
      logoUrl:
        "https://www.bamboohr.com/assets/partner-logos/usertesting.svg?width=250&format=webply&optimize=medium",
    },
    {
      name: "SoundCloud",
      website: "https://soundcloud.com/",
      logoUrl:
        "https://www.bamboohr.com/assets/partner-logos/soundcloud.svg?width=250&format=webply&optimize=medium",
    },
    {
      name: "ZipRecruiter",
      website: "https://www.ziprecruiter.com/",
      logoUrl:
        "https://www.bamboohr.com/assets/partner-logos/ziprecruiter.svg?width=250&format=webply&optimize=medium",
    },
    {
      name: "Jacksonville Jaguars",
      website: "https://www.jaguars.com/",
      logoUrl:
        "https://www.bamboohr.com/assets/partner-logos/jacksonville-jaguars.svg?width=250&format=webply&optimize=medium",
    },
    {
      name: "Change.org",
      website: "https://www.change.org/",
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
          Explore the companies that trust us to simplify their HR and hiring processes.
        </p>
        <div className="md:flex gap-10">
          {partnerCompanies.map((company, index) => (
            <div
              key={index}
              className="bg-white p-6 border-[1px] rounded-lg hover:bg-cyan-50 hover:text-cyan-500 transition duration-300 ease-in-out"
            >
              <img
                src={company.logoUrl}
                alt={company.name}
                className="w-36 h-36 mx-auto mb-4"
              />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerCompany;
