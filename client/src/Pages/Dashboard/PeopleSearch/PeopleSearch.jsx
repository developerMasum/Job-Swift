import React, { useState } from 'react';
// import { useForm, SubmitHandler } from "react-hook-form"
import { useForm } from 'react-hook-form';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import image from '../../../assets/Image/peopleSearch.png'
import { BsPinAngle } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';


const PeopleSearch = () => {

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

    return (
        <div className='pt-20'>

            <Tabs className="pt-5 ">
                <TabList className={'font-bold flex gap-7'}>
                    <Tab className="btn btn-outline btn-sm">SEARCH</Tab>
                    <Tab className="btn btn-outline btn-sm">PINNED SEARCHES</Tab>
                </TabList>

                {/* tab 1----------------------------- */}
                <TabPanel className={'bg-[#fff]'}>
                    <div className=''>



                        <form className='p-5' onSubmit={handleSubmit((data) => console.log(data))}>



                            <div className='pt-10'>
                                <div className='flex justify-between'>
                                    <h2>Search</h2>

                                    <div className='flex gap-5'>
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
                                    <div className=' border border-[#c4cfde] rounded-l-md h-10 mt-2 lg:md:w-[10%]'>
                                        <select className='pt-2 ps-3' onChange={handleSelect}>
                                            {options.map((option, index) => (
                                                <option key={index} value={option.level}>
                                                    {option.level}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {/* -------------- */}
                                    <div className='w-[100%]'>
                                        {/* <input className='mt-2 border border-[#c4cfde] rounded-l-md w-[20%] h-10 ' {...register('search')} /> */}

                                        <input className='mt-2 border border-[#c4cfde] rounded-r-md w-[100%] h-10 ' {...register('search', { required: true })} />
                                        <span className='-ms-7 bg-slate-400 px-[5px] rounded-full text-white text-sm'>?</span>
                                        {errors.company && <p className='text-red-400 mt-1'>Search text is required.</p>}

                                    </div>
                                </div>


                            </div>
                            <div className='lg:md:flex justify-between'>
                                <div className='pt-5'>
                                    <h2>Location</h2>
                                    <input className='mt-2 border border-[#c4cfde] rounded-md w-[300px] h-10 ' {...register('location', { required: true })} />
                                    {errors.location && <p className='text-red-400 mt-1'>Location is required.</p>}
                                </div>
                                <div className='pt-5'>
                                    <h2>Company</h2>
                                    <input className='mt-2 border border-[#c4cfde] rounded-md w-[300px] h-10' {...register('company', { required: true })} />
                                    {errors.company && <p className='text-red-400 mt-1'>Company name is required.</p>}
                                </div>
                                <div className='pt-5'>
                                    <h2>University</h2>
                                    <input className='mt-2 border border-[#c4cfde] rounded-md  h-10 w-[300px]' {...register('university', { required: true })} />
                                    {errors.university && <p className='text-red-400 mt-1'>University name is required.</p>}
                                </div>
                                <div className='py-12 flex items-center '>
                                    <input className='btn btn-outline bg-gray-400 w-[300px] ' type="submit" />
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className='grid justify-center py-10 bg-[#f2f4f5] px-2'>
                        <img className='w-40 mx-auto' src={image} alt="img" />
                        <div className='text-center text-[#333e49]'>
                            <h2 className='text-black text-2xl my-3'>Find the right candidate with People Search</h2>
                            <p>Publish a job and receive 75 profile views
                                <br />
                                <span>to use on People Search, including AI Recruiter.</span>
                                <br />
                            </p>
                            <button className='my-5 btn bg-[#00756a] text-white hover:bg-orange-600'>Publish a job</button>

                            <p className=' '>How to use <a className='text-[#00756a] hover:underline' href="">People Search</a>  and <a className='text-[#00756a] hover:underline' href="">AI Recruiter</a></p>
                        </div>

                    </div>

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
        </div>

    );
};

export default PeopleSearch;