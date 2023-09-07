import React from 'react';

import {
      FaAngleLeft,
      FaAngleRight,
      FaArrowsAltH,
      FaAngleDoubleDown,
} from 'react-icons/fa';
const CandidateSource = () => {
      const candidiateSourceData = [
            { job: "Company Marketing", views: "8", candidiate: "8", moved: "2", hired: "1" },

            { job: "Careers page", views: "4", candidiate: "4", moved: "0", hired: "0" },

      ];


      const totalViews = candidiateSourceData.reduce((total, source) => total + parseInt(source.views), 0);
      const totalCandidiate = candidiateSourceData.reduce((total, source) => total + parseInt(source.candidiate), 0);
      const totalMoved = candidiateSourceData.reduce((total, source) => total + parseInt(source.moved), 0);
      const totalHired = candidiateSourceData.reduce((total, source) => total + parseInt(source.hired), 0);



      return (
            <div className='pt-20'>
                  <div className="navbar  shadow-md p-4 shadow-slate-400 max-w-7xl">
                        <div className="navbar-start">
                              <div className="dropdown">
                                    <label tabIndex={0} className="ml-4 flex justify-center items-center  ">
                                          <h3 className='font-semibold text-2xl'>Candidiate Source</h3>
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

                  <div className=' mt-20 shadow-xl shadow-slate-400 p-12'>
                        <div className='shadow-xl flex justify-around p-6 border border-slate-200 rounded-xl'>

                              <div className='hover:bg-slate-300 p-4 rounded-full'>
                                    <div className='p-10 bg-slate-600 rounded-full'>
                                          <div className='bg-white rounded-full px-12 py-12  flex flex-col'>
                                                <div className='text-center font-semibold'>{totalViews}</div>
                                                <div className='text-center font-semibold'>Views</div>
                                          </div>
                                    </div>
                              </div>
                              <div className='hover:bg-slate-300 p-4 rounded-full'>
                                    <div className='p-10 bg-slate-600 rounded-full'>
                                          <div className='bg-white rounded-full px-8 py-12 flex flex-col'>
                                                <div className='text-center font-semibold'>{totalCandidiate}</div>
                                                <div className='text-center font-semibold'>Candidiate</div>
                                          </div>
                                    </div>
                              </div>
                              <div className='hover:bg-slate-300 p-4 rounded-full'>
                                    <div className='p-10 bg-slate-600 rounded-full'>
                                          <div className='bg-white rounded-full px-12 py-12 flex flex-col'>
                                                <div className='text-center font-semibold'>{totalMoved}</div>
                                                <div className='text-center font-semibold'>Moved</div>
                                          </div>
                                    </div>
                              </div>
                              <div className='hover:bg-slate-300 p-4 rounded-full'>
                                    <div className='p-10 bg-slate-600  rounded-full'>
                                          <div className='bg-white rounded-full px-12 py-12 flex flex-col'>
                                                <div className='text-center font-semibold'>{totalHired}</div>
                                                <div className='text-center font-semibold'>Hired</div>
                                          </div>
                                    </div>
                              </div>

                        </div>


                        <div className='my-2 shadow-2xl shadow-gray-400 p-12 border border-slate-200 rounded-lg mt-8'>
                              <div className="overflow-x-auto">
                                    <table className="table">
                                          {/* head */}
                                          <thead>
                                                <tr className='  font-semibold '>
                                                      <th className=''></th>
                                                      <th>Views</th>
                                                      <th>Total Candidiates</th>
                                                      <th>Moved Forward</th>
                                                      <th>Hired</th>
                                                </tr>
                                          </thead>
                                          <tbody>

                                                {
                                                      candidiateSourceData?.map((data, index) => (<tr key={index}>
                                                            <td className='font-semibold text-md'>{data.job}</td>
                                                            <td className=''>{data.views}</td>
                                                            <td>{data.candidiate}</td>
                                                            <td>{data.moved}</td>
                                                            <td>{data.hired}</td>

                                                      </tr>))
                                                }

                                          </tbody>
                                    </table>
                              </div>
                        </div>
                  </div>

            </div>

      );
};

export default CandidateSource;