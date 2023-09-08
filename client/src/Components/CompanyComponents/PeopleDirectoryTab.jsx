import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";
import { HiMiniPlay } from "react-icons/hi2";
import images from "../../assets/Image/peopleDirectory.png";
import chiringe from "../../assets/Image/chiringe.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const PeopleDirectoryTab = () => {
  return (
    <div className="pt-8">
      <div className="flex flex-row justify-between   items-center">
        <div className="flex items-center gap-2">
          <h3 className="md:text-3xl text-xl ">People directory</h3>
          <button className="flex bg-[#c7f0f1] px-2 py-1 rounded-full gap-2 items-center">
            <FaPaperPlane color="107191" size={12} />
            <span className="text-swift text-xs font-bold">BETA</span>
          </button>
        </div>
        <button className="bg-[#00756a] hover:bg-[#005f56] md:px-5 px-2 flex items-center gap-2 md:py-2 py-1 rounded-md transition-colors 3s ease-in-out text-white">
          <span>Add Employee</span>
          <IoIosArrowDown />
        </button>
      </div>
      {/* Body */}
      <div className="flex flex-col items-center pt-16 sm:flex-row sm:justify-center sm:items-center sm:mt-8">
        <div className="text-center">
          <img className="mx-auto w-48" src={images} alt="PeopleDirectory" />
          <h6 className=" font-semibold my-4">
            Create a company directory to manage employees
          </h6>
          <p className="mb-4 text-sm font-normal text-swift">
            Click 'Add Employee' to start your company directory.
          </p>

          <div className="bg-gray-200 w-full py-4 mb-4">
            <div className="flex  items-center md:gap-10 gap-3 sm:flex-row sm:justify-evenly sm:items-center">
              <img
                src={chiringe}
                alt="chiringe"
                className="md:w-32 w-10 sm:w-auto"
              />
              <div>
                <h6 className="font-medium text-swift my-4">
                  Upload a CSV list of your employees
                </h6>
                <p className="text-swift   text-sm">
                  Add multiple employees to your directory.
                </p>
              </div>

              <button className="border-[#51c1b5] border md:px-5 px-2 py-1 md:py-2 rounded-xl hover:text-swift font-normal text-swift">
                Upload a CSV
              </button>
            </div>
            <div className="pt-10 flex gap-8">
              <HiOutlineLightBulb color="#598bd4" />
              <p className="text-swift text-sm">
                Not sure what to upload? Download{" "}
                <span className="underline">CSV template</span> and visit our
                <span className="underline">support article</span>.
              </p>
            </div>
            <div className="pt-10 justify-center flex gap-2 items-center">
              <HiMiniPlay color="#598bd4" />
              <h5 className="hover:underline font-semibold text-[#598bd4]">
                {" "}
                Watch introduction video{" "}
              </h5>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleDirectoryTab;
