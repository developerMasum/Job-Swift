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
    <div className="mx-4 md:mx-auto md:w-3/4">
      <h2 className="text-3xl font-semibold mb-6">Email Inbox</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead className="bg-teal-700 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold ">
                Sender
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Subject
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Message
              </th>
            </tr>
          </thead>
          <tbody>
            {email.map((e) => (
              <tr key={e.id} className="border-t hover:bg-gray-100">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <img
                      src={e.senderImage}
                      alt={`${e.senderName}'s profile`}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="text-sm">
                      <p className="font-semibold">{e.senderName}</p>
                      <p className="text-gray-500">{e.senderEmail}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">{e.senderEmail}</td>
                <td className="px-6 py-4">{e.date}</td>
                <td className="px-6 py-4">{e.subject}</td>
                <td className="px-6 py-4">{e.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmailInbox;
