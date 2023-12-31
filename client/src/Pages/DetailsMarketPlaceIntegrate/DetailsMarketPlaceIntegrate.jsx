import React from "react";

import SearchField from "../../Components/DetailsMarketPlace/SearchField";
import Solutions from "../../Components/DetailsMarketPlace/Solutions";
import "./DetailsMarketPlaceIntegrate.css";
import bgImage from "../../assets/Image/backgroundImage01.svg";
import PreferredApps from "../../Components/DetailsMarketPlace/PreferredApps";
import ExclusiveOffers from "../../Components/DetailsMarketPlace/ExclusiveOffers";
import FreeApp from "../../Components/DetailsMarketPlace/FreeApp";
import Integration from "../../Components/DetailsMarketPlace/Integration";

const DetailsMarketPlaceIntegrate = () => {
  return (
    <>
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="w-full">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center py-16">
              <h1 className="text-2xl md:text-4xl font-extrabold text-white">
                JobSwift Marketplace
              </h1>
              <p className="text-lg text-white mt-4">
                Enjoy BambooHR even more with integrations that add value,
                streamline your work, and create a tailor-made experience.
              </p>
              <div className="mt-8">
                <img src="https://i.ibb.co/xzB4FRc/media-Image.webp" alt="mediaImage" className="shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SearchField />
      <Solutions />
      <PreferredApps></PreferredApps>
      <ExclusiveOffers></ExclusiveOffers>
      <FreeApp></FreeApp>
      <Integration></Integration>
    </>
  );
};

export default DetailsMarketPlaceIntegrate;
