import React from "react";

const TopCompanyTable = () => {
  const companyData = [
    {
      companyName: "ABC Inc.",
      email: "abc@example.com",
      months: "Jan",
      year: 23,
      totalHired: 5000,
    },
    {
      companyName: "XYZ Corp.",
      email: "xyz@example.com",
      months: "Feb",
      year: 23,
      totalHired: 4500,
    },
    {
      companyName: "123 Ltd.",
      email: "123@example.com",
      months: "Mar",
      year: 23,
      totalHired: 4000,
    },
    {
      companyName: "Tech Solutions",
      email: "tech@example.com",
      months: "Apr",
      year: 23,
      totalHired: 3800,
    },
    {
      companyName: "Global Innovators",
      email: "global@example.com",
      months: "May",
      year: 23,
      totalHired: 3600,
    },
    {
      companyName: "Data Enterprises",
      email: "data@example.com",
      months: "June",
      year: 23,
      totalHired: 3550,
    },
    {
      companyName: "Web Wizards",
      email: "web@example.com",
      months: "July",
      year: 23,
      totalHired: 3400,
    },
    {
      companyName: "Future Systems",
      email: "future@example.com",
      months: "Aug",
      year: 23,
      totalHired: 3000,
    },
    {
      companyName: "Infinite Technologies",
      email: "infinite@example.com",
      months: "Sep",
      year: 23,
      totalHired: 2900,
    },
    {
      companyName: "Digital Ventures",
      email: "digital@example.com",
      months: "Oct",
      year: 23,
      totalHired: 2700,
    },
  ];
  return (
    <div className=" pl-12 ">
      <div>
        <p className="text-cyan-700 uppercase text-sm font-bold pb-6">
          Top companies with the number of hired candidates
        </p>
      </div>
      <div
        style={{ maxHeight: "330px", overflowY: "scroll", overflowX: "hidden" }}
      >
        <table className="min-w-full">
          <tbody>
            {companyData.map((company, index) => (
              <tr key={index}>
                <td className="border-b px-4 py-6">{company.companyName}</td>
                <td className="border-b px-4 py-2">
                  {company.months},{company.year}
                </td>
                <td className="border-b px-4 py-2 text-sm font-bold">
                  <button className="bg-cyan-600 px-1 text-stone-50 py-1 rounded-lg ">
                    {company.totalHired} candidate{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopCompanyTable;
