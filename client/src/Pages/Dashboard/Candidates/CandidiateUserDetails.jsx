import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useParams } from "react-router-dom";
import {
  BiDotsHorizontal,
  BiEnvelope,
  BiMessageCheck,
  BiSolidCalendar,
  BiSolidChat,
  BiSolidHandLeft,
  BiSolidHandRight,
  BiSolidHand,
  BiLocationPlus,
  BiPhone,
  BiLogoLinkedinSquare,
  BiLogoFacebookSquare,
  BiUser,
  BiCategoryAlt,
} from "react-icons/bi";
import toast from "react-hot-toast";
import { HiX } from "react-icons/hi";

import { FaUserTie, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

import { useEffect, useState } from "react";
import Loader from "../../../Components/Loader/Loader";
import ViewPdfCandidate from "./ViewPdfCandidate";
import { PiGraduationCapBold } from "react-icons/pi";
import CandidateStages from "./CandidateStages";

const CandidiateUserDetails = () => {
  const { id } = useParams();
  // console.log("error", id);
  const [userDetails2, setUserDetails2] = useState(null);
  const [isEmailModal, setIsEmailModal] = useState(false);
  const [isCommentModal, setIsCommentModal] = useState(false);
  const [isMessageModal, setIsMessageModal] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const toggleEmailModal = () => {
    if (activeModal === "email") setActiveModal("");
    else setActiveModal("email");
  };
  const toggleCommentModal = () => {
    if (activeModal === "comment") setActiveModal("");
    else setActiveModal("comment");
  };
  const toggleMessageModal = () => {
    if (activeModal === "message") setActiveModal("");
    else setActiveModal("message");
  };
  // time and date fixer
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };

  useEffect(() => {
    const URL = `http://localhost:5000/all-applications/${id}`;
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        // Set the profile data in the state
        setUserDetails2(data);
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, [id]); // Include 'id' as a dependency in the useEffect dependency array

  if (userDetails2 === null) {
    return <Loader />;
  }

  // console.log(userDetails2);

  // handleDisQualified
  const handleDisQualified = (id) => {
    try {
      const response = fetch(`http://localhost:5000/applicant/stage/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ stage: "Disqualified" }),
      });

      if (response) {
        toast.error("This Candidate marked as Disqualified");
        setCurrentStage(itemName);
      } else {
        console.error("Failed to update stage.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const {
    email,
    jobTitle,
    firstName,
    lastName,
    phoneNumber,
    location,
    image,
    resume,
    coverLetter,
    summary,
    stage,
    educationList,
    date,
  } = userDetails2 || {};

  return (
    <div className="pt-20">
      <div className="bg-image  bg-opacity-40 border border-slate-300 shadow-lg   ">
        <div className="flex lg:md:justify-end  p-4">
          <div className="flex justify-around gap-8 cursor-pointer bg-white px-4 items-center border border-slate-400 rounded-lg p-2">
            {/* <BiDotsHorizontal
              size={30}
              className="border-r-2 border-slate-400 pr-2 text-swift"
            ></BiDotsHorizontal> */}
            {/* Email popup */}
            <button onClick={toggleEmailModal}>
              <BiEnvelope size={25} className="text-swift" />
            </button>

            <button onClick={toggleCommentModal}>
              <BiMessageCheck size={25} className="text-swift" />
            </button>
            <BiSolidCalendar
              size={35}
              className="border-r-2 border-slate-400 pr-3 text-swift "
            ></BiSolidCalendar>
            <button onClick={toggleMessageModal}>
              <BiSolidChat size={25} className="text-swift" />
            </button>
            <div className="flex border-r-2 border-slate-400 pr-8 text-2xl">
              <BiSolidHandRight size={25} className="text-swift" />
              <BiSolidHandLeft size={25} className="text-swift" />
            </div>
            <BiSolidHand
              onClick={() => handleDisQualified(id)}
              size={25}
              className="text-red-700"
            ></BiSolidHand>

            <CandidateStages id={id} />
          </div>
        </div>
      </div>
      <div>
      {activeModal === "email" && (
        <div className={`emailModal ${isEmailModal ? "open" : ""}`}>
          <div className="flex p-5 justify-between">
            <h2 className="font-semibold">New message</h2>
            <button
              onClick={toggleEmailModal}
              className="hover:bg-gray-200 p-2"
            >
              <HiX className="" />
            </button>
          </div>
          <div className="px-5 pb-5">
            <div className="space-x-2 flex items-center">
              <label className="font-medium" htmlFor="">To</label>
              <input
                type="email"
                placeholder="email"
                name=""
                className="border-none w-full focus:outline-none  focus:border-none outline-none"
                id=""
              />
            </div>
            <input
              type="email"
              placeholder="Subject"
              name=""
              className="border-none focus:border-none py-3 outline-none"
              id=""
            />
            <div>
              <textarea
                name=""
                id=""
                placeholder="your message here"
                className="border-none w-full focus:border-none outline-none"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="flex justify-end pt-5">
            <button className="bg-cyan-500  px-6 py-2 rounded-md font-medium hover:bg-cyan-700 hover:text-gray-200 transition-colors 3s ease-in-out">
             Send
            </button>
            </div>
          </div>
        </div>
      )}
            {activeModal === "comment" && (
        <div className={`emailModal ${isCommentModal ? "open" : ""}`}>
          <div className="flex p-5 justify-between">
            <h2 className="font-semibold">Your Comment</h2>
            <button
              onClick={toggleCommentModal}
              className="hover:bg-gray-200 p-2"
            >
              <HiX className="" />
            </button>
          </div>
          <div className="px-5 pb-5">
            <div>
              <textarea
                name=""
                id=""
                placeholder="your Comment here"
                className="border-none w-full focus:border-none outline-none"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="flex justify-end pt-5">
            <button className="bg-cyan-500  px-6 py-2 rounded-md font-medium hover:bg-cyan-700 hover:text-gray-200 transition-colors 3s ease-in-out">
             OK
            </button>
            </div>
          </div>
        </div>
      )}
      {activeModal === "message" && (
        <div className={`emailModal ${isMessageModal ? "open" : ""}`}>
          <div className="flex p-5 justify-between">
            <h2 className="font-semibold">Your Message</h2>
            
            <button
              onClick={toggleMessageModal}
              className="hover:bg-gray-200 p-2"
            >
              <HiX className="" />
            </button>
          </div>
          <div className="px-5 pb-5">
            <div>
              <textarea
                name=""
                id=""
                placeholder="your Message"
                className="border-none w-full focus:border-none outline-none"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="flex justify-end pt-5">
            <button className="bg-cyan-500  px-6 py-2 rounded-md font-medium hover:bg-cyan-700 hover:text-gray-200 transition-colors 3s ease-in-out">
             Send
            </button>
            </div>
          </div>
        </div>
      )}
      </div>
      <div>
        <div className="shadow-2xl flex justify-between">
          <div className="p-8 flex ">
            <div>
              <img
                className="h-24 w-24 rounded-xl border border-sky-600"
                src={`http://localhost:5000/images/${image}`}
                alt=""
              />
            </div>
            <div className="px-4">
              <h1 className="flex gap-2 items-center mb-2 font-bold">
                <FaUserTie size={20} className="text-swift" />
                {firstName} {lastName}
              </h1>
              {educationList?.map((education, index) => {
                return (
                  <h2
                    className="flex gap-2 items-center mb-2 font-semibold"
                    key={index}
                  >
                    {" "}
                    <PiGraduationCapBold
                      size={20}
                      className="text-swift"
                    />{" "}
                    {education?.institution}
                  </h2>
                );
              })}

              <h3 className="flex gap-2 items-center mb-2 font-semibold">
                <BiLocationPlus size={20} className="text-swift" />
                {location}
              </h3>
              <h3 className="flex gap-2 items-center font-semibold">
                <BiPhone size={20} className="text-swift" />
                {phoneNumber}
              </h3>
            </div>
          </div>
          <div className="p-8">
            <p className="font-bold text-swift hover:underline cursor-pointer">
              {jobTitle} <small className="ml-2 "> · {stage}</small>
            </p>
            <div>
              <p>
                via <small className="font-bold">career page</small>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 shadow-lg border border-slate-200 p-5 rounded-lg">
        <Tabs>
          <TabList className="flex gap-12 mb-8 flex-col">
            <div>
              <div>
                <article className="font-bold text-base uppercase text-swift">
                  Education
                </article>
                <div>
                  {educationList?.map((education, index) => {
                    return (
                      <div key={index}>
                        <h2 className="mt-4 font-semibold">
                          {formatDate(education?.startDate)}
                        </h2>
                        <div className="flex gap-4">
                          <p className=" font-semibold">
                            {education?.degree} in {education.institution}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex gap-12 cursor-pointer">
              <Tab className=" bg-teal-700  text-white  rounded-lg  px-8 py-2">
                Profile
              </Tab>
              <Tab className="border border-1 hover:bg-teal-700  border-teal-700 font-semibold text-sm rounded-lg  px-8 py-2">
                Timeline
              </Tab>
            </div>
          </TabList>

          <TabPanel>
            {/* cover letter */}
            <div className="mb-2 border border-slate-100 py-5 pr-5 shadow-sm">
              <p className="text-swift font-bold text-base mb-3">
                {" "}
                COVER LETTER{" "}
              </p>
              {coverLetter ? (
                <>
                  {" "}
                  <p className="w-5/6"> {coverLetter}</p>{" "}
                </>
              ) : (
                <>
                  {" "}
                  <p className="text-red-800 font-semibold">
                    The candidate did not provide a cover letter{" "}
                  </p>{" "}
                </>
              )}
              <div className="divider w-5/6"></div>
            </div>
            {/* summery */}
            <div className="mb-5 border border-slate-100 py-5 pr-5 shadow-sm">
              <p className="text-swift font-bold text-base mb-3"> SUMMARY </p>
              {summary ? (
                <>
                  {" "}
                  <p className="w-5/6"> {coverLetter}</p>{" "}
                </>
              ) : (
                <>
                  {" "}
                  <p className="text-red-800 font-semibold">
                    The candidate did not provide a cover letter{" "}
                  </p>{" "}
                </>
              )}
              <div className="divider w-5/6"></div>
            </div>

            <div className="border max-w-4xl border-slate-200 p-10 text-center">
              <iframe
                src={`http://localhost:5000/images/${resume}`}
                width={100}
                title="Uploaded Resume"
                className="mt-2 border border-gray-400 rounded"
                style={{ width: "100%", height: "400px" }}
              />
            </div>

            <div className="mt-10">
              <div>
                <h1 className="text-swift font-bold text-base mb-3">
                  CONTACT DETAILS
                </h1>
                <div className="mt-6">
                  <p className="flex items-center gap-2 my-2">
                    <span className="text-swift">
                      <FaMapMarkerAlt size={18} />
                    </span>
                    <span className="font-semibold">{location}</span>
                  </p>
                  <p className="flex items-center gap-2 my-2">
                    <span className="text-swift">
                      <FaPhone size={18} />
                    </span>
                    <span className="font-semibold">{phoneNumber}</span>
                  </p>
                  <p className="flex items-center gap-2 my-2">
                    <span className="text-swift">
                      <FaEnvelope size={18} />
                    </span>
                    <span className="font-semibold">{email}</span>
                  </p>
                </div>
              </div>
              <div className="divider mt-10 font-bold"></div>

              <div>
                <h1 className="text-swift font-bold text-base mb-3 ">
                  CONTACT PREFERENCES
                </h1>
                <div className="mt-6 ">
                  <p className="flex gap-6">
                    <span className="font-semibold ">Texting:</span>
                    <span>Enabled - consent confirmed</span>
                  </p>
                </div>
              </div>
              <div className="divider mt-10 font-bold"></div>
            </div>
          </TabPanel>
          <TabPanel className="border  rounded-lg p-8">
            <div className="flex justify-end gap-3 items-center mb-6">
              <input type="checkbox" className="toggle" disabled checked />
              <small>Hide All Details</small>
            </div>
            <div>
              <div className="divider mt-6 font-bold"></div>
              <div className="flex items-center gap-8 pl-12">
                <BiSolidHand className="text-2xl"></BiSolidHand>
                <div className="avatar">
                  <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 p-2 text-center">
                    {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                    AR
                  </div>
                </div>
                <p>Md Arifur Rahman</p>
                <p>disqualified candidate</p>
                <br />
                <br />
                <p className="flex justify-end"> ..... about 19 Hours ago</p>
              </div>

              <div className="divider mt-6 font-bold"></div>
              <div className="divider mt-6 font-bold"></div>
              <div className="flex items-center gap-8 pl-12">
                <BiCategoryAlt className="text-2xl"></BiCategoryAlt>
                <div className="avatar">
                  <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 p-2 text-center">
                    {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                    BK
                  </div>
                </div>
                <p>Md Farhan Massum</p>
                <p>qualified candidate</p>
                <br />
                <br />
                <p className="flex justify-end"> ..... about 9 Hours ago</p>
              </div>

              <div className="divider mt-6 font-bold"></div>
              <div className="divider mt-6 font-bold"></div>

              <div className="flex items-center gap-8 pl-12">
                <BiSolidChat className="text-2xl"></BiSolidChat>
                <div className="avatar">
                  <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 p-2 text-center">
                    {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                    KH
                  </div>
                </div>
                <p>Kabir Hossain</p>
                <p>interview candidate</p>
                <br />
                <br />
                <p className="flex justify-end"> ..... about 23 Hours ago</p>
              </div>

              <div className="divider mt-6 font-bold"></div>
              <div className="divider mt-6 font-bold"></div>
              <div className="flex items-center gap-8 pl-12">
                <BiUser className="text-2xl"></BiUser>
                <div className="avatar">
                  <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 p-2 text-center">
                    {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                    AR
                  </div>
                </div>
                <p>Md Saifull Islam</p>
                <p>Hired candidate</p>
                <br />
                <br />
                <p className="flex justify-end"> ..... about 19 Hours ago</p>
              </div>

              <div className="divider mt-6 font-bold"></div>
              <div className="divider mt-6 font-bold"></div>
              <div className="flex items-center gap-8 pl-12">
                <BiPhone className="text-2xl"></BiPhone>
                <div className="avatar">
                  <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 p-2 text-center">
                    {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                    AB
                  </div>
                </div>
                <p>Anik Bissas Antor</p>
                <p>assesment candidate</p>
                <br />
                <br />
                <p className="flex justify-end"> ..... about 1 week ago</p>
              </div>

              <div className="divider mt-6 font-bold"></div>
            </div>
            <footer className="text-center">No more activities to view</footer>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default CandidiateUserDetails;
