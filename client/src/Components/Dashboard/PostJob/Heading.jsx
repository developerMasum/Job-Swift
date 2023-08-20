import React from "react";
import CategoryCard from "./CategoryCard";

const Heading = () => {
  const jobCategories = [
    {
      id: 1,
      name: "Job Details",
      description:
        "Tell applicants about this role,including job title, locations and requirement",
    },
    {
      id: 2,
      name: "Application Form",
      description: "Design the application form for this role",
    },
    {
      id: 3,
      name: "Find Candidates ",
      description: "Post on job boards, engage recruiter,referrals",
    },
    {
      id: 4,
      name: "Team Members",
      description: "Invite or co-workers to collaborate on this job",
    },
    {
      id: 5,
      name: "workflow",
      description:
        "Create a kit or assessment for a structured interview process ",
    },
  ];

  return (
    <div className="w-full shadow-xl p-2">
      <div className="flex justify-between items-center">
        <h1 className="text-[24px]">New Job</h1>
        <div className="space-x-4">
          <button className="bg-[#1F7068] text-white outline-none px-4 py-1 rounded-md text-[20px] font-medium">
            Save draft
          </button>
          <button className="border-[1px] border-[#1F7068] outline-none px-4 py-1 rounded-md text-[20px] font-semibold">
            Save & continue
          </button>
        </div>
      </div>
      <div className="md:flex divide-x-2">
        {jobCategories.map((category) => (
          <CategoryCard key={category.id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Heading;
