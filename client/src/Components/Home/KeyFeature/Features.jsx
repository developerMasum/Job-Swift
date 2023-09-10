import React from 'react';
import { FaSearch, FaClipboard, FaCalendar, FaUserTie, FaFileAlt, FaCheckCircle } from 'react-icons/fa';

const KeyFeatures = () => {
  const featureData = [
    {
      title: 'Efficient Job Search',
      description: 'Quickly find and track job opportunities.',
      Icon: FaSearch,
    },
    {
      title: 'Resume Management',
      description: 'Organize, review, and manage resumes with ease.',
      Icon: FaClipboard,
    },
    {
      title: 'Interview Scheduling',
      description: 'Schedule interviews efficiently and keep records.',
      Icon: FaCalendar,
    },
    {
      title: 'Candidate Profiles',
      description: 'Access detailed candidate profiles and information.',
      Icon: FaUserTie,
    },
    {
      title: 'Application Tracking',
      description: 'Track the status of job applications seamlessly.',
      Icon: FaFileAlt,
    },
    {
      title: 'Hiring Success',
      description: 'Ensure successful hiring with our ATS system.',
      Icon: FaCheckCircle,
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {featureData.map((feature, index) => (
            <div key={index} className="p-6 border-[1px] rounded-lg text-center  hover:shadow-xl">
              <div className="mb-4 text-[#0e7490] text-3xl">
                <feature.Icon />
              </div>
              <h3 className="text-xl text-gray-500 font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
