import React from 'react';
import { GoDotFill } from 'react-icons/go';
import { SlBadge } from 'react-icons/sl';
import { CiShare2 } from 'react-icons/ci';
import { PiUserCircleGearThin } from 'react-icons/pi';
import { TfiWorld } from 'react-icons/tfi';
import { GoLink } from 'react-icons/go';
import { SlEnvolopeLetter } from 'react-icons/sl';
import { LiaUserPlusSolid } from 'react-icons/lia';
import { AiOutlineUserSwitch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import fb from '../../../../../assets/icones/facebook.png'
import linkedin from '../../../../../assets/icones/linkedin.png'
import twitter from '../../../../../assets/icones/twitter.png'
const FindCandidates = () => {
    return (
        <div className='bg-[#f2f4f5] pt-60'>
            {/* <div>
                <FindCandidatesNav></FindCandidatesNav>
            </div> */}

            {/* STATUS: */}
            <div className=' mx-2  bg-[#fff6df] lg:md:p-5 px-2 border border-[#ffe6ae] lg:md:text-[14px]'>
                <h2>STATUS: This job cannot be published on job boards, as it doesn’t meet all the job boards’ requirements. To post your job in job boards, double check the following:</h2>
                <br />
                <h2>Account-related warnings</h2>
                <h2 className='flex align-middle gap-5 lg:md:ms-5 mt-2'>
                    <GoDotFill className='mt-1'></GoDotFill>
                    <p>Your <a className='text-[#915223] underline' href="">email address</a>
                        must match your company's website domain, or appear on the contact page.
                    </p>
                </h2>
            </div>

            {/* 1 Get off to the right start --------------------------------------------------------------*/}
            <div className=''>
                <div className='flex my-5 gap-5'>
                    <h1 className=' bg-slate-500 text-white py-1 px-3 rounded-full text-[15px] font-bold'>1</h1>
                    <h1 className='text-[#333e49] text-2xl font-bold'>Get off to the right start</h1>
                </div>

                {/* line and card */}
                <div className='flex gap-5 ms-4 -mt-5'>

                    {/* line */}
                    <div className='border-l-2 border-[#c4cfde]'></div>


                    {/* cards Get off to the right start-------------*/}
                    <div>
                        <h2 className='mt-2 ms-3 text-[#333E49] text-[15px]'>Get the most quality candidates quickly - these actions are our top performers.</h2>

                        <div className='my-10 lg:md:grid grid-cols-4 gap-4'>

                            {/* card */}
                            <Link>
                                <div className="card w-72 rounded-md bg-base-100 shadow-xl hover:border-2 hover:border-green-700">
                                    <figure className="px-10 pt-10">
                                        <SlBadge className='text-6xl'></SlBadge>
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">Referrals</h2>
                                        <small>Send an email to your employees inviting them to submit
                                            referrals in Workable Referrals or add a custom reward.
                                        </small>
                                        <div className="card-actions">
                                            <Link className='text-green-900 mt-5 hover:underline' to={''}>Edit Referrals settings</Link>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            {/* card */}
                            <Link>
                                <div className="card w-72 rounded-md bg-base-100 shadow-xl  hover:border-green-700">
                                    <figure className="px-10 pt-10">
                                    <LiaUserPlusSolid className='text-6xl'></LiaUserPlusSolid>
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">Passive Candidates</h2>
                                        <h2 className='px-4 py-1 bg-[#4d52b1] text-white text-sm rounded-md'>
                                            AI RECRUITER
                                        </h2>
                                        <small className='mt-3'>profiles match your job.</small>
                                        <div className="card-actions">
                                            <Link className='text-green-900 mt-5 hover:underline' to={''}>Preview Candidates</Link>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            {/* card */}
                            <Link>
                                <div className="card w-72 rounded-md bg-base-100 shadow-xl  hover:border-green-700">
                                    <figure className="px-10 pt-10">
                                    <AiOutlineUserSwitch className='text-6xl'></AiOutlineUserSwitch>
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">Passive Candidates</h2>
                                        <h2 className='px-4 py-1 bg-[#4d52b1] text-white text-sm rounded-md'>
                                            AI RECRUITER
                                        </h2>
                                        <small className='mt-3'>profiles match your job.</small>
                                        <div className="card-actions">
                                            <Link className='text-green-900 mt-5 hover:underline' to={''}>Preview Candidates</Link>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                           



                        </div>


                    </div>
                    {/* cards Get off to the right start------------- end*/}


                </div>
            </div>

            {/* 2 More options to consider */}
            <div className='pt-10 -mt-16'>
                <div className='flex my-5 gap-5'>
                    <h1 className=' bg-slate-500 text-white py-1 px-3 rounded-full text-[15px] font-bold'>2</h1>
                    <h1 className='text-[#333e49] text-2xl font-bold'>More options to consider</h1>
                </div>

                {/* line and card */}
                <div className='flex gap-5 ms-4 -mt-5'>

                    {/* line */}
                    <div className='border-l-2 border-[#c4cfde]'></div>


                    {/*2 cards Get off to the right start-------------*/}
                    <div>
                        <h2 className='mt-2 ms-3 text-[#333E49] text-[15px]'>Get the most quality candidates quickly - these actions are our top performers.</h2>

                        <div className='my-10 lg:md:grid grid-cols-4 gap-3'>



                            {/* card */}
                            <Link>
                                <div className="card w-72 h-60 rounded-md bg-base-100 shadow-xl hover:border-2 hover:border-green-700 text-[#333e49]">
                                    <figure className="px-10 pt-4">
                                        <PiUserCircleGearThin className='text-5xl '></PiUserCircleGearThin>
                                    </figure>
                                    <div className=" items-center text-center mx-5">
                                        <h2 className=" text-center font-bold mt-5 mb-2">Invite Recruiters</h2>
                                        <small>
                                            Add external recruiters to your job and allow them to add candidates into Workable easily.
                                        </small>
                                        <div className="mt-5">
                                            <Link className='text-green-900  hover:underline font-bold' to={''}>Invite now</Link>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            {/* card */}
                            <div className="card w-72 h-60 rounded-md bg-base-100 shadow-xl  text-[#333e49]">
                                <figure className="px-10 pt-4">
                                    <CiShare2 className='text-5xl'></CiShare2>

                                </figure>
                                <div className=" items-center text-center">
                                    <h2 className="text-center font-bold mt-5 mb-2">Share on Social Medias</h2>

                                    <div className=" flex gap-6 mt-7 justify-center">
                                        <a href=""><img className='h-6 hover:h-7' src={fb} alt="" /></a>
                                        <a href=""><img className='h-6 hover:h-7' src={linkedin} alt="" /></a>
                                        <a href=""><img className='h-6 hover:h-7' src={twitter} alt="" /></a>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                    {/* cards Get off to the right start------------- end*/}


                </div>
            </div>

            {/* 3 Finally, a few smaller actions you can take */}
            <div className='pt-10 -mt-16'>
                <div className='flex my-5 gap-5'>
                    <h1 className=' bg-slate-500 text-white py-1 px-3 rounded-full text-[15px] font-bold'>3</h1>
                    <h1 className='text-[#333e49] text-2xl font-bold'>Finally, a few smaller actions you can take</h1>
                </div>

                {/* line and card */}
                <div className='flex gap-5 ms-4 -mt-5'>

                    {/* line */}
                    <div className='border-l-2 border-[#c4cfde]'></div>


                    {/* cards Get off to the right start-------------*/}
                    <div>
                        <h2 className='mt-2 ms-3 text-[#333E49] text-[15px]'>Actions that ensure you’re receiving candidates from everywhere in your recruiting mix.</h2>

                        <div className='my-10 lg:md:grid grid-cols-4 gap-3'>

                            {/* card */}
                            <Link>
                                <div className="card w-72 h-80 rounded-md bg-base-100 shadow-xl hover:border-2 hover:border-green-700 text-[#333e49]">
                                    <figure className="px-10 pt-5">
                                        <TfiWorld className='text-5xl '></TfiWorld>
                                    </figure>
                                    <div className=" items-center text-center mx-5">
                                        <h2 className=" text-center font-bold mt-5 mb-2">Website Connect</h2>
                                        <small>
                                            Embed your jobs on your website. We provide the code and update your page automatically.                                        </small>
                                        <div className="mt-24">
                                            <Link className='text-green-900  hover:underline font-bold' to={''}>Connect</Link>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            {/* card */}
                            <div className="card w-72 h-80 rounded-md bg-base-100 shadow-xl  text-[#333e49]">
                                <figure className="px-10 pt-5">
                                    <GoLink className='text-5xl '></GoLink>
                                </figure>
                                <div className=" items-center text-center mx-5">
                                    <h2 className=" text-center font-bold mt-5 mb-2">Job Shortlink</h2>
                                    <div>
                                        <h2 className='my-2 overflow-scroll border-dashed border-2 border-[#c4cfde] rounded-lg p-2'>https://apply.workable.com/j/CC64E678EA</h2>
                                    </div>
                                    <div className=''>
                                        <small>
                                            Want to share the job elsewhere? Post wherever you’d like using the job shortlink. We report on it, too.
                                        </small>
                                        <div className="mt-10">
                                            <Link className='text-green-900  hover:underline font-bold' to={''}>Copy to clipboard</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* card */}
                            <div className="card w-72 h-80 rounded-md bg-base-100 shadow-xl  text-[#333e49]">
                                <figure className="px-10 pt-5">
                                    <SlEnvolopeLetter className='text-5xl '></SlEnvolopeLetter>
                                </figure>
                                <div className=" items-center text-center mx-5">
                                    <h2 className=" text-center font-bold mt-5 mb-2">Job Mailbox</h2>
                                    <div>
                                        <h2 className='my-2 overflow-scroll border-dashed border-2 border-[#c4cfde] rounded-lg p-2'>CC64E678EA@jobs.workablemail.com</h2>
                                    </div>
                                    <small>
                                        Send resumes directly into your job using the job mailbox email address.
                                    </small>
                                    <div className="mt-14">
                                        <Link className='text-green-900  hover:underline font-bold' to={''}>Copy to clipboard</Link>
                                    </div>
                                </div>
                            </div>


                        </div>


                    </div>
                    {/* cards Get off to the right start------------- end*/}


                </div>
            </div>

            {/* 4 Happy recruiting! Good luck. */}
            <div className='pt-10 -mt-16'>
                <div className='flex my-5 gap-5'>
                    <h1 className=' bg-slate-500 text-white py-1 px-3 rounded-full text-[15px] font-bold'>4</h1>
                    <h1 className='text-[#333e49] text-2xl font-bold'>Happy recruiting! Good luck.</h1>
                </div>


            </div>
        </div>
    );
};

export default FindCandidates;