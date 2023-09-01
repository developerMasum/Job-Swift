import axios from "axios";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import {
  HiChat,
  HiHand,
  HiMail,
  HiOutlineDotsHorizontal,
} from "react-icons/hi";

const CandidateTables = ({ candidates }) => {
  console.log(candidates);
  const [isChecked, setIsChecked] = useState([]);
  const [sortOrder, setSortOrder] = useState('newest');

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    console.log(value);

    if (checked) {
      setIsChecked((prevChecked) => [...prevChecked, value]);
    } else {
      setIsChecked((prevChecked) =>
        prevChecked.filter((item) => item !== value)
      );
    }
  };
  const handleUnSelectAll = () => {
    setIsChecked([]);
    const checkboxes = document.querySelectorAll(".form-checkbox");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };
  
  // console.log('ok',isChecked);
  // const handleDelete = async () => {
    
  //   try {
  //     if (isChecked.length > 0) {
  //       // Make a DELETE request to the server API
  //       await axios.delete('http://localhost:5000/delete-candidates', {
  //         data: isChecked, 
  //         // Pass the array of selected candidate IDs
          
  //       });
  //       // After successful deletion, you might want to refresh your candidate data
  //     }
  //   } catch (error) {
  //     console.error('Error deleting candidates', error);
  //   }
  // };

  return (
    <div className="mt-5 text-secondary">
      <div className="flex justify-between w-full items-center ">
        <p className="w-1/2 text-secondary"> {candidates.length} Candidates</p>
        <div className="w-52"> 
        <select
  className="block appearance-none w-full bg-gray-100 border-0 text-gray-700 py-1 px-2 rounded leading-tight focus:outline-none focus:bg-white"
  value={sortOrder}
  onChange={(e) => setSortOrder(e.target.value)}
>
  <option value="newest">Newest First</option>
  <option value="oldest">Oldest First</option>
</select>
 
        </div>
      </div>
   <table className="w-full ">
  {/* head */}
  <thead className="">
    <tr>
      <th className="p-2">Select</th>
      <th className="p-2">Candidate Information</th>
      <th className="p-2">Job Status</th>
   
    </tr>
  </thead>
  <tbody className="py-12">
    {/* rows */}
    {candidates.map((candidate, index) => (
      <tr key={index} className="border-t border-gray-300 text-secondary ">
        <td className="p-2 ">
          <label className="pl-28" >
            <input
              type="checkbox"
              className="form-checkbox"
              value={candidate._id}
              checked={candidate.isChecked}
              onChange={(e) => handleCheckbox(e)}
            />
          </label>
     </td>
        <td className="p-2">
          <div className="flex justify-start gap-3 items-center ">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src={`http://localhost:5000/images/${candidate.image}`}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-lg mb-1 font-semibold text-secondary">
                {candidate.firstName} {candidate.lastName}
              </p>
              {
                candidate.educationList  ? <> <p> {candidate.educationList?.map(edu=> <span > {edu?.degree ?edu?.degree :'' } from {edu?.institution ? edu?.institution: ' ' } </span> )} <span> </span></p> </> :'no'
              }
              <p className="text-sm">{candidate.location}</p>
            </div>
          </div>
        </td>
        <td className="p-2">
          <div className="">
            <p>{candidate.jobTitle}</p>
            <p> {candidate.location}</p>
            <p>at ---- Stage</p>
            <p>
          {(() => {
            const timestamp = candidate.date;
            const dateTime = new Date(timestamp);

            const options = {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
             
            };
            return dateTime.toLocaleDateString(undefined, options);
          })()}
        </p>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>


      {/* footer part  */}

      {isChecked.length < 1 ? (
        " "
      ) : (
        <>
          {" "}
          <div className="mt-5 mb-3 fixed bottom-0 left-0 right-0 bg-orange-200 py-3">
            <div className="space-y-2 pt-4 text-start">
              <div className="flex gap-5 justify-around items-center">
                <div className="flex gap-3 ">
                  <p>{isChecked.length} selected</p>
                  <p>
                    Select:{" "}
                    <span
                      onClick={handleUnSelectAll}
                      className="font-semibold cursor-pointer"
                    >
                      None{" "}
                    </span>
                  </p>
                </div>
                <div className="flex gap-3">
                  <AiFillDelete onClick={()=>handleDelete(isChecked)} size={25} color="red" />
                  <HiMail size={25} className="text-sky-800" />
                  <HiChat size={25} className="text-sky-800" />
                  <HiHand size={25} color="red" />
                  <button className="bg-[#00756a] px-2 py-2 rounded-xl  text-white btn-sm">
                    Move to Next Step
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default CandidateTables;
