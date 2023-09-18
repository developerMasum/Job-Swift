// import React from "react";
// import {
//   RiFacebookFill,
//   RiInstagramFill,
//   RiGithubFill,
//   RiLinkedinBoxFill,
//   RiWhatsappFill,
//   RiTwitterFill,
//   RiLinksFill,
// } from "react-icons/ri";


// const SocialLink = () => {
//   return (
//     <div className="flex flex-wrap gap-8 justify-center items-center mt-4">
//       {/* Facebook */}
//       <a
//         href="https://www.facebook.com/your-facebook-profile-url"
//         target="_blank" // Open link in a new tab/window
//         rel="noopener noreferrer" // Security best practice when using target="_blank"
//         className="text-blue-500 mx-2 my-2 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3" // Tailwind CSS classes for styling and hover effect
//       >
//         <div className="flex flex-col items-center">
//           {/* Flex container */}
//           <RiFacebookFill size={50} className="text-2xl" />
//           {/* Facebook icon */}
//           <p>Share on Facebook</p>
//         </div>
//       </a>
//       {/* Instagram */}
//       <a
//         href="https://www.instagram.com/your-instagram-profile-url"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-pink-500 mx-2 my-2 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-rotate-3"
//       >
//         <div className="flex flex-col items-center">
//           <RiInstagramFill size={50} className="text-2xl" />
//           {/* Instagram icon */}
//           <p>Share on Instagram</p>
//         </div>
//       </a>
//       {/* Github */}
//       <a
//         href="https://www.github.com/your-github-profile-url"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-gray-600 mx-2 my-2 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
//       >
//         <div className="flex flex-col items-center">
//           <RiGithubFill size={50} className="text-2xl" /> {/* GitHub icon */}
//           <p>Share on Github</p>
//         </div>
//       </a>
//       {/* LinkedIn */}
//       <a
//         href="https://www.linkedin.com/in/your-linkedin-profile-url"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-blue-700 mx-2 my-2 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-rotate-3"
//       >
//         <div className="flex flex-col items-center">
//           <RiLinkedinBoxFill size={50} className="text-2xl" />
//           {/* LinkedIn icon */}
//           <p>Share on Linkedin</p>
//         </div>
//       </a>
//       {/* WhatsApp */}
//       <a
//         href="https://wa.me/your-whatsapp-phone-number"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-green-500 mx-2 my-2 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-rotate-3"
//       >
//         <div className="flex flex-col items-center">
//           <RiWhatsappFill size={50} className="text-2xl" />
//           {/* WhatsApp icon */}
//           <p>Share on Whatsapp</p>
//         </div>
//       </a>
//       {/* Twitter */}
//       <a
//         href="https://twitter.com/your-twitter-profile-url"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-blue-400 mx-2 my-2 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-rotate-3"
//       >
//         <div className="flex flex-col items-center">
//           <RiTwitterFill size={50} className="text-2xl" /> {/* Twitter icon */}
//           <p>Share on Twitter</p>
//         </div>
//       </a>
//       {/* BD Jobs */}
//       <a
//         href="https://www.bdjobs.com"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-purple-500 mx-2 my-2 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-rotate-3"
//       >
//         <div className="flex flex-col items-center">
//           {/* You can replace the icon with an appropriate BD Jobs icon */}
//           <img
//             src="https://i.ibb.co/Y3n09CW/bdjobs.png"
//             alt="BD Jobs"
//             className=" rounded-full text-2xl"
//             style={{ width: "50px", height: "50px" }}
//           />
//           <p>Share on BD Jobs</p>
//         </div>
//       </a>
//       {/* Indeed */}
//       <a
//         href="https://www.indeed.com"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-green-500 mx-2 my-2 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-rotate-3"
//       >
//         <div className="flex flex-col items-center">
//           <RiLinksFill size={50} className="text-2xl" />{" "}
//           <p>Share Jobs on Indeed</p>
//         </div>
//       </a>
//       {/* Monster */}
//       <a
//         href="https://www.monster.com"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-purple-500 mx-2 my-2 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-rotate-3"
//       >
//         <div className="flex flex-col items-center">
//           <img
//             src="https://i.ibb.co/Zx44dsy/monster.png"
//             alt="Monster"
//             className=" rounded-full text-2xl"
//             style={{ width: "50px", height: "50px" }}
//           />
//           <p>Find Jobs on Monster</p>
//         </div>
//       </a>
//       {/* Glassdoor */}
//       <a
//         href="https://www.glassdoor.com"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-yellow-500 mx-2 my-2 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-rotate-3"
//       >
//         <div className="flex flex-col items-center">
//           {/* You can replace the icon with an appropriate Glassdoor icon */}
//           <img
//             src="https://i.ibb.co/HBc6pCz/glassdoor.png"
//             alt="Glassdoor"
//             className=" rounded-full text-2xl"
//             style={{ width: "50px", height: "50px" }}
//           />
//           <p>Find Jobs on Glassdoor</p>
//         </div>
//       </a>
//     </div>
//   );
// };

// export default SocialLink;


import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";
const SocialMediaLink = () => {
  const socialMedia = localStorage.getItem("socialMedia");
  console.log(socialMedia);
  return (
    <div className=" flex gap-6 mt-7 justify-center">
      <FacebookShareButton
        url={socialMedia}
        quote="please share the page"
        hashtag="#code"
      >
        <FacebookIcon className="rounded-full w-7 h-7"></FacebookIcon>
      </FacebookShareButton>

      <TwitterShareButton url={socialMedia}>
        <TwitterIcon className="rounded-full w-7 h-7"></TwitterIcon>
      </TwitterShareButton>
      <LinkedinShareButton url={socialMedia}>
        <LinkedinIcon className="rounded-full w-7 h-7"></LinkedinIcon>
      </LinkedinShareButton>
    </div>
  );
};

export default SocialMediaLink;
