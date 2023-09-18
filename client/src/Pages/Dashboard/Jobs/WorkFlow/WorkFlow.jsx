import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FiSettings } from 'react-icons/fi';
import { LiaUserEditSolid } from 'react-icons/lia';
import { LuPhoneCall } from 'react-icons/lu';
import { RiListCheck3 } from 'react-icons/ri';
import { PiWechatLogoBold } from 'react-icons/pi';
import { BsVectorPen } from 'react-icons/bs';
import { ImCheckmark2 } from 'react-icons/im';
import { AiOutlineStar } from 'react-icons/ai';
import { PiVideoThin } from 'react-icons/pi';
import { SlSpeedometer } from 'react-icons/sl';

const WorkFlow = () => {
    return (
        <div>
            <h2 className='lg:md:pt-60 pt-[470px]  lg:md:ms-8 ms-2 text-xl mb-4 text-[#636d77] '>Default pipeline</h2>
            <Tabs>
                <TabList className={' bg-slate-200  flex justify-between lg:md:mx-8 mx-2'}>

                    <Tab
                        className={'lg:md:py-5 py-2 px-2 lg:md:px-10 hover:bg-white text-[#636d77] cursor-not-allowed pointer-events-none'}>
                        <FiSettings className='mx-auto lg:md:text-2xl mb-2'></FiSettings>
                        <h2 className=' text-[10px] lg:md:text-sm'>Sourced</h2>
                    </Tab>

                    <Tab className={'lg:md:py-5 py-2 px-2 lg:md:px-10 hover:bg-white text-[#636d77] cursor-not-allowed pointer-events-none'}>
                        <LiaUserEditSolid className='mx-auto lg:md:text-2xl mb-2'></LiaUserEditSolid> <h2 className=' text-[10px] lg:md:text-sm'>Applied</h2>
                    </Tab>
                    <Tab className={'lg:md:py-5 py-2 px-2 lg:md:px-10 hover:bg-white text-[#636d77]'}>
                        <LuPhoneCall className='mx-auto lg:md:text-2xl mb-2'></LuPhoneCall> <h2 className=' text-[10px] lg:md:text-sm'>Phone Screen</h2>
                    </Tab>
                    <Tab className={'lg:md:py-5 py-2 px-2 lg:md:px-10 hover:bg-white text-[#636d77]'}>
                        <RiListCheck3 className='mx-auto lg:md:text-2xl mb-2'></RiListCheck3> <h2 className=' text-[10px] lg:md:text-sm'>Assessment</h2>
                    </Tab>
                    <Tab className={'lg:md:py-5 py-2 px-2 lg:md:px-10 hover:bg-white text-[#636d77]'}>
                        <PiWechatLogoBold className='mx-auto lg:md:text-2xl mb-2'></PiWechatLogoBold> <h2 className=' text-[10px] lg:md:text-sm'>Interview</h2>
                    </Tab>
                    <Tab className={'lg:md:py-5 py-2 px-2 lg:md:px-10 hover:bg-white text-[#636d77] cursor-not-allowed pointer-events-none'}>
                        <BsVectorPen className='mx-auto lg:md:text-2xl mb-2'></BsVectorPen> <h2 className=' text-[10px] lg:md:text-sm'>Offer</h2>
                    </Tab>
                    <Tab className={'lg:md:py-5 py-2 px-2 lg:md:px-10 hover:bg-white text-[#636d77] cursor-not-allowed pointer-events-none'}>
                        <ImCheckmark2 className='mx-auto lg:md:text-2xl mb-2'></ImCheckmark2> <h2 className=' text-[10px] lg:md:text-sm'>Hired</h2>
                    </Tab>

                </TabList>

                <TabPanel className={'lg:md:mx-8 mx-2 bg-white p-8 text-[#636d77]'}>
                    <h2 className='text-xl mb-6 text-black'>How would you like to evaluate candidates in this stage?</h2>
                    <div className='lg:md:flex gap-5 grid gap-y-5'>
                        <div className='border-slate-300 border rounded-md p-6 text-center lg:md:w-[50%]'>
                            <div className='grid justify-center text-3xl text-sky-600'>
                                <div className='mx-auto'><AiOutlineStar></AiOutlineStar></div>
                                <div className='flex'>
                                    <AiOutlineStar></AiOutlineStar>
                                    <AiOutlineStar></AiOutlineStar>
                                </div>
                            </div>
                            <h2 className='text-black text-xl pt-3'>Interview kits</h2>
                            <p className='text-sm my-3'>Add interview kits from templates or existing jobs to use during interviews for evaluations.</p>
                            <button disabled
                                className='btn btn-outline border-sky-600 hover:border-sky-600 hover:bg-sky-100 hover:text-sky-600 text-sky-600'>
                                Add interview kit
                            </button>
                        </div>
                        <div className='border-slate-300 border rounded-md p-6 text-center lg:md:w-[50%]'>
                            <div className='grid justify-center text-6xl text-sky-600'>
                                <div className='mx-auto'><PiVideoThin></PiVideoThin></div>

                            </div>
                            <h2 className='text-black text-xl pt-3'>Video interview</h2>
                            <p className='text-sm my-3'>Create and apply a structured video interview evaluation process.</p>
                            <button disabled
                                className='btn btn-outline border-sky-600 hover:border-sky-600 hover:bg-sky-100 hover:text-sky-600 text-sky-600'>
                                Add video interview
                            </button>
                        </div>
                        <div className='border-slate-300 border rounded-md p-6 text-center lg:md:w-[50%]'>
                            <div className='grid justify-center text-6xl text-sky-600'>
                                <div className='mx-auto'><SlSpeedometer></SlSpeedometer></div>

                            </div>
                            <h2 className='text-black text-xl pt-3'>Assessments</h2>
                            <p className='text-sm my-3'>Evaluate candidates’ suitability for the job and make unbiased hiring decisions based on data.</p>
                            <button disabled
                                className='btn btn-outline border-sky-600 hover:border-sky-600 hover:bg-sky-100 hover:text-sky-600 text-sky-600'>
                                Add Assessments
                            </button>
                        </div>

                    </div>
                </TabPanel>

                <TabPanel className={'lg:md:mx-8 mx-2 bg-white p-8 text-[#636d77] -mt-[64px]'}>
                    <h2 className='text-xl mb-6 text-black'>How would you like to evaluate candidates in this stage?</h2>
                    <div className='lg:md:flex gap-5 grid gap-y-5'>
                        <div className='border-slate-300 border rounded-md p-6 text-center lg:md:w-[50%]'>
                            <div className='grid justify-center text-3xl text-sky-600'>
                                <div className='mx-auto'><AiOutlineStar></AiOutlineStar></div>
                                <div className='flex'>
                                    <AiOutlineStar></AiOutlineStar>
                                    <AiOutlineStar></AiOutlineStar>
                                </div>
                            </div>
                            <h2 className='text-black text-xl pt-3'>Interview kits</h2>
                            <p className='text-sm my-3'>Add interview kits from templates or existing jobs to use during interviews for evaluations.</p>
                            <button
                                className='btn btn-outline border-sky-600 hover:border-sky-600 hover:bg-sky-100 hover:text-sky-600 text-sky-600'>
                                Add interview kit
                            </button>
                        </div>
                        <div className='border-slate-300 border rounded-md p-6 text-center lg:md:w-[50%]'>
                            <div className='grid justify-center text-6xl text-sky-600'>
                                <div className='mx-auto'><PiVideoThin></PiVideoThin></div>

                            </div>
                            <h2 className='text-black text-xl pt-3'>Video interview</h2>
                            <p className='text-sm my-3'>Create and apply a structured video interview evaluation process.</p>
                            <button
                                className='btn btn-outline border-sky-600 hover:border-sky-600 hover:bg-sky-100 hover:text-sky-600 text-sky-600'>
                                Add video interview
                            </button>
                        </div>
                        <div className='border-slate-300 border rounded-md p-6 text-center lg:md:w-[50%]'>
                            <div className='grid justify-center text-6xl text-sky-600'>
                                <div className='mx-auto'><SlSpeedometer></SlSpeedometer></div>

                            </div>
                            <h2 className='text-black text-xl pt-3'>Assessments</h2>
                            <p className='text-sm my-3'>Evaluate candidates’ suitability for the job and make unbiased hiring decisions based on data.</p>
                            <button
                                className='btn btn-outline border-sky-600 hover:border-sky-600 hover:bg-sky-100 hover:text-sky-600 text-sky-600'>
                                Add Assessments
                            </button>
                        </div>

                    </div>
                </TabPanel>

                <TabPanel className={'lg:md:mx-8 mx-2 bg-white p-8 text-[#636d77] -mt-[64px]'}>
                    <h2 className='text-xl mb-6 text-black'>How would you like to evaluate candidates in this stage?</h2>
                    <div className='lg:md:flex gap-5 grid gap-y-5'>
                        <div className='border-slate-300 border rounded-md p-6 text-center lg:md:w-[50%]'>
                            <div className='grid justify-center text-3xl text-sky-600'>
                                <div className='mx-auto'><AiOutlineStar></AiOutlineStar></div>
                                <div className='flex'>
                                    <AiOutlineStar></AiOutlineStar>
                                    <AiOutlineStar></AiOutlineStar>
                                </div>
                            </div>
                            <h2 className='text-black text-xl pt-3'>Interview kits</h2>
                            <p className='text-sm my-3'>Add interview kits from templates or existing jobs to use during interviews for evaluations.</p>
                            <button
                                className='btn btn-outline border-sky-600 hover:border-sky-600 hover:bg-sky-100 hover:text-sky-600 text-sky-600'>
                                Add interview kit
                            </button>
                        </div>
                        <div className='border-slate-300 border rounded-md p-6 text-center lg:md:w-[50%]'>
                            <div className='grid justify-center text-6xl text-sky-600'>
                                <div className='mx-auto'><PiVideoThin></PiVideoThin></div>

                            </div>
                            <h2 className='text-black text-xl pt-3'>Video interview</h2>
                            <p className='text-sm my-3'>Create and apply a structured video interview evaluation process.</p>
                            <button
                                className='btn btn-outline border-sky-600 hover:border-sky-600 hover:bg-sky-100 hover:text-sky-600 text-sky-600'>
                                Add video interview
                            </button>
                        </div>
                        <div className='border-slate-300 border rounded-md p-6 text-center lg:md:w-[50%]'>
                            <div className='grid justify-center text-6xl text-sky-600'>
                                <div className='mx-auto'><SlSpeedometer></SlSpeedometer></div>

                            </div>
                            <h2 className='text-black text-xl pt-3'>Assessments</h2>
                            <p className='text-sm my-3'>Evaluate candidates’ suitability for the job and make unbiased hiring decisions based on data.</p>
                            <button
                                className='btn btn-outline border-sky-600 hover:border-sky-600 hover:bg-sky-100 hover:text-sky-600 text-sky-600'>
                                Add Assessments
                            </button>
                        </div>

                    </div>
                </TabPanel>
                <TabPanel className={'lg:md:mx-8 mx-2 bg-white p-8 text-[#636d77] -mt-[64px]'}>
                    <h2 className='text-xl mb-6 text-black'>How would you like to evaluate candidates in this stage?</h2>
                    <div className='lg:md:flex gap-5 grid gap-y-5'>
                        <div className='border-slate-300 border rounded-md p-6 text-center lg:md:w-[50%]'>
                            <div className='grid justify-center text-3xl text-sky-600'>
                                <div className='mx-auto'><AiOutlineStar></AiOutlineStar></div>
                                <div className='flex'>
                                    <AiOutlineStar></AiOutlineStar>
                                    <AiOutlineStar></AiOutlineStar>
                                </div>
                            </div>
                            <h2 className='text-black text-xl pt-3'>Interview kits</h2>
                            <p className='text-sm my-3'>Add interview kits from templates or existing jobs to use during interviews for evaluations.</p>
                            <button
                                className='btn btn-outline border-sky-600 hover:border-sky-600 hover:bg-sky-100 hover:text-sky-600 text-sky-600'>
                                Add interview kit
                            </button>
                        </div>
                        <div className='border-slate-300 border rounded-md p-6 text-center lg:md:w-[50%]'>
                            <div className='grid justify-center text-6xl text-sky-600'>
                                <div className='mx-auto'><PiVideoThin></PiVideoThin></div>

                            </div>
                            <h2 className='text-black text-xl pt-3'>Video interview</h2>
                            <p className='text-sm my-3'>Create and apply a structured video interview evaluation process.</p>
                            <button
                                className='btn btn-outline border-sky-600 hover:border-sky-600 hover:bg-sky-100 hover:text-sky-600 text-sky-600'>
                                Add video interview
                            </button>
                        </div>
                        <div className='border-slate-300 border rounded-md p-6 text-center lg:md:w-[50%]'>
                            <div className='grid justify-center text-6xl text-sky-600'>
                                <div className='mx-auto'><SlSpeedometer></SlSpeedometer></div>

                            </div>
                            <h2 className='text-black text-xl pt-3'>Assessments</h2>
                            <p className='text-sm my-3'>Evaluate candidates’ suitability for the job and make unbiased hiring decisions based on data.</p>
                            <button
                                className='btn btn-outline border-sky-600 hover:border-sky-600 hover:bg-sky-100 hover:text-sky-600 text-sky-600'>
                                Add Assessments
                            </button>
                        </div>

                    </div>
                </TabPanel>
                <TabPanel className={'lg:md:mx-8 mx-2 bg-white p-8 text-[#636d77] -mt-[64px]'}>
                    <h2 className='text-xl mb-6 text-black'>How would you like to evaluate candidates in this stage?</h2>
                    <div className='lg:md:flex gap-5 grid gap-y-5'>
                        <div className='border-slate-300 border rounded-md p-6 text-center lg:md:w-[50%]'>
                            <div className='grid justify-center text-3xl text-sky-600'>
                                <div className='mx-auto'><AiOutlineStar></AiOutlineStar></div>
                                <div className='flex'>
                                    <AiOutlineStar></AiOutlineStar>
                                    <AiOutlineStar></AiOutlineStar>
                                </div>
                            </div>
                            <h2 className='text-black text-xl pt-3'>Interview kits</h2>
                            <p className='text-sm my-3'>Add interview kits from templates or existing jobs to use during interviews for evaluations.</p>
                            <button
                                className='btn btn-outline border-sky-600 hover:border-sky-600 hover:bg-sky-100 hover:text-sky-600 text-sky-600'>
                                Add interview kit
                            </button>
                        </div>
                        <div className='border-slate-300 border rounded-md p-6 text-center lg:md:w-[50%]'>
                            <div className='grid justify-center text-6xl text-sky-600'>
                                <div className='mx-auto'><PiVideoThin></PiVideoThin></div>

                            </div>
                            <h2 className='text-black text-xl pt-3'>Video interview</h2>
                            <p className='text-sm my-3'>Create and apply a structured video interview evaluation process.</p>
                            <button
                                className='btn btn-outline border-sky-600 hover:border-sky-600 hover:bg-sky-100 hover:text-sky-600 text-sky-600'>
                                Add video interview
                            </button>
                        </div>
                        <div className='border-slate-300 border rounded-md p-6 text-center lg:md:w-[50%]'>
                            <div className='grid justify-center text-6xl text-sky-600'>
                                <div className='mx-auto'><SlSpeedometer></SlSpeedometer></div>

                            </div>
                            <h2 className='text-black text-xl pt-3'>Assessments</h2>
                            <p className='text-sm my-3'>Evaluate candidates’ suitability for the job and make unbiased hiring decisions based on data.</p>
                            <button
                                className='btn btn-outline border-sky-600 hover:border-sky-600 hover:bg-sky-100 hover:text-sky-600 text-sky-600'>
                                Add Assessments
                            </button>
                        </div>

                    </div>
                </TabPanel>
                <TabPanel className={'lg:md:mx-8 mx-2 bg-white p-8 text-[#636d77] -mt-[64px]'}>
                    <h2 className='text-xl mb-6 text-black'>How would you like to evaluate candidates in this stage?</h2>
                    <div className='lg:md:flex gap-5 grid gap-y-5'>
                        <div className='border-slate-300 border rounded-md p-6 text-center lg:md:w-[50%]'>
                            <div className='grid justify-center text-3xl text-sky-600'>
                                <div className='mx-auto'><AiOutlineStar></AiOutlineStar></div>
                                <div className='flex'>
                                    <AiOutlineStar></AiOutlineStar>
                                    <AiOutlineStar></AiOutlineStar>
                                </div>
                            </div>
                            <h2 className='text-black text-xl pt-3'>Interview kits</h2>
                            <p className='text-sm my-3'>Add interview kits from templates or existing jobs to use during interviews for evaluations.</p>
                            <button
                                className='btn btn-outline border-sky-600 hover:border-sky-600 hover:bg-sky-100 hover:text-sky-600 text-sky-600'>
                                Add interview kit
                            </button>
                        </div>
                        <div className='border-slate-300 border rounded-md p-6 text-center lg:md:w-[50%]'>
                            <div className='grid justify-center text-6xl text-sky-600'>
                                <div className='mx-auto'><PiVideoThin></PiVideoThin></div>

                            </div>
                            <h2 className='text-black text-xl pt-3'>Video interview</h2>
                            <p className='text-sm my-3'>Create and apply a structured video interview evaluation process.</p>
                            <button
                                className='btn btn-outline border-sky-600 hover:border-sky-600 hover:bg-sky-100 hover:text-sky-600 text-sky-600'>
                                Add video interview
                            </button>
                        </div>
                        <div className='border-slate-300 border rounded-md p-6 text-center lg:md:w-[50%]'>
                            <div className='grid justify-center text-6xl text-sky-600'>
                                <div className='mx-auto'><SlSpeedometer></SlSpeedometer></div>

                            </div>
                            <h2 className='text-black text-xl pt-3'>Assessments</h2>
                            <p className='text-sm my-3'>Evaluate candidates’ suitability for the job and make unbiased hiring decisions based on data.</p>
                            <button
                                className='btn btn-outline border-sky-600 hover:border-sky-600 hover:bg-sky-100 hover:text-sky-600 text-sky-600'>
                                Add Assessments
                            </button>
                        </div>

                    </div>
                </TabPanel>
                <TabPanel className={'lg:md:mx-8 mx-2 bg-white p-8 text-[#636d77] -mt-[64px]'}>
                    <h2 className='text-xl mb-6 text-black'>How would you like to evaluate candidates in this stage?</h2>
                    <div className='lg:md:flex gap-5 grid gap-y-5'>
                        <div className='border-slate-300 border rounded-md p-6 text-center lg:md:w-[50%]'>
                            <div className='grid justify-center text-3xl text-sky-600'>
                                <div className='mx-auto'><AiOutlineStar></AiOutlineStar></div>
                                <div className='flex'>
                                    <AiOutlineStar></AiOutlineStar>
                                    <AiOutlineStar></AiOutlineStar>
                                </div>
                            </div>
                            <h2 className='text-black text-xl pt-3'>Interview kits</h2>
                            <p className='text-sm my-3'>Add interview kits from templates or existing jobs to use during interviews for evaluations.</p>
                            <button
                                className='btn btn-outline border-sky-600 hover:border-sky-600 hover:bg-sky-100 hover:text-sky-600 text-sky-600'>
                                Add interview kit
                            </button>
                        </div>
                        <div className='border-slate-300 border rounded-md p-6 text-center lg:md:w-[50%]'>
                            <div className='grid justify-center text-6xl text-sky-600'>
                                <div className='mx-auto'><PiVideoThin></PiVideoThin></div>

                            </div>
                            <h2 className='text-black text-xl pt-3'>Video interview</h2>
                            <p className='text-sm my-3'>Create and apply a structured video interview evaluation process.</p>
                            <button
                                className='btn btn-outline border-sky-600 hover:border-sky-600 hover:bg-sky-100 hover:text-sky-600 text-sky-600'>
                                Add video interview
                            </button>
                        </div>
                        <div className='border-slate-300 border rounded-md p-6 text-center lg:md:w-[50%]'>
                            <div className='grid justify-center text-6xl text-sky-600'>
                                <div className='mx-auto'><SlSpeedometer></SlSpeedometer></div>

                            </div>
                            <h2 className='text-black text-xl pt-3'>Assessments</h2>
                            <p className='text-sm my-3'>Evaluate candidates’ suitability for the job and make unbiased hiring decisions based on data.</p>
                            <button
                                className='btn btn-outline border-sky-600 hover:border-sky-600 hover:bg-sky-100 hover:text-sky-600 text-sky-600'>
                                Add Assessments
                            </button>
                        </div>

                    </div>
                </TabPanel>

            </Tabs>
        </div >
    );
};

export default WorkFlow;