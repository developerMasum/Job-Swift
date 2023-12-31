import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaClipboard, FaLink } from "react-icons/fa";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";

const LinkResult = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Use null for initial state when dealing with errors

  const value = localStorage.getItem("URL");
  const url = `https://www.youtube.com/watch?v=5Mi7RmmZj4Q&t=1322s/${value}`;

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );
      setShortenLink(res.data.result.full_short_link);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    toast.success("Copied to clipboard!", {
      duration: 5000,
      icon: "✅",
      position: "bottom-center",
      style: {
        background: "#14b3f24d",
        color: "black",
      },
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  localStorage.setItem("socialMedia", shortenLink);
  return (
    <div className="mt-10">
      <h2 className="my-2 overflow-scroll border-dashed border-2 border-[#c4cfde] rounded-lg p-2">
        {shortenLink}
      </h2>
      <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
        <button
          onClick={handleCopy}
          className="text-green-900 hover:underline font-bold flex justify-center items-center"
        >
          {copied ? (
            <>
              <p className="text-center ml-16">
                {" "}
                Copied! <FaClipboard className="ml-1 inline-block" />
              </p>
            </>
          ) : (
            <>
              <p className="text-center ml-10">
                {" "}
                Copy to clipboard <FaClipboard className="ml-1 inline-block" />
              </p>
            </>
          )}
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default LinkResult;
