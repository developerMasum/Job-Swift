import React from 'react';
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-16 md:w-12 lg:w-32 xl:w-48 flex flex-col items-center p-4">
        {/* User Photo */}
        <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-24 xl:h-24 rounded-full overflow-hidden mb-2">
          <img
            src="../../assets/logo/Job Swift.png"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>

        {/* User Info */}
        <div className="text-center">
          <p className="text-sm md:text-base">John Doe</p>
          <p className="text-xs md:text-sm">john.doe@example.com</p>
        </div>

        {/* HR */}
        <hr className="border-red-500 w-full my-4" />

        {/* Sidebar Links */}
        <div className="flex flex-col items-center space-y-4">
          <Link to={'admin/users'} className="text-lg md:text-xl lg:text-2xl xl:text-3xl">
            <AiOutlineHome />
          </Link>
          <a href="#" className="text-lg md:text-xl lg:text-2xl xl:text-3xl">
            <AiOutlineUser />
          </a>
          {/* Add more links here */}
        </div>

        {/* HR */}
        <hr className="border-red-500 w-full my-4" />

        {/* Logout */}
        <div className="mt-auto text-center">
          <a href="#" className="text-red-500 text-sm md:text-base">
            Logout
          </a>
        </div>
      </div>
{/* 
      Main Content */}
      {/* <div className="flex-1 bg-gray-100 p-8">
      
      </div> */}
    </div>
    );
};

export default AdminDashboard;