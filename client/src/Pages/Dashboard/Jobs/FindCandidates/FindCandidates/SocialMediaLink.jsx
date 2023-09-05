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
