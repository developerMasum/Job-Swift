import React from 'react';
import {
      FaAngleLeft,
      FaAngleRight,
      FaAngleDown,
      FaAngleUp,
      FaAngleDoubleDown,
} from 'react-icons/fa';


const CandidiateBreakdownReport = () => {

      const candidiateData = [
            { name: "Saiful Islam", job: "Frontend Development", headline: "intern", email: "mdarifur554@gmail.com", time: "23 August, 2023 10:02:23", stage: "applied", tag: "" },
            { name: "Kabir Hossain", job: "Backend Development", headline: "full-time", email: "Kabir@gmail.com", time: "03 August, 2023 11:02:43", stage: "offer", tag: "" },
            { name: "Farhan Massum", job: "NextJS Development", headline: "Main HR", email: "farhan@gmail.com", time: "02 August, 2023 12:03:20", stage: "Hired", tag: "" },


      ];
      return (
            <div className='pt-20 '>
                  <div className="navbar  shadow-md p-4 shadow-slate-400 max-w-7xl">
                        <div className="navbar-start ">
                              <div className="dropdown">
                                    <label tabIndex={0} className="ml-4 flex justify-center items-center  ">
                                          <h3 className='font-semibold text-2xl'> Candidiate Breakdown</h3> <FaAngleDoubleDown className='pt-2 text-2xl font-semibold'></FaAngleDoubleDown>
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
                              {/* <button className="btn btn-outline btn-sm">Export To CV</button> */}
                        </div>
                  </div>
                  <div className='mt-5 gap-4 pt-10 flex justify-between'>
                        <div className='flex'>
                              <select className="select select-ghost w-full max-w-xs">
                                    <option disabled selected>All jobs</option>
                                    <option>Jobs</option>
                                    <option>
                                          Location
                                    </option>
                              </select>
                              <select className="select select-ghost w-full max-w-xs">
                                    <option disabled selected>Location</option>
                                    <option>Dhaka</option>
                                    <option>Bangladesh</option>

                              </select>
                        </div>
                        <div className='flex justify-center items-center'>
                              <p className='px-2 flex font-semibold gap-2'> <small>This</small><small> month</small></p>
                              <select className="select select-ghost w-full max-w-xs">
                                    <option disabled selected >Time</option>
                                    <option>This week</option>
                                    <option>This month</option>
                                    <option>This year</option>
                                    <option>Last week</option>
                                    <option>Last month</option>
                                    <option>Last year</option>

                              </select>
                        </div>
                  </div>
                  <div className='my-2 shadow-2xl shadow-gray-400 p-12 border border-slate-200 rounded-lg'>
                        <div className="overflow-x-auto">
                              <table className="table">
                                    {/* head */}
                                    <thead>

                                          <tr className='text-black font-semibold text-md'>
                                                <th>Name</th>
                                                <th>Job</th>
                                                <th>Headline</th>
                                                <th>Email</th>
                                                <th>Creation Time</th>
                                                <th>Stage</th>
                                                <th>Tags</th>

                                          </tr>
                                    </thead>
                                    <tbody>

                                          {
                                                candidiateData?.map((data, index) => (<tr key={index}>
                                                      <td>{data.name}</td>
                                                      <td>{data.job}</td>
                                                      <td>{data.headline}</td>
                                                      <td>{data.email}</td>
                                                      <td>{data.time}</td>
                                                      <td>{data.stage}</td>
                                                      <td>{data.tag}</td>

                                                </tr>))
                                          }

                                    </tbody>
                              </table>
                        </div>
                  </div>
            </div>
      );
};

export default CandidiateBreakdownReport;