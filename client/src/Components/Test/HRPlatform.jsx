import {
      FaUsers,
      FaChartLine,
      FaMoneyBillAlt,
      FaTasks,
      FaCalendarAlt,
      FaClipboardCheck,
    } from "react-icons/fa";
    import { FaGreaterThan } from "react-icons/fa";
    
    const HRPlatform = () => {
      const features = [
        {
          icon: <FaUsers className="text-3xl text-blue-500" />,
          title: "Employee Management",
          description:
            "Effortlessly manage your employees' information, from onboarding to offboarding.",
        },
        {
          icon: <FaChartLine className="text-3xl text-green-500" />,
          title: "Performance Tracking",
          description:
            "Monitor and evaluate employee performance with insightful metrics and reports.",
        },
        {
          icon: <FaMoneyBillAlt className="text-3xl text-yellow-500" />,
          title: "Payroll Management",
          description:
            "Simplify payroll processing and ensure accurate and timely payments.",
        },
        {
          icon: <FaTasks className="text-3xl text-pink-500" />,
          title: "Task Management",
          description:
            "Keep track of tasks, assign responsibilities, and ensure projects stay on track.",
        },
        {
          icon: <FaCalendarAlt className="text-3xl text-purple-500" />,
          title: "Leave Management",
          description:
            "Efficiently manage employee leave requests and maintain accurate leave records.",
        },
        {
          icon: <FaClipboardCheck className="text-3xl text-indigo-500" />,
          title: "Recruitment Process",
          description:
            "Streamline and optimize your hiring process from sourcing to hiring.",
        },
      ];
    
      return (
        <div>
          
          <section className="bg-gray-100 py-16">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Complete HR Platform
              </h2>
              <p className="text-gray-600 max-w-lg mx-auto mb-8">
                Streamline your HR processes with our comprehensive HR Platform.
                Manage employee information, track performance, handle payroll, and
                more.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 border border-gray-300 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mr-4">{feature.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-700">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className=" border-[2px] border-gray-500 my-8 rounded-md px-4 py-1 text-gray-500">
                Get Demo <FaGreaterThan className="inline-block"></FaGreaterThan>
              </button>
            </div>
          </section>
        </div>
      );
    };
    
    export default HRPlatform;
    
    // <Link className=" border-[2px] border-gray-500 rounded-md px-4 py-1 text-gray-500">Learn More <FaGreaterThan className="inline-block"></FaGreaterThan></Link>
    