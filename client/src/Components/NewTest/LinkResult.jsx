// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import CopyToClipboard from "react-copy-to-clipboard";

// const LinkResult = ({ inputValue }) => {
//   const [shortenLink, setShortenLink] = useState("");
//   const [copied, setCopied] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false)
//   console.log(shortenLink);

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       const res = await axios(
//         `https://api.shrtco.de/v2/shorten?url=${inputValue}`
//       );
//       setShortenLink(res.data.result.full_short_link);
//     } catch (error) {
//       setError(error)
//     }finally{
//       setLoading(false)
//     }
//   };

//   useEffect(() => {
//     if (inputValue.length) {
//       fetchData();
//     }
//   }, [inputValue]);
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setCopied(false);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, [copied]);

  
//   if(loading){
//       return <p className="text-gray-500">Loading-----</p>
//   }
//   console.log(inputValue);

//   return (

//       <>
//       {shortenLink && (<div className="mt-10">
//       <h1>{shortenLink}</h1>
//       <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
//         <button className="text-green-900  hover:underline font-bold" to={""}>
//           Copy to clipboard
//         </button>
//       </CopyToClipboard>
//     </div>)}</>
    
//   );
// };

// export default LinkResult;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaClipboard } from "react-icons/fa";
import CopyToClipboard from "react-copy-to-clipboard";

const LinkResult = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenLink(res.data.result.full_short_link);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <>
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <>
          {shortenLink && (
            <div className="mt-10">
              <h1>{shortenLink}</h1>
              <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
                <button className="text-green-900 hover:underline font-bold flex items-center">
                  {copied ? (
                    <>
                      Copied! <FaClipboard className="ml-1" />
                    </>
                  ) : (
                    <>
                      Copy to clipboard <FaClipboard className="ml-1" />
                    </>
                  )}
                </button>
              </CopyToClipboard>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default LinkResult;
