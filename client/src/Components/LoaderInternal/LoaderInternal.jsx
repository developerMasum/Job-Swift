import React from "react";

const LoaderInternal = () => {
  return (
    <div className="fixed mt-64 inset-0 flex items-center justify-center z-50 bg-transparent">
      <div>
        <img
          className="animate-spin"
          src="https://i.ibb.co/7438Qxp/loader.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default LoaderInternal;
