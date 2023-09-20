import React, { useEffect, useRef, useState } from 'react';
// import { useForm, SubmitHandler } from "react-hook-form"
import { useForm } from 'react-hook-form';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useSelector, useDispatch } from "react-redux"

import { BsPinAngle } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { getAllApplications } from '../../../redux/application/api';


const PeopleSearch = () => {

    const ref = useRef(null)
    const [application, setApplication] = useState(null)
    const [search, setSearch] = useState(null)
    console.log("Get application", application);
    // console.log("dfghsdjg", search);

    const options = [
        { level: 'Keywords' },
        { level: 'ABC' },
        { level: 'XYZ' },
    ];

    const [value, setValue] = useState();

    function handleSelect(event) {
        setValue(event.target.value)
    }
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();



    useEffect(() => {
        const URL = `https://server-job-swift.vercel.app/all-applications2?search=${search}`;
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                // Set the profile data in the state
                setApplication(data);
            })
            .catch((error) => {
                console.error("Error fetching profile data:", error);
            });
    }, [application, search]);

    const serchingPeople = (data) => {
        console.log(data.search);
        setSearch(data.search);
    }



    return (
        <div className='pt-20 lg:md:px-24 bg-white px-4'>

            <Tabs className="pt-3 ">
                <TabList className={'font-bold flex gap-7 border-b-2'}>
                    <Tab className="border-b-2 pb-2 -mb-[2px]"><button>SEARCH</button></Tab>
                    <Tab className=" border-b-2 pb-2 -mb-[2px]"><button>PINNED SEARCHES</button></Tab>
                </TabList>

                {/* tab 1----------------------------- */}
                <TabPanel className={'bg-[#fff]'}>
                    <div className=''>



                        <form className='pt-3 ' ref={ref} onSubmit={handleSubmit(serchingPeople)}>

                            <div className='pt-4'>
                                <div className='flex justify-between'>
                                    <h2>Search</h2>

                                    <div className='flex lg:md:gap-5 gap-2'>
                                        <button className='flex justify-center gap-1'>
                                            <BsPinAngle className='mt-1'></BsPinAngle>
                                            <h2>Pin this search</h2>
                                        </button>
                                        <button className='flex justify-center gap-1'>
                                            <RxCross2 className='mt-1 bg-slate-500 rounded-full text-white'></RxCross2>
                                            <h2>Clear all</h2>
                                        </button>
                                    </div>
                                </div>



                                <div className='flex'>
                                    {/* Dropdown */}
                                    <div className='rounded-l-md h-10 mt-[8px] lg:md:w-[10%]'>
                                        <select className='pt-[6px] ps-3' onChange={handleSelect}>
                                            {options.map((option, index) => (
                                                <option className='' key={index} value={option.level}>
                                                    {option.level}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {/* -------------- */}
                                    <div className='w-[100%]'>
                                        {/* <input className='mt-2 border border-[#c4cfde] rounded-l-md w-[20%] h-10 ' {...register('search')} /> */}

                                        <input type='search' className='mt-2 border border-[#c4cfde] rounded-r-md w-[100%] h-10 ' {...register('search', { required: true })} />
                                        <span className='-ms-7 bg-slate-400 px-[5px] rounded-full text-white text-sm'>?</span>
                                        {errors.company && <p className='text-red-400 mt-1'>Search text is required.</p>}

                                    </div>
                                </div>


                            </div>
                            <div className='lg:md:flex lg:md:justify-between grid justify-center '>
                                <div className='pt-5'>
                                    <h2>Location</h2>
                                    <input type='location' className='mt-2 border border-[#c4cfde] rounded-md w-[300px] h-10 ' {...register('location', { required: true })} />
                                    {errors.location && <p className='text-red-400 mt-1'>Location is required.</p>}
                                </div>
                                <div className='pt-5'>
                                    <h2>Company</h2>
                                    <input type='company' className='mt-2 border border-[#c4cfde] rounded-md w-[300px] h-10' {...register('company', { required: true })} />
                                    {errors.company && <p className='text-red-400 mt-1'>Company name is required.</p>}
                                </div>
                                <div className='pt-5'>
                                    <h2>University</h2>
                                    <input type='university' className='mt-2 border border-[#c4cfde] rounded-md  h-10 w-[300px]' {...register('university', { required: true })} />
                                    {errors.university && <p className='text-red-400 mt-1'>University name is required.</p>}
                                </div>
                                <div className='py-12 flex items-center '>
                                    <input className='py-[8px] mt-1 border-lime-900 bg-emerald-700 w-[300px] text-white rounded-md hover:bg-orange-500 hover:border-0 ' type="submit" />
                                </div>
                            </div>
                        </form>
                    </div>

                    {
                        search ? <>    <div>
                            {
                                application?.map((data, index) => {
                                    return <div key={index} className="card card-side bg-green-100 shadow-md rounded-md my-8">
                                        <figure><img src={data?.image} alt="Not Found" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{data?.jobTitle}</h2>
                                            <p>{data?.summary}</p>
                                            {/* <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Watch</button>
                                    </div> */}
                                        </div>
                                        <div className='flex justify-end mr-8 my-5'>
                                            <div>
                                                <div><span className='font-semibold mr-3'>Email:</span> {data?.email}</div>
                                                <div><span className='font-semibold mr-3'>Location:</span>{data?.location}</div>
                                                <div><span className='font-semibold mr-3'>Stage:</span>{data?.stage}</div>
                                            </div>

                                        </div>
                                    </div>
                                })
                            }

                        </div></> : <>
                            <div className='grid justify-center py-10 bg-[#f2f4f5] px-2 border-t-4 '>
                                <img className='w-40 mx-auto' src="https://i.ibb.co/xjQYzwJ/people-Search.png" alt="img" />
                                <div className='text-center text-[#333e49]'>
                                    <h2 className='text-black text-2xl my-3'>Find the right candidate with People Search</h2>
                                    <p>Publish a job and receive 75 profile views
                                        <br />
                                        <span>to use on People Search, including AI Recruiter.</span>
                                        <br />
                                    </p>
                                    <Link to="/dashboard/jobs/post-job"><button className='my-5 btn rounded-lg bg-[#00756a] text-white hover:bg-orange-600'>Publish a job</button></Link>

                                    <p className=''>How to use <a className='text-[#00756a] hover:underline' href="">People Search</a>  and <a className='text-[#00756a] hover:underline' href="">AI Recruiter</a></p>
                                </div>

                            </div>
                        </>
                    }





                </TabPanel>

                {/* tab 2------------------------------ */}
                <TabPanel >
                    <div className='bg-[#f2f4f5] mt-2'>
                        <div className='grid justify-center text-center text-[#333e49] pb-40'>
                            <BsPinAngle className='text-5xl mx-auto my-10 mt-20 text-[#88929e]'></BsPinAngle>
                            <h2 className='text-2xl'>No pinned searches yet!</h2>
                            <p className='my-5 text-sm'>Pin a search to reuse it later.</p>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div >

    );
};

export default PeopleSearch;