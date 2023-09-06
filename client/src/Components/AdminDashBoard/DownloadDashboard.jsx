import React, { useContext } from 'react';
import { BsDownload } from 'react-icons/bs';
import { authContext } from '../../Auth/AuthProvider';

const DownloadDashboard = () => {
    const {user} = useContext(authContext)
    // console.log(user);
    return (
        <div className='flex justify-between items-center mb-10'>
             <div>
                <p className='text-sm font-bold space-x-2'> Hey, {user?.displayName}</p>
                <p className='text-sm font-semibold space-x-2'>Welcome to your dashboard</p>
             </div>
             <div className=''>
                <button className='uppercase flex items-center justify-center gap-3  text-sm font-semibold border-2 border-cyan-500 text-gray-600 hover:bg-cyan-300 hover:text-white px-4 py-2 rounded-lg transition duration-300  '> <BsDownload /> Download report </button>
             </div>
        </div>
    );
};

export default DownloadDashboard;