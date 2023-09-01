import React, { useContext } from 'react';
import './forgotPassword.css';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { BiLeftArrowAlt } from 'react-icons/bi';
import { authContext } from '../../Auth/AuthProvider';
import { toast } from 'react-hot-toast';



const ForgotPassword = () => {
    const {resetPassword} = useContext(authContext);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
 

    const onSubmit = (data)=>{
        console.log(data);
        const email = data.email;
        console.log(email);

        resetPassword(email)
        .then(()=>{
           toast.success('Reset link has been sent to your mail')
        })
        .catch(error=>{
          
            const errorMessage = error.message;
         toast.error(errorMessage);
        
        })
    }





    return (
      <div className=''>
         <div className=' bg-fuchsia-950 my-2 lg:md:rounded-tl-[100px] lg:md:rounded-br-[100px]'>
         <div className='lg:md:py-24 lg:md:px-40 p-10 px-5'>
            <div className=' py-20 forgotPasswordBG h-[100%] w-[100%] lg:md:rounded-tl-[100px] lg:md:rounded-br-[100px]'>
               <div>
               <form className='lg:md:ps-20 ps-3' onSubmit={handleSubmit(onSubmit)}>
               <h2 className='text-white lg:md:text-3xl font-bold mb-5'>Forgot Your Password ?</h2>

                    <div className='pt-5'>
                    <h2 className='text-white '>Enter your email</h2>

                        <input className='mt-2 border border-[#c4cfde] rounded-md lg:md:w-[300px] h-10 md:lg: p-2' {...register('email', { required: true })} />
                        {errors.company && <p className='text-white mt-1'>Email is required.</p>}
                    </div>
                    {/* <div className='mt-5'>
                        <h2>email</h2>
                        <input className='mt-2 border border-[#c4cfde] rounded-md w-[300px] h-10' {...register('email', { required: true })} />
                        {errors.company && <p className='text-red-400 mt-1'>Email is required.</p>}
                    </div> */}
                    <div className='py-6 flex items-center '>
                        <input className='btn btn-outline bg-amber-500 lg:md:w-[300px]' type="submit" />
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