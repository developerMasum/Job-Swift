import React from "react";
import NoContent from "../../NoContent";



const SourcedDetails = ({ sourcedCandi: candidates,  }) => {
  return (
    <div className="w-full overflow-x-auto">
      {candidates?.length === 0 ? (
        <NoContent></NoContent>
      ) : (
        <table className="w-full shadow-lg rounded-lg overflow-hidden">
          {/* Head */}
          <thead className="bg-gray-200 text-gray-500">
            <tr>
              <th className="px-6 py-3 text-left">Select</th>
              <th className="px-6 py-3">Candidate Information</th>
              <th className="px-6 py-3">Job Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows */}
            {candidates.map((candidate) => (
              <tr
                key={candidate._id}
                className="hover:bg-gray-100 transition-colors divide-y-[1px] divide-gray-400 duration-300"
              >
                <td className="px-6 py-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="form-checkbox text-blue-500 rounded-full focus:ring-2 focus:ring-blue-200"
                      value={candidate._id}
                      checked={candidate.isChecked}
                      onChange={(e) => handleCheckbox(e)}
                    />
                  </label>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 flex-shrink-0">
                      <img
                        src={`http://localhost:5000/images/${candidate.image}`}
                        alt=""
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {candidate.firstName} {candidate.lastName}
                      </p>
                      <p className="text-sm text-gray-500">
                        {candidate.location}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="font-semibold text-gray-800">
                      {candidate.jobTitle}
                    </p>
                    <p className="text-sm text-gray-500">
                      {candidate.location}
                    </p>
                    {candidate?.stage ? (
                      <>
                        <p className="text-sm text-gray-500">
                          at{" "}
                          <span className="font-bold">{candidate.stage}</span>{" "}
                          Stage
                        </p>
                      </>
                    ) : (
                      <p className="text-sm text-gray-500">
                        at <span className="font-bold">Applied</span> Stage
                      </p>
                    )}
                    <p className="text-sm text-gray-500">
                      {(() => {
                        const timestamp = candidate.date;
                        const dateTime = new Date(timestamp);

                        const options = {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        };
                        return dateTime.toLocaleDateString(undefined, options);
                      })()}
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SourcedDetails;
