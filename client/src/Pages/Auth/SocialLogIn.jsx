import React from 'react';
import {
    FaGoogle

} from "react-icons/fa";

import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../../Auth/AuthProvider';


const SocialLogIn = () => {
    const { googleSignIn } = useContext(authContext);
    // console.log(user?.pd);
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser);

                navigate(from, { replace: true })
                // navigate("/")

            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div>
            <div className='divider'></div>
            <div className='my-4 text-center'>
                <button onClick={handleGoogle} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogIn;