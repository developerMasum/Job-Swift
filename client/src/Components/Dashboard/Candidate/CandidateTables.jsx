import React from 'react';

const CandidateTables = ({ candidates }) => {
  console.log(candidates);

  return (
    <div className="mt-5">
      <table className="w-full ">
        {/* head */}
        <thead>
          <tr>
            <th className="p-2">
              <label className="flex items-center">
                <span>checkbox1</span>
                <input type="checkbox" className="form-checkbox" />
              </label>
            </th>
            <th className="p-2">Candidate Information</th>
            <th className="p-2">Job Status</th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {candidates.map((candidate, index) => (
            <tr key={index} className="border-t border-gray-300">
              <td className="p-2">
                <label className="flex items-center">
                <span>checkbox2</span>
                  <input type="checkbox" className="form-checkbox" />
                </label>
              </td>
              <td className="p-2">
                <div className="flex items-center space-x-3">
                  <div className="">
                    <div className="w-16 h-12 rounded-full">
                      <img src={candidate.image} alt="Avatar" className="rounded-2xl" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{candidate.name}</div>
                    <div className="text-sm opacity-50">{candidate.location}</div>
                  </div>
                </div>
              </td>
              <td className="p-2">{candidate.jobStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandidateTables;
