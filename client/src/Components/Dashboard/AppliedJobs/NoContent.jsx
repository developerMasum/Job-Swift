import React from "react";


const NoContent = () => {
  return (
    <div className="pt-10">
      <img className="mx-auto" src="https://i.ibb.co/Jp5jrt5/applied.png" alt="" />
      <h6 className="text-swift text-base pt-3 font-medium">
        No candidates exist in this stage
      </h6>
      <p className="font-thin text-sm">
        Pick another pipeline stage to review candidates' applications.
      </p>
    </div>
  );
};

export default NoContent;
