// import React, { useState } from 'react';
// import CountUp from 'react-countup';
// import ScrollTrigger from 'react-scroll-trigger';
// import { FaUsers, FaBriefcase, FaChartLine, FaUserTie } from 'react-icons/fa';

// const Counter = () => {
//   const cardData = [
//     {
//       icon: FaUsers,
//       title: 'Human Resources',
//       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et provident id similique ut iste reiciendis ipsa asperiores blanditiis consequuntur.',
//       end: 150,
//     },
//     {
//       icon: FaBriefcase,
//       title: 'Job Openings',
//       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et provident id similique ut iste reiciendis ipsa asperiores blanditiis consequuntur.',
//       end: 250,
//     },
//     {
//       icon: FaChartLine,
//       title: 'Analytics',
//       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et provident id similique ut iste reiciendis ipsa asperiores blanditiis consequuntur.',
//       end: 75,
//     },
//     {
//       icon: FaUserTie,
//       title: 'Candidates',
//       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et provident id similique ut iste reiciendis ipsa asperiores blanditiis consequuntur.',
//       end: 50,
//     },
//   ];

//   const [counts, setCounts] = useState(Array(cardData.length).fill(false));

//   return (
//     <div className="bg-gray-700 w-full py-16">
//       <div className="container mx-auto flex px-6 gap-6">
//         {cardData.map((card, index) => (
//           <ScrollTrigger key={index} onEnter={() => {
            
//             setCounts(true);
//           }} onExit={() => {
           
//             setCounts(false);
//           }}>
//             <div className="p-6 rounded-md shadow-lg border-[1px] text-white text-center">
//               <div className="mb-4">
//                 {card.icon({ className: 'text-4xl text-blue-500 mb-2 mx-auto' })} {/* Icon */}
//                 <h1 className="text-xl font-bold">{card.title}</h1>
//                 <p className="text-gray-600">{card.description}</p>
//               </div>
//               <h1 className="text-2xl font-semibold bg-teal-500 rounded-md">
//                 {counts && <CountUp start={0} end={card?.end} duration={4} delay={0} />}%
//               </h1>
//             </div>
//           </ScrollTrigger>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Counter;


import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { FaUsers, FaBriefcase, FaChartLine, FaUserTie } from 'react-icons/fa';

const Counter = () => {
  const cardData = [
    {
      icon: FaUsers,
      title: 'Human Resources',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et provident id similique ut iste reiciendis ipsa asperiores blanditiis consequuntur.',
      end: 150,
    },
    {
      icon: FaBriefcase,
      title: 'Job Openings',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et provident id similique ut iste reiciendis ipsa asperiores blanditiis consequuntur.',
      end: 250,
    },
    {
      icon: FaChartLine,
      title: 'Analytics',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et provident id similique ut iste reiciendis ipsa asperiores blanditiis consequuntur.',
      end: 75,
    },
    {
      icon: FaUserTie,
      title: 'Candidates',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et provident id similique ut iste reiciendis ipsa asperiores blanditiis consequuntur.',
      end: 50,
    },
  ];

  const [counts, setCounts] = useState(Array(cardData.length).fill(false));

  return (
    <div className="bg-gray-700 w-full py-16">
      <div className="container mx-auto flex flex-col md:flex-row px-6 gap-6">
        {cardData.map((card, index) => (
          <ScrollTrigger key={index} onEnter={() => setCounts((prevCounts) => [...prevCounts.slice(0, index), true, ...prevCounts.slice(index + 1)])} onExit={() => setCounts((prevCounts) => [...prevCounts.slice(0, index), false, ...prevCounts.slice(index + 1)])}>
            <div className="flex-1 p-6 rounded-md  bg-purple-50 text-gray-800 text-center">
              <div className="mb-4">
                {card.icon({ className: 'text-4xl text-blue-500 mb-2 mx-auto' })} {/* Icon */}
                <h1 className="text-xl font-bold">{card.title}</h1>
                <p className="text-gray-600">{card.description}</p>
              </div>
              <h1 className="text-2xl font-semibold bg-teal-500 rounded-md py-2">
                {counts[index] && <CountUp start={0} end={card.end} duration={4} delay={0} />}%
              </h1>
            </div>
          </ScrollTrigger>
        ))}
      </div>
    </div>
  );
};

export default Counter;

