import React, { PureComponent } from 'react';
import {
      FaAngleLeft,
      FaAngleRight,
      FaAngleDown,
      FaAngleUp,
      FaAngleDoubleDown,
} from 'react-icons/fa';
import {
      ResponsiveContainer,
      ComposedChart,
      Line,
      Area,
      Bar,
      XAxis,
      YAxis,
      CartesianGrid,
      Tooltip,
      Legend,
} from 'recharts';

const CandidiateFlow = () => {

      const pipelineData = [
            { job: "Frontend Development", published: "23 August, 2023", sourced: "Linkind", applied: "2", phoneScreen: "yes", assessment: "", interview: "1", offer: "1", hired: "1" },
            { job: "Backend Development", published: "03 September, 2023", sourced: "Facebook", applied: "5", phoneScreen: "yes", assessment: "2", interview: "1", offer: "1", hired: "1" },
            { job: "NextJs Development", published: "02 November, 2023", sourced: "Google", applied: "4", phoneScreen: "no", assessment: "2", interview: "2", offer: "2", hired: "1" },

      ];

      const CandidiateFlowData = [
            {
                  name: 'August 01',
                  uv: 400,
                  pv: 400,
                  amt: 1400,
            },
            {
                  name: 'Page B',
                  uv: 868,
                  pv: 967,
                  amt: 1506,
            },
            {
                  name: 'Page C',
                  uv: 1397,
                  pv: 1098,
                  amt: 989,
            },
            {
                  name: 'Page D',
                  uv: 1480,
                  pv: 1200,
                  amt: 1228,
            },
            {
                  name: 'Page E',
                  uv: 1520,
                  pv: 1108,
                  amt: 1100,
            },
            {
                  name: 'Page F',
                  uv: 1400,
                  pv: 680,
                  amt: 1700,
            },
      ];



      return (
            <div className='pt-20'>
                  <div className="navbar  shadow-md p-4 shadow-slate-400 max-w-7xl">
                        <div className="navbar-start">
                              <div className="dropdown">
                                    <label tabIndex={0} className="ml-4 flex justify-center items-center  ">
                                          <h3 className='font-semibold text-2xl'>Candidiate Flow</h3>
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

                  <div className='pt-20' style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                              <ComposedChart
                                    width={500}
                                    height={400}
                                    data={CandidiateFlowData}
                                    margin={{
                                          top: 20,
                                          right: 20,
                                          bottom: 20,
                                          left: 20,
                                    }}
                              >
                                    <CartesianGrid stroke="#f5f5f5" />
                                    <XAxis dataKey="name" scale="band" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
                                    <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                                    <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                              </ComposedChart>
                        </ResponsiveContainer>
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
            </div>
      );
};

export default CandidiateFlow;