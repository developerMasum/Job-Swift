import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsUnlock } from "react-icons/bs";

const UsersAdmin = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:5000/users";

    axios
      .get(apiUrl)
      .then((response) => {
        setUserData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="pl-36">
      <div className="pt-12 pb-8">
      <p className="font-bold">Users : <span className="">{userData.length}</span></p>
      <p className="text-primary font-bold"> Managing the Team Members </p>
      </div>
<div>
<table className="w-full border-collapse border-b">
      <thead>
        <tr>
          <th className="bg-gray-200 text-left px-4 py-2 font-bold">Serial</th>
          <th className="bg-gray-200 text-left px-4 py-2 font-bold">Username</th>
          <th className="bg-gray-200 text-left px-4 py-2 font-bold">Email</th>
          <th className="bg-gray-200 text-left px-4 py-2 font-bold">Company Name</th>
          <th className="bg-gray-200 text-left px-4 py-2 font-bold">Country</th>
          <th className="bg-gray-200 text-left px-4 py-2 font-bold">Role</th>
        </tr>
      </thead>
      <tbody>
      
      {
        userData.map((user,index)=> (
    
              <tr key={user._id} className="hover:bg-red-100">
          <td className="border-t px-4 py-2 ">{index +1 }</td>
          <td className="border-t px-4 py-2 ">{user.firstName} {user.lastName}</td>
          <td className="border-t px-4 py-2 ">{user.email}</td>
          <td className="border-t px-4 py-2 ">{user.companyName}</td>
          <td className="border-t px-4 py-2 ">{user.country}</td>
          <td className="border-t px-4 py-2  ">
            <button className="bg-cyan-500 flex gap-3 text-white px-2 py-1 rounded"> <BsUnlock /> user</button>
           
          </td>
        </tr>
            
            
           
        ))
      }
      </tbody>
    </table>
</div>


    </div>
  );
};

export default UsersAdmin;
