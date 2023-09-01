import React from 'react';
import HeaderPipeline from './HeaderPipeline';
import {
      FaAngleLeft,
      FaAngleRight,
      FaArrowsAltH,
      FaAngleDoubleDown,
} from 'react-icons/fa';
const CurrentPipelineReport = () => {
      // Job	Published	Sourced	Applied	Phone Screen	Assessment	Interview	Offer	Hired
      const pipelineData = [
            { job: "Frontend Development", published: "23 August, 2023", sourced: "Linkind", applied: "2", phoneScreen: "yes", assessment: "", interview: "1", offer: "1", hired: "1" },
            { job: "Backend Development", published: "03 September, 2023", sourced: "Facebook", applied: "5", phoneScreen: "yes", assessment: "2", interview: "1", offer: "1", hired: "1" },
            { job: "NextJs Development", published: "02 November, 2023", sourced: "Google", applied: "4", phoneScreen: "no", assessment: "2", interview: "2", offer: "2", hired: "1" },

      ];
      return (
            <div className='pt-20'>
                  <HeaderPipeline></HeaderPipeline>
                  <div className='mt-5 gap-4 pt-8'>
                        <select className="select select-ghost w-full max-w-xs">
                              <option disabled selected>All jobs</option>
                              <option>All jobs</option>

                              <option>
                                    <p>Jobs</p>
                              </option>



                        </select>
                        <select className="select select-ghost w-full max-w-xs">
                              <option disabled selected>All Location</option>
                              <option>Dhaka</option>
                              <option>Bangladesh</option>

                        </select>
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

export default CurrentPipelineReport;