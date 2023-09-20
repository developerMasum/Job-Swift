import { BsUnlock } from "react-icons/bs";
import { FaShekelSign } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/AdminHook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const UsersAdmin = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    // console.log(a);
    return res.data;
  });
  // console.log(users);

  const makeAdmin = (user) => {
    console.log("make admin", user);
    fetch(`  https://server-hazel-nine.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`  https://server-hazel-nine.vercel.app/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "User has been deleted.", "success");
              refetch();

              // const remaining = userData.filter((order) => order._id !== id);
              // setUserData(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="pl-48">
      <div className="pt-12 pb-8">
        <p className="font-bold">
          Users : <span className="">{users.length}</span>
        </p>
        <p className="text-cyan-700 font-bold"> Managing the Team Members </p>
      </div>
      <div>
        <table className="w-full border-collapse border-b">
          <thead>
            <tr>
              <th className="bg-gray-200 text-left px-4 py-2 font-bold">
                Serial
              </th>
              <th className="bg-gray-200 text-left px-4 py-2 font-bold">
                Username
              </th>
              <th className="bg-gray-200 text-left px-4 py-2 font-bold">
                Email
              </th>
              <th className="bg-gray-200 text-left px-4 py-2 font-bold">
                Company Name
              </th>
              <th className="bg-gray-200 text-left px-4 py-2 font-bold">
                Country
              </th>
              <th className="bg-gray-200 text-left px-4 py-2 font-bold">
                Role
              </th>
              <th className="bg-gray-200 text-left px-4 py-2 font-bold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="hover:bg-red-100">
                <td className="border-t px-4 py-2 ">{index + 1}</td>
                <td className="border-t px-4 py-2 ">
                  {user.firstName} {user.lastName}
                </td>
                <td className="border-t px-4 py-2 ">{user.email}</td>
                <td className="border-t px-4 py-2 ">{user.companyName}</td>
                <td className="border-t px-4 py-2 ">{user.country}</td>
                {/* <td className="border-t px-4 py-2  ">
            <button className="bg-cyan-500 flex gap-3 text-white px-2 py-1 rounded"> <BsUnlock /> user</button> </td> */}
                <td>
                  {" "}
                  <button
                    onClick={() => makeAdmin(user)}
                    className="bg-cyan-500 flex gap-3 text-white px-2 py-1 rounded"
                  >
                    {" "}
                    <FaShekelSign />
                    {user.role === "admin" ? "Admin" : "User"}
                  </button>
                </td>
                <td>
                  {" "}
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="bg-cyan-500 flex gap-3 text-white px-2 py-1 rounded"
                  >
                    {" "}
                    Delete{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersAdmin;
