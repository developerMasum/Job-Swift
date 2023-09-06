import { CiLocationOn } from "react-icons/ci";
import { BiMessageDetail, BiLogoTwitter, BiLogoLinkedin } from "react-icons/bi";
import { FiFacebook } from "react-icons/fi";
import {
  AiOutlinePhone,
  AiOutlineClockCircle,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";

const ContactCard = () => {
    return (
    <div className="grid md:grid-cols-4 gap-2 px-4">
      {/* Card 01 */}
            <div className="shadow-xl rounded-2xl p-4 transform transition-transform hover:scale-105 duration-300">

        <CiLocationOn  size={50} className="text-cyan-800 mb-2" />
        <h3 className="text-2xl font-semibold">Address</h3>
        <p>335 South 560 West</p>
        <p>Lindon, UT 84042-1911</p>
        <p>USA</p>
      </div>
      {/* card 02 */}
            <div className="shadow-xl rounded-2xl p-4 transform transition-transform hover:scale-105 duration-300">

        <AiOutlinePhone  size={50} className="text-cyan-800 mb-2" />
        <h3 className="text-2xl font-semibold">Office Numbers</h3>
        <p>Toll Free: 1-866-387-9595</p>
        <p>Phone: 801-724-6600</p>
      </div>
      {/* card 03 */}
            <div className="shadow-xl rounded-2xl p-4 transform transition-transform hover:scale-105 duration-300">

        <AiOutlineClockCircle  size={50} className="text-cyan-800 mb-2" />
        <h3 className="text-2xl font-semibold">Office Hours</h3>
        <p>Mon-Fri, 8am-5pm (MT)</p>
      </div>
      {/* card 04 */}
            <div className="shadow-xl rounded-2xl p-4 transform transition-transform hover:scale-105 duration-300">

        <BiMessageDetail size={50} className="text-cyan-800 mb-2 text-center" />
        <h3 className="text-2xl font-semibold mb-4">Social</h3>
        <div className="flex gap-2  items-center"> 
          <FiFacebook size={24} />
          <BiLogoTwitter size={24} />
          <AiOutlineInstagram size={24} />
          <BiLogoLinkedin size={24} />
          <AiOutlineYoutube size={24} />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
