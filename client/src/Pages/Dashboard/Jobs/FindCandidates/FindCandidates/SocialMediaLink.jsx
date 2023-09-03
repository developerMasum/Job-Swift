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
  return (
    <div className=" flex gap-6 mt-7 justify-center">
      <FacebookShareButton
        url="https://openai.com/pricing"
        quote="please share the page"
        hashtag="#code"
      >
        <FacebookIcon className="rounded-full w-7 h-7"></FacebookIcon>
      </FacebookShareButton>

      <TwitterShareButton url="https://openai.com/pricing">
        <TwitterIcon className="rounded-full w-7 h-7"></TwitterIcon>
      </TwitterShareButton>
      <LinkedinShareButton url="https://openai.com/pricing">
        <LinkedinIcon className="rounded-full w-7 h-7"></LinkedinIcon>
      </LinkedinShareButton>
    </div>
  );
};

export default SocialMediaLink;
