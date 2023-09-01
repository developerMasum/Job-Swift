import React from "react";
import CategoryCard from "./CategoryCard";

const Heading = () => {
  const jobCategories = [
    {
      id: 1,
      name: "Job Details",
      description:
        "Tell applicants about this role, including job title, locations, and requirements.",
    },
    {
      id: 2,
      name: "Application Form",
      description: "Design the application form for this role.",
    },
    {
      id: 3,
      name: "Find Candidates",
      description: "Post on job boards, engage recruiters, and referrals.",
    },
    {
      id: 4,
      name: "Team Members",
      description: "Invite co-workers to collaborate on this job.",
    },
    {
      id: 5,
      name: "Workflow",
      description: "Create an assessment for a structured interview process.",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="md:flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-500">Create New Job</h1>
        <div className="space-x-4 md:flex">
          <button className="bg-[#1F7068] text-white px-4 py-2 rounded-md font-semibold hover:bg-opacity-90 transition-colors">
            Save Draft
          </button>
          <button className="border-[1px] border-[#1F7068] text-primary px-4 py-2 rounded-md font-semibold hover:bg-[#F4F4F4] transition-colors">
            Save & Continue
          </button>
        </div>
      </div>
      <div className="md:flex divide-x-4 divide-gray-300">
        {jobCategories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            className="bg-gray-100 p-6 rounded-lg shadow-md"
          ></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Heading;
