
import { FaFacebook, FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="footer px-2 md:px-10 py-4 border-2 text-base-content border-sky-200">
        <div className="items-center grid-flow-col">
          <img
            className="h-12 border-2 border-sky-200 rounded-xl"
            src="https://i.ibb.co/qkXhCwN/swift-1-removebg-preview-1.png"
            alt=""
          />
          <p>
            © 2023 Job Swift LLC. All Rights Reserved. Job Swift ® is a
            registered trademark of Job Swift LLC
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4 text-center">
            <a href="">
              <FaFacebook className="h-8 w-8"></FaFacebook>
            </a>
            <a href="">
              <FaGithub className="h-8 w-8"></FaGithub>
            </a>
            <a href="">
              <FaYoutube className="h-8 w-8"></FaYoutube>
            </a>
            <a href="">
              <FaLinkedin className="h-8 w-8"></FaLinkedin>
            </a>
          </div>
        </div>
      </footer>
      <footer className="footer p-2 md:p-10 bg-teal-100
       bg-opacty-30  ">
        <div className="flex justify-between  w-5/6">
          <div className="flex flex-col">
            <span className="font-bold text-black">Services</span>
            <a className="link link-hover ">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>

          </div>
          <div className="flex flex-col">
            <span className="font-bold text-black">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
        </div>
        <div className="w-1/6 lg:ml-48">
          <span className=" font-bold text-black">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>


    </div>
  );
};

export default Footer;
