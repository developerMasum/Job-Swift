
import { FaUsers, FaTasks, FaStar, FaChartLine, FaClock } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";

const EmployeeExperienceSection = () => {
  const cards = [
    {
      icon: <FaUsers className="text-blue-500" />,
      title: "Team Collaboration",
      description: "Work seamlessly with your team to manage candidates.",
    },
    {
      icon: <FaTasks className="text-green-500" />,
      title: "Task Management",
      description: "Assign tasks, track progress, and stay organized.",
    },
    {
      icon: <FaStar className="text-yellow-500" />,
      title: "Candidate Engagement",
      description: "Engage candidates with personalized communication.",
    },
    {
      icon: <FaChartLine className="text-pink-500" />,
      title: "Data-Driven Decisions",
      description: "Make informed hiring decisions with powerful analytics.",
    },
    {
      icon: <FaClock className="text-purple-500" />,
      title: "Efficient Workflow",
      description: "Streamline hiring processes and save time.",
    },
    {
      icon: <FaUsers className="text-blue-500" />,
      title: "Collaborative Hiring",
      description: "Collaborate across teams to find the best candidates.",
    },
    {
      icon: <FaTasks className="text-green-500" />,
      title: "Task Prioritization",
      description: "Prioritize tasks and manage multiple hiring activities.",
    },
    {
      icon: <FaStar className="text-yellow-500" />,
      title: "Candidate Feedback",
      description: "Collect candidate feedback to improve the hiring process.",
    },
  ];

  const generateUniqueColors = () => {
    const colors = [
      "bg-blue-300",
      "bg-green-300",
      "bg-yellow-300",
      "bg-pink-300",
      "bg-purple-300",
      "bg-red-300",
      "bg-indigo-300",
      "bg-teal-300",
    ];
    const uniqueColors = [];
    while (uniqueColors.length < 3) {
      const randomIndex = Math.floor(Math.random() * colors.length);
      if (!uniqueColors.includes(colors[randomIndex])) {
        uniqueColors.push(colors[randomIndex]);
      }
    }
    return uniqueColors;
  };

  return (
    <section className="bg-gray-100 py-5">
      <div className="container mx-auto text-center">
       
        <div className="flex my-10 overflow-hidden">
          <Marquee speed={60} gradient={false} pauseOnHover={true}>
            {cards.map((card, index) => {
              const uniqueColors = generateUniqueColors();
              return (
                <div
                  key={index}
                  className={`relative p-6 rounded-lg  mx-4 mb-4 md:w-64 flex-shrink-0 border-[1px]`}
                >
                  <div className="text-4xl mb-4 text-gray-500">{card.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    {card.title}
                  </h3>
                  <p className="text-gray-700">{card.description}</p>
                  <div className="flex justify-center space-x-2 mt-4">
                    {uniqueColors.map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className={`w-4 h-4 rounded-full ${color}`}
                      ></div>
                    ))}
                  </div>
                </div>
              );
            })}
          </Marquee>
        </div>
        {/* <Link className=" border-[2px] border-gray-500 rounded-md px-4 py-1 text-gray-500">Learn More <FaGreaterThan className="inline-block"></FaGreaterThan></Link> */}
      </div>
    </section>
  );
};

export default EmployeeExperienceSection;

