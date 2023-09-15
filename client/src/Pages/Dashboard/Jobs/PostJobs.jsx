import React, { useContext, useState } from "react";
import { MdClear, MdKeyboardArrowDown, MdStar } from "react-icons/md";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import { authContext } from "../../../Auth/AuthProvider";

const PostJobs = ({ jobs }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/all-post/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your order has been deleted.", "success");

              window.location.reload();
            }
          });
      }
    });
  };


  return (
    <div
      className="py-8 rounded-lg  lg:md:px-8 px-6 shadow-slate-200 shadow-sm  bg-white mt-5"
      
    >
      <div className="lg:md:flex justify-between ">
        <div className="flex lg:md:gap-2  items-center">
          <MdStar size={25} color="#ffca00" />
          <Link to={`applied-job/${jobs.jobId}`}>
            <h2 className="lg:md:text-xl lg:md:font-medium  hover:underline">
              {jobs?.jobTitleFor}
            </h2>
          </Link>
          
        </div>
        <div className="flex lg:md:gap-2 gap-6 lg:md:mt-0 mt-5">
          <button className="text-swift px-4 py-1 rounded-lg border-gray-600 border">
            <Link to="findCandidates">Find Candidates</Link>
          </button>
          <div className="">
            <button
              onClick={() => setIsVisible(!isVisible)}
              className="text-white flex gap-1 items-center  px-4 py-1 bg-gray-500 hover:bg-gray-600 rounded-lg"
            >
              Used Internally{" "}
              <span>
                <MdKeyboardArrowDown className="w-5 h-5" />{" "}
              </span>
            </button>
            <div className="-ml-56">
              {isVisible && (
                <div
                  className="lg:md:absolute text-sm  text-second mt-2 mx-auto lg:md:w-96 w-60 rounded-lg shadow-lg space-y-2  bg-white"
                  style={{
                    boxShadow:
                      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                  }}
                >
                  <button className="space-y-2  text-start hover:bg-teal-700 hover:text-white  px-3 pt-5 py-3">
                    <Link to={`/overview/${jobs.jobId}`}>
                      <h6 className="font-semibold">Publish</h6>
                      <p>
                        Visible on your careers page and selected free and
                        premium job boards.
                      </p>
                    </Link>
                  </button>

                  <button
                    disabled
                    className="py-3  hover:bg-teal-700 hover:text-white  px-3  space-y-2 text-start "
                  >
                    <Link to={`/editJobs/${jobs.jobId}`}>
                      <h6 className="font-semibold">Use Edit</h6>
                      <p>
                        Editable only by account admins and members of the
                        hiring team. Other account members cannot refer
                        candidates or request to join the hiring team
                      </p>
                    </Link>
                  </button>

                  <button
                    onClick={() => handleDelete(jobs.jobId)}
                    className="py-3  hover:bg-teal-700 hover:text-white  px-3  space-y-2 text-start "
                  >
                    <h6 className="font-semibold">Used Delete</h6>
                    <p>
                      Only delete permissions are given to account admins and
                      members of the hiring team. Other account members cannot
                      refer candidates or ask to join the hiring team.
                    </p>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="lg:md:flex pt-7 lg:md:px-10 pe-6 mx-auto pb-5 justify-between grid grid-cols-4 gap-4">
        <div className="font-medium  text-center text-gray-600">
          <p>{jobs?.Sourced}</p> <p>Sourced</p>
        </div>
        <div className="font-medium  text-center text-gray-600">
          <p> {jobs?.Applied} </p> <p>Applied</p>
        </div>
       
        <div className="font-medium text-center text-gray-600">
          <p>{jobs?.Assessment}</p> <p>Assessment</p>
        </div>
        <div className="font-medium text-center text-gray-600">
          <p>{jobs?.Interview}</p> <p>Interview</p>
        </div>
        <div className="font-medium text-center text-gray-600">
          <p>{jobs?.Offer}</p> <p>Offer</p>
        </div>
        <div className="font-medium text-center text-gray-600">
          <p> {jobs?.Hired}</p> <p>Hired</p>
        </div>
      </div>
      <div className="flex  pt-1 justify-between text-gray-600  ">
        <h2 className="flex  gap-2 items-center">
          <span>
            <MdClear className="w-7 h-7" color="red" />
          </span>
          job published in career page
        </h2>
        <div className="lg:md:flex">
          {/* <p>Candidates:{jobs.length}</p> */}
          
        </div>
      </div>
    </div>
  );
};

export default PostJobs;
