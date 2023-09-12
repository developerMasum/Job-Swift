import React, { useState } from "react";
import Swal from "sweetalert2";
import icons1 from "../../../assets/Image/jobsicon1.png";
import icons2 from "../../../assets/Image/jobsicons.png";
import icons3 from "../../../assets/Image/josbicns3.png";

const JobsInvitationsCard = () => {
  // Create an array to store the disabled state for each button and clicked state
  const [buttonDisabled, setButtonDisabled] = useState([false, false, false]);
  const [buttonClicked, setButtonClicked] = useState([false, false, false]);

  const handleSendInvite = (index) => {
    // Disable the button at the specified index and mark it as clicked
    const updatedButtonDisabled = [...buttonDisabled];
    updatedButtonDisabled[index] = true;
    setButtonDisabled(updatedButtonDisabled);

    const updatedButtonClicked = [...buttonClicked];
    updatedButtonClicked[index] = true;
    setButtonClicked(updatedButtonClicked);

    // Show the SweetAlert2 modal
    Swal.fire({
      icon: "success",
      title: "Invite Sent",
      text: "Your invite has been sent successfully!",
      timer: 3000, // Close after 3 seconds
      timerProgressBar: true,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    }).then(() => {
      // Enable the button at the specified index after the modal is closed
      const updatedButtonDisabled = [...buttonDisabled];
      updatedButtonDisabled[index] = true;
      setButtonDisabled(updatedButtonDisabled);

      const updatedButtonClicked = [...buttonClicked];
      updatedButtonClicked[index] = true;
      setButtonClicked(updatedButtonClicked);
    });
  };

  return (
    <div className="px-5 mx-auto pb-20 grid lg:md:grid-cols-3 gap-7">
      {/* First card */}
      <div
        className="flex px-4 py-3 rounded-lg"
        style={{
          boxShadow:
            "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
        }}
      >
        {/* Content */}
        <div className="space-y-3">
          <h4 className="font-semibold">Work as a team</h4>
          <p className="text-swift text-sm">
            Invite your team to JobSwift so you can share feedback and work
            together to hire the right people.
          </p>
          <button
            className={`px-4 py-1 text-swift font-semibold border border-[#00673B] rounded-md ${
              buttonClicked[0] ? "opacity-30 cursor-not-allowed" : ""
            }`}
            onClick={() => handleSendInvite(0)} // Pass the index 0
            disabled={buttonDisabled[0]} // Use the disabled state for this button
          >
            Send invite
          </button>
        </div>
        {/* Image */}
        <div>
          <img className="w-[200px] h-[100px]" src={icons1} alt="" />
        </div>
      </div>

      {/* Second Card */}
      <div
        className="flex px-4 rounded-lg py-3"
        style={{
          boxShadow:
            "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
        }}
      >
        <div className="space-y-3">
          <h4 className="font-semibold">Show off your brand</h4>
          <p className="text-swift text-sm">
            Ensure candidates see your company logo and custom description on
            job posts, emails, and more.
          </p>
          <button
            onClick={() => handleSendInvite(1)} // Pass the index 1
            disabled={buttonDisabled[1]} // Use the disabled state for this button
            className={`px-4 py-1 text-swift font-semibold border border-[#00673B] rounded-md ${
              buttonClicked[1] ? "opacity-30 cursor-not-allowed" : ""
            }`}
          >
            Send invite
          </button>
        </div>
        <div>
          <img className="w-[200px] h-[100px]" src={icons2} alt="" />
        </div>
      </div>
      {/* 3rd card */}
      <div
        className="flex rounded-lg px-4 py-3"
        style={{
          boxShadow:
            "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
        }}
      >
        <div className="space-y-3">
          <h4 className="font-semibold">Find the best features for you</h4>
          <p className="text-swift text-sm">
            JobSwift is best when it's customized for you. Check out all of our
            features with a personal walkthrough.
          </p>
          <button
            onClick={() => handleSendInvite(2)} // Pass the index 2
            disabled={buttonDisabled[2]} // Use the disabled state for this button
            className={`px-4 py-1 text-swift font-semibold border border-[#00673B] rounded-md ${
              buttonClicked[2] ? "opacity-30 cursor-not-allowed" : ""
            }`}
          >
            Send invite
          </button>
        </div>
        <div>
          <img className="w-[200px] h-[100px]" src={icons3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default JobsInvitationsCard;
