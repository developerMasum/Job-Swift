// rscimport axios from "axios";
// import React, { useState } from "react";
// import { AiFillDelete } from "react-icons/ai";
// import {
//   HiChat,
//   HiHand,
//   HiMail,
//   HiOutlineDotsHorizontal,
// } from "react-icons/hi";
// const AppliedCandidate = ({ candidates }) => {
//   console.log(candidates);
//   const [isChecked, setIsChecked] = useState([]);
//   const [sortOrder, setSortOrder] = useState("newest");

//   const [candidatesList, setCandidatesList] = useState(candidates.map(candidate => {
//     return {...candidate, isChecked: false};
// }));
// const handleSelectAll = (e) => {
//   const checkAll = e.target.checked;
//   const updatedCandidates = candidatesList.map(candidate => {
//       return {...candidate, isChecked: checkAll};
//   });
//   setCandidatesList(updatedCandidates);
// }

// const handleCheckbox = (candidateId) => {
//   const updatedCandidates = candidatesList.map(candidate => {
//       if (candidate._id === candidateId) {
//           return {...candidate, isChecked: !candidate.isChecked};
//       }
//       return candidate;
//   });
//   setCandidatesList(updatedCandidates);
// }

// const handleUnSelectAll = () => {
//   const updatedCandidates = candidatesList.map(candidate => {
//       return {...candidate, isChecked: false};
//   });
//   setCandidatesList(updatedCandidates);
// }
// const selectedCount = candidatesList.filter(candidate => candidate.isChecked).length;

//   return (
//     <div>
//       <div className="mt-5 text-second">
//         <div className="flex px-2 justify-between w-full items-center ">
//           <input type="checkbox" onChange={handleSelectAll}  name="" id="box" />
//           <div className="">
//             <select
//               className="block appearance-none w-full bg-gray-100 border-0 text-gray-700 py-1 px-2 rounded leading-tight focus:outline-none focus:bg-white"
//               value={sortOrder}
//               onChange={(e) => setSortOrder(e.target.value)}
//             >
//               <option value="newest">Newest First</option>
//               <option value="oldest">Oldest First</option>
//             </select>
//           </div>
//         </div>
//         <table className="w-full">
//           {/* head */}

//           <tbody className="py-12">
//             {/* rows */}
//             {candidatesList.map((candidate, index) => (
//               <tr
//                 key={index}
//                 className="border-t border-gray-300 text-second "
//               >
//                 <td className="p-2 ">
//                   <label className="">
//                     <input
//                       type="checkbox"
//                       className="form-checkbox"
//                       value={candidate._id}
//                       checked={candidate.isChecked}
//                       onChange={(e) => handleCheckbox(candidate._id)}
//                     />
//                   </label>
//                 </td>
//                 <td className="p-2">
//                   <div className="flex justify-start gap-3 items-center ">
//                     <div className="w-16 h-16 rounded-full overflow-hidden">
//                       <img
//                         src={`http://localhost:5000/images/${candidate.image}`}
//                         alt=""
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <div>
//                       <p className="text-lg mb-1 font-semibold text-second">
//                         {candidate.firstName} {candidate.lastName}
//                       </p>
//                       {candidate.educationList ? (
//                         <>
//                           {" "}
//                           <p>
//                             {" "}
//                             {candidate.educationList?.map((edu) => (
//                               <span className="text-sm">
//                                 {" "}
//                                 {edu?.degree ? edu?.degree : ""} from{" "}
//                                 {edu?.institution ? edu?.institution : " "}{" "}
//                               </span>
//                             ))}{" "}
//                             <span> </span>
//                           </p>{" "}
//                         </>
//                       ) : (
//                         "no"
//                       )}
//                       <p className="text-sm">{candidate.location}</p>
//                       <p className="text-sm">via <strong>careers page,</strong>7 days ago</p>
//                     </div>

//                   </div>
//                 </td>

//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* footer part  */}

//         {selectedCount .length < 1 ? (
//           " "
//         ) : (
//           <>
//             {" "}
//             <div className="mt-5 mb-3 fixed bottom-0 left-0 right-0 bg-orange-200 py-3">
//               <div className="space-y-2 pt-4 text-start">
//                 <div className="flex gap-5 justify-around items-center">
//                   <div className="flex gap-3 ">
//                   <p>{selectedCount} selected</p>
//                     <p>
//                       Select:{" "}
//                       <span
//                         onClick={handleUnSelectAll}
//                         className="font-semibold cursor-pointer"
//                       >
//                         None{" "}
//                       </span>
//                     </p>
//                   </div>
//                   <div className="flex gap-3">
//                     <AiFillDelete
//                       onClick={() => handleDelete(isChecked)}
//                       size={25}
//                       color="red"
//                     />
//                     <HiMail size={25} className="text-sky-800" />
//                     <HiChat size={25} className="text-sky-800" />
//                     <HiHand size={25} color="red" />
//                     <button className="bg-[#00756a] px-2 py-2 rounded-xl  text-white btn-sm">
//                       Move to Next Step
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>{" "}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AppliedCandidate;
<div>
  {filteredJobs.length > 0 ? (
    filteredJobs.map((job) => (
      <div key={job.id}>
        <div className="pt-16">
          <div className="md:flex  gap-12">
            <div className="md:w-1/3 w-full text-start">
              <div>
                <button
                  style={{
                    borderBottom:
                      activeTab === "tabs1" ? "2px solid gray" : "none",
                    color: activeTab === "tabs1" ? "black" : "grey",
                  }}
                  className="text-sm pb-2 font-medium"
                  onClick={() => {
                    setActiveTab("tabs1");
                  }}
                >
                  Qualified
                </button>
                <button
                  className="text-sm ml-7 pb-2 font-medium"
                  style={{
                    borderBottom:
                      activeTab === "tabs2" ? "2px solid gray" : "none",
                    color: activeTab === "tabs2" ? "black" : "grey",
                  }}
                  onClick={() => {
                    setActiveTab("tabs2");
                  }}
                >
                  Disqualified
                </button>
                <hr />
                <div className="pt-10 text-center">
                  {activeTab === "tabs1" && (
                    <div className="space-y-2">
                      <div className="flex border border-gray-300 rounded-xl w-full px-3 py-2 items-center">
                        <FiSearch size={20} className="text-gray-600" />
                        <input
                          type="search"
                          className="flex-grow px-2 py-1 outline-none border-none focus:border-none "
                          name="search"
                          placeholder="Search by name, skills, tags and more…"
                        />
                        <FiInfo size={20} className="text-gray-600" />
                      </div>
                      <AppliedCandidate
                        stageName={"Phone Screen"}
                        candidates={candidates}
                      />
                    </div>
                  )}

                  {activeTab === "tabs2" && (
                    <div className="space-y-2 pt-4">
                      <img className="w-1/3 mx-auto" src={hand} alt="Hand" />
                      <h4 className="font-semibold text-second text-xl">
                        No disqualified candidates
                      </h4>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-2/3 ">
              {activeTab === "tabs1" && (
                <div className="space-y-2  text-start">
                  <div className="flex gap-5 justify-end">
                    <HiOutlineDotsHorizontal size={25} color="gray" />
                    <HiMail size={25} color="gray" />
                    <HiChat size={25} color="gray" />
                    <HiHand size={25} color="red" />
                    <button className="bg-[#00756a] px-4 py-1 rounded-md">
                      Move to Interview
                    </button>
                  </div>
                  <div className="pt-10 bg-white">
                    {Data.map((data) => (
                      <div key={Data.id}>
                        <div>
                          <h3 className="text-3xl font-semibold">
                            {data.name}
                          </h3>
                          <div className="flex items-center gap-2 text-base text-gray-800">
                            <p>{data.education.educationName}</p> from
                            <p>{data.education.collegeName}</p>
                          </div>
                          <div className="flex items-center gap-2 text-base text-gray-500">
                            <p>{data.education.collegeName}</p>
                            <p>{data.education.year}</p>
                          </div>
                          <div className="flex items-center gap-5 py-3">
                            <div className="flex items-center gap-2 text-gray-600 text-[13px]">
                              <HiLocationMarker />
                              <p>{data.education.collegeLocation}</p>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600 text-[13px]">
                              <HiPhone />
                              <p>{data.contact}</p>
                            </div>
                          </div>
                          {/* Tags */}
                          <div>
                            <button className="font-medium text-gray-500">
                              + Add Tags
                            </button>
                            <p className="pt-5">
                              via{" "}
                              <span className="font-bold">careers page</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <div className="space-x-8">
                      <button
                        className={
                          isActiveTab === "profile"
                            ? "bg-gray-700 rounded px-3 py-1 text-white"
                            : "text-sm text-grey px-3 py-1"
                        }
                        onClick={() => {
                          setIsActiveTab("profile");
                        }}
                      >
                        Profile
                      </button>

                      <button
                        className={
                          isActiveTab === "timeline"
                            ? "bg-gray-700 rounded px-3 py-1 text-white"
                            : "text-sm text-grey px-3 py-1e "
                        }
                        onClick={() => {
                          setIsActiveTab("timeline");
                        }}
                      >
                        Timeline
                      </button>
                    </div>
                    {isActiveTab === "profile" && (
                      <div className="space-y-2 pt-5">
                        <h5 className="font-medium text-xs text-gray-500">
                          EDUCATION
                        </h5>
                        {Data.map((data) => (
                          <div key={data.id}>
                            <div className="flex items-center gap-10">
                              <p>{data.education.year}</p>
                              <div className="flex items-center gap-1">
                                <p className="font-medium">
                                  {data.education.educationName}
                                </p>
                                in
                                <p className="font-medium">
                                  {data.education.subject}
                                </p>
                                at
                                <p className="font-medium">
                                  {data.education.collegeName}
                                </p>
                              </div>
                            </div>
                            <div>
                              <div>
                                <h5 className="font-medium pt-7 text-sm text-gray-500">
                                  COVER LETTER
                                </h5>
                                {data?.coverLetter}
                              </div>
                              <div>
                                <h5 className="font-medium text-sm pt-7 text-gray-500">
                                  SUMMARY
                                </h5>
                                {data.summary}
                              </div>
                              <div>
                                <h5 className="font-medium text-sm pt-7 text-gray-500">
                                  RESUME
                                </h5>
                                {data.resume}
                              </div>
                              {/* Contact Details */}
                              <div>
                                <h5 className="font-medium text-sm pt-7 text-gray-500">
                                  CONTACT DETAILS
                                </h5>
                                <div className=" flex gap-20 text-gray-500">
                                  <p>Phone</p>
                                  <p>{data.contact}</p>
                                </div>
                                <div className=" pt-2 flex gap-20 text-gray-500">
                                  <p>Email</p>
                                  <p>{data.email}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    ))
  ) : (
    <NoContent />
  )}
</div>;
