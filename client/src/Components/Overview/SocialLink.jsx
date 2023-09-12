import React from "react";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiWhatsappFill,
  RiTwitterFill,
  RiPinterestFill,
  RiSnapchatFill, 
  RiTiktokFill, 
  RiRedditFill, 
  RiYoutubeFill, 
} from "react-icons/ri";

const SocialLink = () => {
  return (
    <div className="flex flex-wrap gap-8 justify-center items-center mt-4">
      {/* Facebook */}
      <a
        href="https://www.facebook.com/your-facebook-profile-url"
        target="_blank" // Open link in a new tab/window
        rel="noopener noreferrer" // Security best practice when using target="_blank"
        className="text-blue-500 mx-2 my-2 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3" // Tailwind CSS classes for styling and hover effect
      >
        <div className="flex flex-col items-center">
          
          {/* Flex container */}
          <RiFacebookFill size={50} className="text-2xl" />
          {/* Facebook icon */}
          <p>Share on Facebook</p> 
        </div>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/your-instagram-profile-url"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 mx-2 my-2 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-rotate-3"
      >
        <div className="flex flex-col items-center">
          <RiInstagramFill size={50} className="text-2xl" />
          {/* Instagram icon */}
          <p>Share on Instagram</p> 
        </div>
      </a>

      {/* Github */}
      <a
        href="https://www.github.com/your-github-profile-url"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 mx-2 my-2 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
      >
        <div className="flex flex-col items-center">
          <RiGithubFill size={50} className="text-2xl" /> {/* GitHub icon */}
          <p>Share on Github</p> 
        </div>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/your-linkedin-profile-url"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 mx-2 my-2 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-rotate-3"
      >
        <div className="flex flex-col items-center">
          <RiLinkedinBoxFill size={50} className="text-2xl" />
          {/* LinkedIn icon */}
          <p>Share on Linkedin</p> 
        </div>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/your-whatsapp-phone-number"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 mx-2 my-2 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-rotate-3"
      >
        <div className="flex flex-col items-center">
          <RiWhatsappFill size={50} className="text-2xl" />
          {/* WhatsApp icon */}
          <p>Share on Whatsapp</p> 
        </div>
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com/your-twitter-profile-url"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 mx-2 my-2 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-rotate-3"
      >
        <div className="flex flex-col items-center">
          <RiTwitterFill size={50} className="text-2xl" /> {/* Twitter icon */}
          <p>Share on Twitter</p> 
        </div>
      </a>

      {/* Pinterest */}
      <a
        href="https://www.pinterest.com/your-pinterest-profile-url"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 mx-2 my-2 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-rotate-3"
      >
        <div className="flex flex-col items-center">
          <RiPinterestFill size={50} className="text-2xl" />
          {/* Pinterest icon */}
          <p>Share on Pinterest</p> 
        </div>
      </a>

      {/* Snapchat */}
      <a
        href="https://www.snapchat.com/your-snapchat-profile-url"
        target="_blank"
        rel="noopener noreferrer"
        className="text-yellow-500 mx-2 my-2 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-rotate-3"
      >
        <div className="flex flex-col items-center">
          <RiSnapchatFill size={50} className="text-2xl" />
          {/* Snapchat icon */}
          <p>Share on Snapchat</p> 
        </div>
      </a>

      {/* TikTok */}
      <a
        href="https://www.tiktok.com/your-tiktok-profile-url"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 mx-2 my-2 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-rotate-3"
      >
        <div className="flex flex-col items-center">
          <RiTiktokFill size={50} className="text-2xl" /> {/* TikTok icon */}
          <p>Share on TikTok</p> 
        </div>
      </a>

      {/* Reddit */}
      <a
        href="https://www.reddit.com/your-reddit-profile-url"
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-500 mx-2 my-2 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-rotate-3"
      >
        <div className="flex flex-col items-center">
          <RiRedditFill size={50} className="text-2xl" /> {/* Reddit icon */}
          <p>Share on Reddit</p> 
        </div>
      </a>

      {/* YouTube */}
      <a
        href="https://www.youtube.com/your-youtube-profile-url"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 mx-2 my-2 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-rotate-3"
      >
        <div className="flex flex-col items-center">
          <RiYoutubeFill size={50} className="text-2xl" /> {/* YouTube icon */}
          <p>Share on YouTube</p> 
        </div>
      </a>
    </div>
  );
};

export default SocialLink;
