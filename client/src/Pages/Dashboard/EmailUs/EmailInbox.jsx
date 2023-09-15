import React, { useState, useEffect } from "react";

const EmailInbox = () => {
  const [email, setEmail] = useState([]);

  useEffect(() => {
    // Load email data from the JSON file
    fetch("/emails.json")
      .then((response) => response.json())
      .then((data) => setEmail(data))
      .catch((error) => console.error("Error loading email data:", error));
  }, []);

  return (
    <div className="mx-4 md:mx-auto w-3/4">
      {/* Add margin on mobile and remove on medium (md) screens */}
      <h2 className="text-2xl font-semibold mb-4">Email Inbox</h2>
      <div className="grid gap-2">
        {email.map((e) => (
          <div
            key={e.id}
            className="bg-white p-4 shadow-sm rounded-lg grid grid-cols-12 transform hover:scale-105 transition-transform duration-300"
          >
            <div className="col-span-12 md:col-span-2">
              {/* Full width on mobile and 2 columns on medium screens */}
              <img
                src={e.senderImage}
                alt={`${e.senderName}'s profile`}
                className="w-16 h-16 rounded-full mx-auto"
              />
            </div>
            <div className="col-span-12 md:col-span-10">
              {/* Full width on mobile and 10 columns on medium screens */}
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <p className="text-lg font-semibold">{e.senderName}</p>
                  <p className="text-gray-500">{e.senderEmail}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  {/* Add top margin only on mobile */}
                  <p className="text-gray-500">{e.date}</p>
                  <p className="text-gray-500">{e.subject}</p>
                </div>
              </div>
              <div className="mt-2">{e.message}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailInbox;
