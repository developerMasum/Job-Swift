import { FaAngleDoubleDown } from 'react-icons/fa';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';

const HistoricPipeline = () => {

      const pipelineData = [
            { job: "Frontend Development", published: "23 August, 2023", sourced: "Linkind", applied: "2", phoneScreen: "yes", assessment: "", interview: "1", offer: "1", hired: "1" },
            { job: "Backend Development", published: "03 September, 2023", sourced: "Facebook", applied: "5", phoneScreen: "yes", assessment: "2", interview: "1", offer: "1", hired: "1" },
            { job: "NextJs Development", published: "02 November, 2023", sourced: "Google", applied: "4", phoneScreen: "no", assessment: "2", interview: "2", offer: "2", hired: "1" },

      ];
      const data = [
            {
                  name: 'June',
                  uv: 2000,
                  pv: 2400,
                  amt: 2400,
            },
            {
                  name: 'July',
                  uv: 3000,
                  pv: 1398,
                  amt: 2210,
            },
            {
                  name: 'August',
                  uv: 2000,
                  pv: 9800,
                  amt: 2290,
            },
            {
                  name: 'September',
                  uv: 2780,
                  pv: 3908,
                  amt: 2000,
            },
            {
                  name: 'October',
                  uv: 1890,
                  pv: 4800,
                  amt: 2181,
            },
            {
                  name: 'November',
                  uv: 2390,
                  pv: 3800,
                  amt: 2500,
            },
            {
                  name: 'December',
                  uv: 3490,
                  pv: 4300,
                  amt: 2100,
            },
      ];

      const cardinal = curveCardinal.tension(0.2);

      return (
            <div className='pt-20 '>
                  <div className="navbar  shadow-md p-4 shadow-slate-400 max-w-7xl mb-10">
                        <div className="navbar-start">
                              <div className="dropdown">
                                    <label tabIndex={0} className="ml-4 flex justify-center items-center  ">
                                          <h3 className='font-semibold text-2xl'>Historic Pipeline</h3>
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
                  <div className='lg:md:ms-32'>
                        <ResponsiveContainer width="80%" height="40%">
                              <AreaChart
                                    width={500}
                                    height={400}
                                    data={data}
                                    margin={{
                                          top: 10,
                                          right: 30,
                                          left: 0,
                                          bottom: 0,
                                    }}
                              >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                                    <Area type={cardinal} dataKey="uv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
                              </AreaChart>
                        </ResponsiveContainer>
                  </div>

                  <div className='my-2 shadow-2xl mt-10 shadow-gray-400 p-12 border border-slate-200 rounded-lg'>
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

export default HistoricPipeline;