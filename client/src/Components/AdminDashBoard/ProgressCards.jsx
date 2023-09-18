import { BiUserPlus } from "react-icons/bi";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { BsPeople } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BiPlusCircle } from "react-icons/bi";

const ProgressCards = () => {
  const data = [
    {
      name: "New Users",
      number: 1000,
      increase: 85,
      icon: <BiUserPlus />,
    },
    {
      name: "Hired",
      number: 500,
      increase: 89,
      icon: <BsPeople />,
    },
    {
      name: "Applications",
      number: 1500,
      increase: 40,
      icon: <BiPlusCircle />,
    },
    {
      name: "Email Sent",
      number: 25000,
      increase: 72,
      icon: <AiOutlineMail />,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {data.map((singleData, index) => (
        <div key={index}>
          <div className="flex  items-center justify-between gap-6 shadow-lg p-4">
            <div>
              <p className="text-4xl text-cyan-700"> {singleData.icon} </p>
              {/* //   <FaUserAlt  size={40}/> */}
              <p className="text-xl text-slate-700  font-bold">
                {" "}
                {singleData.number}
              </p>
              <p className="text-lg text-cyan-700 font-semibold">
                {" "}
                {singleData.name}
              </p>
            </div>

            <div>
              <div className="w-14">
                <CircularProgressbar
                  value={singleData.increase}
                  // text={`${singleData.increase}%`}
                  styles={buildStyles({
                    textColor: "red",
                    pathColor: "turquoise",
                    trailColor: "salmon",
                  })}
                />
              </div>
              <p className="font-semibold text-xs mt-3">
                {" "}
                {singleData.increase} % Increase
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressCards;
