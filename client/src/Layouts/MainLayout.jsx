import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

const MainLayout = () => {
  const location = useLocation();
  const withoutNavFooter = location.pathname.includes("login");
  const withoutNavFooter2 = location.pathname.includes("register");

  return (
    <div className="flex flex-col min-h-screen">
      <div className="">
        {withoutNavFooter2 || withoutNavFooter || <Navbar></Navbar>}
      </div>
      <div className="flex-grow">
        <Outlet></Outlet>
      </div>
      <div>{withoutNavFooter2 || withoutNavFooter || <Footer></Footer>}</div>
    </div>
  );
};

export default MainLayout;
