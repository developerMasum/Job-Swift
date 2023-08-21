import React from 'react';
import './forgotPassword.css';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { BiLeftArrowAlt } from 'react-icons/bi';



const ForgotPassword = () => {



    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    return (
      <div className=''>
         <div className=' bg-fuchsia-950 my-2 rounded-tl-[100px] rounded-br-[100px]'>
         <div className='py-40 px-40'>
            <div className=' py-20 forgotPasswordBG h-[100%] w-[100%] rounded-tl-[100px] rounded-br-[100px]'>
               <div>
               <form className='lg:md:ps-20' onSubmit={handleSubmit((data) => console.log(data))}>
               <h2 className='text-white text-3xl font-bold mb-5'>Forgot Your Password ?</h2>

                    <div className='pt-5'>
                    <h2 className='text-white '>Enter your email</h2>

                        <input className='mt-2 border border-[#c4cfde] rounded-md w-[300px] h-10' {...register('email', { required: true })} />
                        {errors.company && <p className='text-white mt-1'>Email is required.</p>}
                    </div>
                    {/* <div className='mt-5'>
                        <h2>email</h2>
                        <input className='mt-2 border border-[#c4cfde] rounded-md w-[300px] h-10' {...register('email', { required: true })} />
                        {errors.company && <p className='text-red-400 mt-1'>Email is required.</p>}
                    </div> */}
                    <div className='py-6 flex items-center '>
                        <input className='btn btn-outline bg-amber-500 w-[300px]' type="submit" />
                    </div>
                    <Link to='/login' className='text-white flex items-center hover:text-amber-400'> <BiLeftArrowAlt></BiLeftArrowAlt>Back to sign in</Link>
                </form>
                
               </div>
            </div>
        </div>
       </div>
      </div>
    );
};

export default ForgotPassword;