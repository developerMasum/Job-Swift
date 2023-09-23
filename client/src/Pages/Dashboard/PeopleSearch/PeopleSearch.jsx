import React, { useContext, useEffect, useRef, useState } from "react";
// import { useForm, SubmitHandler } from "react-hook-form"
import { useForm } from "react-hook-form";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Swal from "sweetalert2";

import {
  BsBookmarkHeart,
  BsBookmarkHeartFill,
  BsCheckLg,
  BsPinAngle,
} from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import PinedSearch from "./PinedSearch";
import { Link } from "react-router-dom";
import { getAllApplications } from "../../../redux/application/api";
import LoaderInternal from "../../../Components/LoaderInternal/LoaderInternal";

const PeopleSearch = () => {
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);
  const [application, setApplication] = useState(null);
  const [search, setSearch] = useState(null);

  // const ref = useRef(null);
  // console.log("Get application", application);
  // console.log("dfghsdjg", bookMark);

  const options = [];

  // Here we can handle bookMark

  const handleBookMark = (
    id,
    location,
    image,
    jobTitle,
    summary,
    email,
    stage
  ) => {
    const singleApplication = {
      id,
      location,
      image,
      jobTitle,
      summary,
      email,
      stage,
    };
    let bookMark = [];

    const previousBookmark = JSON.parse(localStorage.getItem("bookMark"));
    // console.log("working", previousBookmark)

    if (previousBookmark) {
      console.log("Have previousBookmark");
      const isMarked = previousBookmark?.find((pd) => pd?.id == id);
      // console.log(isMarked)
      if (isMarked) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "This job is already bookmark!",
        });
      } else {
        bookMark.push(...previousBookmark, singleApplication);
        localStorage.setItem("bookMark", JSON.stringify(bookMark));
      }
    } else {
      bookMark.push(singleApplication);
      localStorage.setItem("bookMark", JSON.stringify(bookMark));
    }
  };

  const handleRemoveBookMark = (id) => {
    console.log("working", id);
    const previousBookmark = JSON.parse(localStorage.getItem("bookMark"));

    const restOfThem = previousBookmark?.filter((pd) => pd.id != id);
    localStorage.setItem("bookMark", JSON.stringify(restOfThem));
  };

  // const handleAllBookMark = () => {
  //     localStorage.removeItem("bookMark")
  // }

  const checkBookMark = (id) => {
    console.log(id);
    const previousBookmark = JSON.parse(localStorage.getItem("bookMark"));

    const isBookMark = previousBookmark?.find((pd) => pd.id == id);

    if (isBookMark) {
      return true;
    } else {
      return false;
    }
  };

  function handleSelect(event) {
    setValue(event.target.value);
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setLoading(true);
    // Define the URL with the search parameter
    const URL = `http://localhost:5000/all-applications2?search=${search}`;
    
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setApplication(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching application data:", error);
        // Mark loading as complete even on error
      });
  }, [search]); 

  const serchingPeople = (data) => {
    console.log(data.search);
    setSearch(data.search);
  };

  return (
    <div className="pt-20 lg:md:px-24 bg-white px-4">
      <Tabs className="pt-3 ">
        <TabList className={"font-bold flex gap-7 border-b-2"}>
          <Tab className="border-b-2 pb-2 -mb-[2px]">
            <button>SEARCH</button>
          </Tab>
          <Tab className=" border-b-2 pb-2 -mb-[2px]">
            <button>PINNED SEARCHES</button>
          </Tab>
        </TabList>

        {/* tab 1----------------------------- */}
        <TabPanel className={"bg-[#fff]"}>
          <div className="">
            <form
              className="pt-3 "
              ref={ref}
              onSubmit={handleSubmit(serchingPeople)}
            >
              <div className="pt-4">
                <div className="flex justify-between">
                  <h2>Search</h2>

                  <div className="flex lg:md:gap-5 gap-2">
                    <button className="flex justify-center gap-1">
                      <BsPinAngle className="mt-1"></BsPinAngle>
                      <Link
                        to={`/dashboard/pinSearch`}
                        className="text-primary"
                      >
                        Pin this search
                      </Link>
                    </button>
                    <button className="flex justify-center gap-1">
                      <RxCross2 className="mt-1 bg-slate-500 rounded-full text-white"></RxCross2>
                      <h2 className="text-error hover:bg-red-300">Clear all</h2>
                    </button>
                  </div>
                </div>

                <div className="flex">
                  {/* Dropdown */}
                  <div className="rounded-l-md h-10 mt-[8px] lg:md:w-[10%]">
                    <select className="pt-[6px] ps-3" onChange={handleSelect}>
                      {options.map((option, index) => (
                        <option className="" key={index} value={option.level}>
                          {option.level}{" "}
                        </option>
                      ))}{" "}
                    </select>
                  </div>
                  {/* -------------- */}
                  <div className="w-[100%]">
                    {/* <input className='mt-2 border border-[#c4cfde] rounded-l-md w-[20%] h-10 ' {...register('search')} /> */}
                    <input
                      type="search"
                      className="mt-2 border border-[#c4cfde] rounded-r-md w-[100%] h-10 "
                      {...register("search", { required: true })}
                    />
                    <span className="-ms-7 bg-slate-400 px-[5px] rounded-full text-white text-sm">
                      ?
                    </span>
                    {errors.company && (
                      <p className="text-red-400 mt-1">
                        Search text is required.
                      </p>
                    )}{" "}
                  </div>
                </div>
              </div>
              <div className="lg:md:flex lg:md:justify-between grid justify-center ">
                <div className="pt-5">
                  <h2>Location</h2>
                  <input
                    type="location"
                    className="mt-2 border border-[#c4cfde] rounded-md w-[300px] h-10 "
                    {...register("location", { required: true })}
                  />{" "}
                  {errors.location && (
                    <p className="text-red-400 mt-1">Location is required.</p>
                  )}{" "}
                </div>
                <div className="pt-5">
                  <h2>Company</h2>
                  <input
                    type="company"
                    className="mt-2 border border-[#c4cfde] rounded-md w-[300px] h-10"
                    {...register("company", { required: true })}
                  />{" "}
                  {errors.company && (
                    <p className="text-red-400 mt-1">
                      Company name is required.
                    </p>
                  )}{" "}
                </div>
                <div className="pt-5">
                  <h2>University</h2>
                  <input
                    type="university"
                    className="mt-2 border border-[#c4cfde] rounded-md  h-10 w-[300px]"
                    {...register("university", { required: true })}
                  />{" "}
                  {errors.university && (
                    <p className="text-red-400 mt-1">
                      University name is required.
                    </p>
                  )}{" "}
                </div>
                <div className="py-12 flex items-center ">
                  <input
                    className="py-[8px] mt-1 border-lime-900 bg-emerald-700 w-[300px] text-white rounded-md hover:bg-orange-500 hover:border-0 "
                    type="submit"
                  />
                </div>
              </div>
            </form>
          </div>
          {search ? (
            <>
             
              <div className="mx-4 md:mx-auto md:w-3/4">
      <h2 className="text-3xl font-semibold mb-6">Application List</h2>
      {loading ? (
        
       <div className="mt-32">
         <LoaderInternal></LoaderInternal>
       </div>
      ) : (
        // Display the table once data loading is complete
        <div className="overflow-x-auto shadow-lg">
          <table className="min-w-full shadow-md rounded-lg">
            <thead>
              <tr className= "bg-teal-600 text-white">
                <th className="px-6 py-3 text-left text-sm font-semibold ">Image</th>
                <th className="px-6 py-3 text-left text-sm font-semibold ">Job Title</th>
                <th className="px-6 py-3 text-left text-sm font-semibold ">Summary</th>
                <th className="px-6 py-3 text-left text-sm font-semibold ">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold ">Location</th>
                <th className="px-6 py-3 text-left text-sm font-semibold ">Stage</th>
              </tr>
            </thead>
            <tbody>
              {application.map((data, index) => (
                <tr key={index} className={(index % 2 === 0 ? "bg-gray-100" : "bg-white")}>
                  <td className="px-4 py-3">
                    <img src={data?.image} alt="Not Found" className="w-10 h-10 rounded-full" />
                  </td>
                  <td className="px-4 py-3">{data?.jobTitle}</td>
                  <td className="px-4 py-3">{data?.summary}</td>
                  <td className="px-4 py-3">{data?.email}</td>
                  <td className="px-4 py-3">{data?.location}</td>
                  <td className="px-4 py-3">{data?.stage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
            </>
          ) : (
            <>
              <div className="grid justify-center py-10 bg-[#f2f4f5] px-2 border-t-4 ">
                <img
                  className="w-40 mx-auto"
                  src="https://i.ibb.co/xjQYzwJ/people-Search.png"
                  alt="img"
                />
                <div className="text-center text-[#333e49]">
                  <h2 className="text-black text-2xl my-3">
                    Find the right candidate with People Search
                  </h2>
                  <p>
                    Publish a job and receive 75 profile views
                    <br />
                    <span>
                      to use on People Search, including AI Recruiter.
                    </span>
                    <br />
                  </p>
                  <Link to="/dashboard/jobs/post-job">
                    <button className="my-5 btn rounded-lg bg-[#00756a] text-white hover:bg-orange-600">
                      Publish a job
                    </button>
                  </Link>

                  <p className="">
                    How to use{" "}
                    <a className="text-[#00756a] hover:underline" href="">
                      People Search
                    </a>{" "}
                    and{" "}
                    <a className="text-[#00756a] hover:underline" href="">
                      AI Recruiter
                    </a>
                  </p>
                </div>
              </div>
            </>
          )}{" "}
        </TabPanel>

        {/* tab 2------------------------------ */}
        <TabPanel>
          <div className="bg-[#f2f4f5] mt-2">
            <div className="grid justify-center text-center text-[#333e49] pb-40">
              {JSON.parse(localStorage.getItem("bookMark")) ? (
                <>
                  <PinedSearch></PinedSearch>
                </>
              ) : (
                <>
                  <div>
                    <BsPinAngle className="text-5xl mx-auto my-10 mt-20 text-[#88929e]"></BsPinAngle>
                    <h2 className="text-2xl">No pinned searches yet!</h2>
                    <p className="my-5 text-sm">
                      Pin a search to reuse it later.
                    </p>
                  </div>
                </>
              )}{" "}
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default PeopleSearch;
