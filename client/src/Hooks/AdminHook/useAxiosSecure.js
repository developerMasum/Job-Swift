import { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../Auth/AuthProvider";
// import { AuthContext } from "../providers/AuthProvider";

const useAxiosSecure = () => {
  const { logout,logIn } = useContext(authContext);
  const navigate = useNavigate();

  const axiosSecure = axios.create({
    baseURL: "https://sojib-job-swift.vercel.app/",
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logout();
          navigate("/logIn");
        }
        return Promise.reject(error);
      }
    );
  }, [logout, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;
