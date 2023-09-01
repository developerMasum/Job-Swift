import React from 'react';
import { Link } from 'react-router-dom';
import { BiChevronDown } from 'react-icons/bi';

const FindCandidatesNav = () => {
    return (
        <div className=''>
            <div className='bg-white fixed top-[68px]'>
                <div className='flex justify-between px-1 pt-4'>
                    <div>
                        <h2 className='text-3xl ms-5'>Web Developer</h2>
                    </div>
                    <div className='flex gap-2 items-center'>
                        {/* <button className='flex items-center'>View Candidates
                        <button className=''><BiChevronDown></BiChevronDown></button>
                    </button> */}


                        {/* dropdown  view candidates */}
                        <div className="dropdown relative group hover:underline">
                            <label
                                tabIndex={0}
                                className="rounded-full transition duration-300 transform "
                            >
                                <button className='flex items-center'>View Candidates
                                    <button className=''><BiChevronDown></BiChevronDown></button>
                                </button>
                            </label>
                            <ul
                                tabIndex={0}
                                className="-ms-14 py-4 menu menu-sm dropdown-content mt-1 px-4 shadow-xl bg-white rounded-md w-max"
                            >
                                <div className="text-black">
                                    <h2 className='ps-3 pe-5 py-4'>Select pipeline stage</h2>
                                    <li>
                                        <Link>Sourced</Link>
                                    </li>
                                    <li>
                                        <Link>Applied{'(2)'}</Link>
                                    </li>
                                    <li>
                                        <Link>Phone Screen</Link>
                                    </li>
                                    <li>
                                        <Link>Assessment</Link>
                                    </li>
                                    <li>
                                        <Link>Interview</Link>
                                    </li>
                                    <li>
                                        <Link>Offer</Link>
                                    </li>
                                    <li>
                                        <Link>Hired</Link>
                                    </li>
                                </div>
                            </ul>
                        </div>
                        {/* dropdown end */}

                        <Link className='btn border border-black'>View Jobs</Link>
                        <Link className='btn bg-[#00756a] text-white hover:bg-lime-800'>Update</Link>


                        {/* dropdown  publish career page only*/}
                        <div className="dropdown relative group">
                            <label
                                tabIndex={0}
                                className="rounded-full transition duration-300 transform "
                            >
                                <button className='btn btn-error text-white hover:bg-orange-700'>Published {"(Career Page Only)"}
                                    <button><BiChevronDown></BiChevronDown> </button>
                                </button>
                            </label>
                            <ul
                                tabIndex={0}
                                className=" menu menu-sm dropdown-content mt-1 shadow-xl bg-white rounded-md w-72"
                            >
                                <div className="text-black">
                                    <li className='bg-[#fff6df]'>
                                        <Link className='font-small mt-2'>Published (Careers page only)
                                            <br />
                                            <br />
                                            There are issues that will prevent this job being
                                            published on some job boards. Please check
                                            the job for details.

                                        </Link>
                                    </li>
                                    <li className='border-t-2'></li>
                                    <li className=' hover:bg-[#fff6df]'>
                                        <Link>Unpublish & use internally
                                            <br />
                                            <br />


                                            Visible to your Workable account members only.
                                            Account members can refer candidates or ask to join the hiring team.
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        </div>
                        {/* dropdown end */}


                    </div>

                </div>

                <div className='flex gap-1  lg:md:pt-6 lg:md:pb-5'>
                    <Link to='jobDetails'>
                        <p className=' hover:bg-[#f2f4f5] ms-4 ps-4 lg:md:pe-32 py-2 rounded-lg'>
                            Job details
                        </p>
                    </Link>
                    <div className='flex items-center gap-1'>
                        <p className='border-l-2 h-8'></p>
                        <Link to='applicationForm'>
                            <p className=' hover:bg-[#f2f4f5] px-4 lg:md:pe-32 py-2 rounded-lg'>
                                Application Form
                            </p>
                        </Link>
                    </div>
                    <div className='flex items-center gap-1'>
                        <p className='border-l-2 h-8'></p>
                        <Link to="candidates">
                            <p className=' hover:bg-[#f2f4f5] px-4 lg:md:pe-32 py-2 rounded-lg'>
                                Find Candidates
                            </p>
                        </Link>

                    </div>
                    <div className='flex items-center gap-1'>
                        <p className='border-l-2 h-8'></p>
                        <Link to="teamMembers">
                            <p className=' hover:bg-[#f2f4f5] px-4 lg:md:pe-32 py-2 rounded-lg'>
                                Team Members
                            </p>
                        </Link>

                    </div>
                    <div className='flex items-center gap-1'>
                        <p className='border-l-2 h-8'>

                        </p>
                        <Link to='workflow'>
                            <p className=' hover:bg-[#f2f4f5] px-4 lg:md:pe-32 py-2 rounded-lg'>
                                Workflow</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindCandidatesNav;