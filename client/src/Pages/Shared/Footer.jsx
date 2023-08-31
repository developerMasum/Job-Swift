import logo3 from "../../assets/login/swift__1_-removebg-preview (1).png";
import { FaFacebook, FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="footer px-10 py-4 border-2 text-base-content border-cyan-500">
        <div className="items-center grid-flow-col">
          <img
            className="h-12 border-2 border-cyan-500 rounded-xl"
            src={logo3}
            alt=""
          />
          <p>
            © 2023 Job Swift LLC. All Rights Reserved. Job Swift ® is a
            registered trademark of Job Swift LLC
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
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
      <footer className="footer p-10 bg-cyan-500  ">
        <div>
          <span className="font-bold text-black">Services</span>
          <a className="link link-hover ">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>

        </div>
        <div>
          <span className="font-bold text-black">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className=" font-bold text-black">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>

    </>
  );
};

export default Footer;
