import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

function CandidateStages({ id }) {
  const [selectedItem, setSelectedItem] = useState("");
  const [currentStage, setCurrentStage] = useState("");
  const [stages, setStages] = useState([
    "Sourced",
    "Applied",
    "Assessment",
    "Interview",
    "Offer",
    "Hired"
  ]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const url = `http://localhost:5000/all-applications/${id}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCurrentStage(response.data.stage);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleItemClick = async (event, itemName) => {
    if (currentStage === itemName) {
      return;
    }

    setSelectedItem(itemName);

    try {
      const response = await fetch(
        `http://localhost:5000/applicant/stage/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ stage: itemName }),
        }
      );

      if (response.ok) {
        toast.success(`Stage updated to ${itemName}`);
        setCurrentStage(itemName);
      } else {
        console.error("Failed to update stage.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getNextStage = () => {
    const currentStageIndex = stages.indexOf(currentStage);
    if (currentStageIndex !== -1 && currentStageIndex < stages.length - 1) {
      return stages[currentStageIndex + 1];
    }
    return ""; // Return an empty string if the current stage is the last one
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="relative inline-block">
        <button
          onClick={toggleDropdown}
          className="bg-cyan-700 text-white px-2 py-1 rounded-md cursor-pointer relative"
        >
          {currentStage === getNextStage() && (
            <p className="absolute top-0 left-0 bg-green-500 text-white px-1 py-1 rounded-md">
              {currentStage}
            </p>
          )}
          Move to {getNextStage()}
        </button>
        {isDropdownOpen && (
          <ul className="absolute left-0 mt-2 p-2 shadow dropdown-content z-[1] bg-base-100 text-second rounded-box">
            {stages.map((stage) => (
              <li
                key={stage}
                className={`px-1 mx-4 py-1 ${
                  currentStage === stage ? "text-green-700" : ""
                } `}
              >
                <a
                  onClick={(e) => handleItemClick(e, stage)}
                  disabled={currentStage === stage}
                  className={
                    currentStage === stage
                      ? "text-green-700 font-semibold cursor-not-allowed"
                      : ""
                  }
                >
                  {stage}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CandidateStages;
