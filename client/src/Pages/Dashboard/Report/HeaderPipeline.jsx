import React from 'react';
import {
      FaAngleLeft,
      FaAngleRight,
      FaAngleDown,
      FaAngleUp,
      FaAngleDoubleDown,
} from 'react-icons/fa';
const HeaderPipeline = () => {
      return (
            <div className="navbar  shadow-md p-4 shadow-slate-400 max-w-7xl">
                  <div className="navbar-start">
                        <div className="dropdown">
                              <label tabIndex={0} className="ml-4 flex justify-center items-center  ">
                                    <h3 className='font-semibold text-2xl'> Current Pipeline</h3>
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
      );
};

export default HeaderPipeline;
