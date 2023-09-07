import React from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';

const HiringVelocity = () => {
      const pipelineData = [
            { job: "Frontend Development", published: "23 August, 2023", sourced: "Linkind", applied: "2", phoneScreen: "yes", assessment: "", interview: "1", offer: "1", hired: "1" },
            { job: "Backend Development", published: "03 September, 2023", sourced: "Facebook", applied: "5", phoneScreen: "yes", assessment: "2", interview: "1", offer: "1", hired: "1" },
            { job: "NextJs Development", published: "02 November, 2023", sourced: "Google", applied: "4", phoneScreen: "no", assessment: "2", interview: "2", offer: "2", hired: "1" },

      ];
      return (
            <div className='pt-20 '>
                  <div className="navbar  shadow-md p-4 shadow-slate-400 max-w-7xl">
                        <div className="navbar-start">
                              <div className="dropdown">
                                    <label tabIndex={0} className="ml-4 flex justify-center items-center  ">
                                          <h3 className='font-semibold text-2xl'>Hiring Velocity</h3>
                                          <FaAngleDoubleDown className='pt-2 text-2xl font-semibold'></FaAngleDoubleDown>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                          <li><a>Homepage</a></li>
                                          <li><a>Portfolio</a></li>
                                          <li><a>About</a></li>
                                    </ul>
                              </div>
                        </div>

                        <div className="navbar-end gap-6">
                              <button className="btn btn-outline btn-sm">Export To CSV</button>
                              <button className="btn btn-outline btn-sm">Export To CV</button>
                        </div>
                  </div>
                  <div className='my-2 shadow-2xl shadow-gray-400 p-12 border border-slate-200 rounded-lg'>
                        <div className="overflow-x-auto">
                              <table className="table">
                                    {/* head */}
                                    <thead>
                                          <tr className='text-black font-semibold text-md'>
                                                <th className=''>Job </th>
                                                <th>Published</th>
                                                <th>Sourced</th>
                                                <th>Applied</th>
                                                <th>PhoneScreen</th>
                                                <th>Assesment</th>
                                                <th>Interview</th>
                                                <th>Offer</th>
                                                <th>Hired</th>
                                          </tr>
                                    </thead>
                                    <tbody>

                                          {
                                                pipelineData?.map((data, index) => (<tr key={index}>
                                                      <td>{data.job}</td>
                                                      <td>{data.published}</td>
                                                      <td>{data.sourced}</td>
                                                      <td>{data.applied}</td>
                                                      <td>{data.phoneScreen}</td>
                                                      <td>{data.assessment}</td>
                                                      <td>{data.interview}</td>
                                                      <td>{data.offer}</td>
                                                      <td>{data.hired}</td>
                                                </tr>))
                                          }

                                    </tbody>
                              </table>
                        </div>
                  </div>
            </div>
      );
};

export default HiringVelocity;