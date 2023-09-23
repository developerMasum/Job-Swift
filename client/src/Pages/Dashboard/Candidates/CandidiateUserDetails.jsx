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
// import { HiX } from "react-icons/hi";

import { FaUserTie, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { GrSend } from "react-icons/gr";

import { useEffect, useState } from "react";
import Loader from "../../../Components/Loader/Loader";
// import ViewPdfCandidate from "./ViewPdfCandidate";
import { PiGraduationCapBold } from "react-icons/pi";
import CandidateStages from "./CandidateStages";
import { RiCloseLine } from "react-icons/ri";
import Calendar from "react-calendar"; // Import the react-calendar component
import Swal from "sweetalert2";
import SendMailModal from "../../../Components/Dashboard/Candidate/SendMailModal";
import axios from "axios";

const CandidiateUserDetails = () => {
  const { id } = useParams();
  // console.log("error", id);
  const [userDetails2, setUserDetails2] = useState(null);

  // For Email Modal
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const openEmailModal = () => {
    setIsEmailModalOpen(true);
  };

  const closeEmailModal = () => {
    setIsEmailModalOpen(false);
  };

  // For Message Modal
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);

  const openMessageModal = () => {
    setIsMessageModalOpen(true);
  };

  const closeMessageModal = () => {
    setIsMessageModalOpen(false);
  };
  // For Calender Modal
  // const [isCalenderModalOpen, setIsCalenderModalOpen] = useState(false);

  // const openCalenderModal = () => {
  //   setIsCalenderModalOpen(true);
  // };

  // const closeCalenderModal = () => {
  //   setIsCalenderModalOpen(false);
  // };

  // For Comments Modal
  const [isCommentsModalOpen, setIsCommentsModalOpen] = useState(false);

  const openCommentsModal = () => {
    setIsCommentsModalOpen(true);
  };

  const closeCommentsModal = () => {
    setIsCommentsModalOpen(false);
  };

  // Email section
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = (data) => {
    const mailData = {
      email: data.to,
      subject: data.subject,
      message: data.message,
    };

    // Send the POST request to the server
    axios
      .post(" https://server-job-swift.vercel.app/mail", mailData)
      .then((response) => {
        // The code inside this block will only run if the request is successful
        toast.success("Email sent successfully!");
      })
      .catch((error) => {
        // The code inside this block will run if there's an error with the request
        console.error("Error sending email:", error);
        toast.error("Error sending email.");
      });

    closeModal();
  };

  // Message section
  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the message submission here
    console.log("Message Sent:", message);
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Your Comment has been sent successfully.",
    });
    // Close the modal after submission
    closeMessageModal();
  };

  // For comment section
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    // Assuming you have some logic here to submit the comment data

    // Show a success message using SweetAlert2
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Your comment has been submitted successfully.",
    }).then(() => {
      // Clear the comment input
      setComment("");
    });

    // You can add further logic here, such as sending the comment to a server, etc.
  };

  // Calender section
  const [nDate, setNDate] = useState(new Date()); // Initial date is today

  const handleDateChange = (newDate) => {
    setNDate(newDate);
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
    const URL = ` https://server-job-swift.vercel.app/all-applications/${id}`;
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
      const response = fetch(
        ` https://server-job-swift.vercel.app/applicant/stage/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ stage: "Disqualified" }),
        }
      );

      if (response) {
        toast.error("This Candidate marked as Disqualified");
        setCurrentStage(itemName);
        location.reload(true);
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
    _id,
  } = userDetails2 || {};

  return (
    <div className="pt-16">
      <div className="container mx-auto">
        <div className="bg-image  bg-opacity-20 border    ">
          <div className="flex lg:md:justify-end  p-4">
            <div className="flex justify-around gap-8 cursor-pointer bg-white px-4 items-center border border-slate-400 rounded-lg p-2">
              <BiDotsHorizontal
                size={30}
                className="border-r-2 border-slate-400 pr-2 text-swift"
              ></BiDotsHorizontal>

              <BiEnvelope
                onClick={openModal}
                title="Send Mail"
                size={25}
                className="text-swift"
              />
              <BiMessageCheck
                onClick={openMessageModal}
                size={25}
                title="Send Message "
                className="text-swift"
              />
              <a
                href="https://calendar.google.com/calendar/u/2/r"
                target="_blank"
              >
                <BiSolidCalendar
                  // onClick={openCalenderModal}
                  size={35}
                  title="Set Event"
                  className="border-r-2 border-slate-400 pr-3 text-swift"
                ></BiSolidCalendar>
              </a>

              <BiSolidChat
                onClick={openCommentsModal}
                size={25}
                className="text-swift"
                title="Chat"
              />

              <div className="flex border-r-2 border-slate-400 pr-8 text-2xl">
                <BiSolidHandRight size={25} className="text-swift" />
                <BiSolidHandLeft size={25} className="text-swift" />
              </div>
              <BiSolidHand
                onClick={() => handleDisQualified(id)}
                size={25}
                title="Disqualify"
                className="text-red-700"
              ></BiSolidHand>

              <CandidateStages id={id} />
            </div>
          </div>
        </div>
        <div>
          <div className=" flex justify-between">
            <div className="p-4 flex ">
              <div>
                <img
                  className="h-24 w-24 rounded-xl border border-sky-600"
                  src={image}
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
                      <PiGraduationCapBold size={20} className="text-swift" />
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
            <div className="p-4">
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

        <div className="mt-4 border border-slate-200 p-5 rounded-lg">
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
                  COVER LETTER
                </p>
                {coverLetter ? (
                  <>
                    <p className="w-5/6"> {coverLetter}</p>
                  </>
                ) : (
                  <>
                    <p className="text-red-800 font-semibold">
                      The candidate did not provide a cover letter
                    </p>
                  </>
                )}
                <div className="divider w-5/6"></div>
              </div>
              {/* summery */}
              <div className="mb-5 border border-slate-100 py-5 pr-5 shadow-sm">
                <p className="text-swift font-bold text-base mb-3"> SUMMARY </p>
                {summary ? (
                  <>
                    <p className="w-5/6"> {coverLetter}</p>
                  </>
                ) : (
                  <>
                    <p className="text-red-800 font-semibold">
                      The candidate did not provide a cover letter
                    </p>
                  </>
                )}
                <div className="divider w-5/6"></div>
              </div>
              <SendMailModal
                value={_id}
                isOpen={isModalOpen}
                onClose={closeModal}
                onSubmit={onSubmit}
              />

              <div className="border max-w-3xl border-slate-200 p-10 text-center">
                <iframe
                  src={resume}
                  width={100}
                  title="Uploaded Resume"
                  className="mt-2 border border-gray-400 rounded"
                  style={{ width: "100%", height: "400px" }}
                />
              </div>

              <div className="mt-4">
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
              <footer className="text-center">
                No more activities to view
              </footer>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      {/*Email Modal start*/}

      {/*Email Modal end*/}

      {/* Message Modal start*/}
      {isMessageModalOpen && (
        <div className="fixed bg-gray-200 inset-0 flex items-center justify-center z-50 ">
          <div className="modal-container bg-white md:w-1/2 lg:w-3/4 p-4 rounded-lg shadow-lg relative">
            <div className="flex justify-between items-center mb-4 "></div>
            {/* Message Box */}
            <form onSubmit={handleMessageSubmit} className="text-gray-700">
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="text-2xl font-bold text-gray-800"
                >
                  Your Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-400 mt-4"
                  value={message}
                  onChange={handleMessageChange}
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-teal-700 w-1/2 text-white px-4 py-2 rounded-md hover:bg-teal-500 focus:outline-none"
                >
                  Send Message
                </button>
              </div>
            </form>
            {/* Quit Button */}
            <button
              onClick={closeMessageModal}
              className="absolute top-4 right-4 bg-[#d73939] text-white px-4 py-2 rounded-md hover:bg-[#4f0000] focus:outline-none"
            >
              <RiCloseLine className="text-lg" />
            </button>
          </div>
        </div>
      )}
      {/* Message Modal end*/}
      {/* Calender Modal start*/}

      {/* Calender Modal end*/}
      {/* Comments Modal start*/}
      {isCommentsModalOpen && (
        <div className="fixed bg-gray-200 inset-0 flex items-center justify-center z-50">
          <div className="modal-container bg-white md:w-1/2 lg:w-3/4 p-4 rounded-lg shadow-lg relative">
            <div className="w-full mx-auto p-4  rounded-lg">
              <form onSubmit={handleCommentSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="comment"
                    className="text-3xl mb-2 block text-gray-600"
                  >
                    Your Comment:
                  </label>
                  <textarea
                    required
                    id="comment"
                    name="comment"
                    rows="4"
                    cols="50"
                    className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-400"
                    value={comment}
                    onChange={handleCommentChange}
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    onSubmit={handleCommentSubmit}
                    type="submit"
                    className="bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-500 focus:outline-none focus:ring focus:ring-blue-400"
                  >
                    Comment Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Quit Button */}
            <button
              onClick={closeCommentsModal}
              className="absolute top-4 right-4 bg-[#d73939] text-white px-4 py-2 rounded-md hover:bg-[#4f0000] focus:outline-none"
            >
              <RiCloseLine className="text-lg" />
            </button>
          </div>
        </div>
      )}
      {/* Comments Modal end*/}
    </div>
  );
};

export default CandidiateUserDetails;
