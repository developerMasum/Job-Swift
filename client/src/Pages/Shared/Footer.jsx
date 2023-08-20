import logo3 from "../../assets/logo/logo3.png";
import { FaFacebook, FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
          <a className="link link-hover">Advertisement</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <div className="items-center grid-flow-col">
          <img
            className="h-12 border border-slate-300 rounded-xl"
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
    </>
  );
};

export default Footer;
