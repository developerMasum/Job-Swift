// import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";
// import useAxiosSecure from "./useAxiosSecure";


// const useAdmin = () => {
//     const {user} = useContext(AuthContext);
//     const [axiosSecure] = useAxiosSecure();
//     const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
//         queryKey: ['isAdmin', user?.email],
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/admin/${user?.email}`);
//             // console.log('is admin response', res)
//             return res.data.admin;
//         }
//     })
//     return [isAdmin, isAdminLoading]
// }
// export default useAdmin;

import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Auth/AuthProvider";

function useAdmin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const {user} = useContext(authContext)

  useEffect(() => {
    const adminEmail = "admin@gmail.com";
    const originEmail = user?.email;

    if (adminEmail === originEmail) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []);

  return isAdmin;
}

export default useAdmin;
