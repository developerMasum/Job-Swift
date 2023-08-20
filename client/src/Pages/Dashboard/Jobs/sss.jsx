import React from 'react';

const Sss = () => {
    return (
        <div>
            <div className="">
      {/* Down nav */}
      <div className="md:px-8 w-full px-4 bg-white shadow-md py-4 mb-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <h2 className="text-3xl">MD MASUM</h2>
            <LuEdit className="h-4 w-4 text-gray-500" />
          </div>
          <div>
            <button className="bg-[#00756a] border-2 border-[#00756a] px-5 py-2 rounded-lg text-white font-medium hover:bg-[#005f56] hover:border-[#005f56] transition-colors 3s ease-in-out">
              Create a new job
            </button>
          </div>
        </div>
      </div>
        {/* Heading */}
        <h4 className="text-lg font-semibold text-center pt-5">Welcome to smarter, faster hiring!</h4>
        <p className="text-gray-500 text-center pb-5">Workable's smart tools and features help you post a job, plan interviews, and find the perfect candidate. Choose one <br /> of the options below to get started.</p>

        {/* Content */}
        <div className="flex gap-14 border rounded-md border-gray-400 py-4  items-center bg-white justify-between px-10">
            <div className="space-y-3">
                <h2 className="font-semibold text-base text-gray-800">Post a job</h2>
                <p className="text-secondary">Get your job listing in front of millions of candidates today. Do things faster with a choice of over 700 job description templates, and choose to publish on the most popular free and premium job boards.</p>
                <button className=" text-[#00756a] px-5 py-1 border border-[#00756a] rounded-lg hover:bg-[#ffffdd] transition-colors 3s ease-in-out font-medium">Post a job</button>
            </div>
        </div>
        <div className="flex gap-14 mt-7 border rounded-md border-gray-400 py-4  items-center bg-white justify-between px-10">
            <div className="space-y-3">
                <h2 className="font-semibold text-base text-gray-800">Explore the product with sample data</h2>
                <p className="text-secondary">Get to know Workable better with sample jobs, candidates and team members. You can also see how Workable’s sample reports reveal helpful insights and data to inform your hiring.</p>
                <button className=" text-[#00756a] px-5 py-1 border border-[#00756a] rounded-lg hover:bg-[#ffffdd] transition-colors 3s ease-in-out font-medium">Explore product</button>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Sss;


