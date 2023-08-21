import React from "react";

const Overview = () => {
  return (
    <>
      <div className="text-center">
        <h2 className="uppercase my-12 text-green-800 text-5xl">Md Masum</h2>

        <h5 className="text-3xl mb-4">Web Developer</h5>
        <p className="mb-4">Dhaka, Dhaka Division, BangladeshPart time</p>
        <hr className="mb-4 w-full" />
        <div>
          <button className="btn btn-link btn-outline border-none">
            OverView
          </button>
          <button className="btn btn-link btn-outline border-none">
            Application
          </button>
        </div>
      </div>
    </>
  );
};

export default Overview;
