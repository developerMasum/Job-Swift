// import React from 'react';
// import { useState } from 'react';
// import Calendar from 'react-calendar';


// const CalendarComponent = () => {

//     const [date, setDate] = useState(new Date());

//     const onChange = date => {
//         setDate(date);
//     }

//     return (
//         <div>
//             <h2>Calendar</h2>
//             <Calendar onChange={onChange} value={date} />
//         </div>
//     );
// };

// export default CalendarComponent;

// 2222222222222222222
// import React, { useState } from 'react';
// // import DatePicker from 'sassy-datepicker';
// import { DatePicker } from '@gsebdev/react-simple-datepicker';

// const CalendarComponent = () => {

//     const [date, setDate] = useState(new Date());

//     const onChange = date => {
//         setDate(date);
//     }

//     console.log(date);
//     return (
//         <div>
//             {/* <h2>Date:{date}</h2> */}
//             <DatePicker
//                 id='datepicker-id'
//                 name='date-demo'
//                 onChange={onChange}
//                 value={'01/02/2023'}
//             />

//         </div>
//     );
// };

// export default CalendarComponent;

// 33333333333333333

// import React from 'react';
// import { DatePicker } from 'react-responsive-datepicker'
// import 'react-responsive-datepicker/dist/index.css'

// const CalendarComponent = () => {
//     const [isOpen, setIsOpen] = React.useState(true)
//     return (
//         <div>
//             {/* <button
//                 onClick={() => {
//                     setIsOpen(true)
//                 }}
//             >
//                 Open
//             </button> */}
//             <DatePicker
//                 isOpen={isOpen}
//                 onClose={() => setIsOpen(false)}
//                 defaultValue={new Date(2022, 8, 8)}
//                 minDate={new Date(2022, 10, 10)}
//                 maxDate={new Date(2023, 0, 10)}
//                 headerFormat='DD, MM dd'
//             />
//         </div>
//     );
// };

// export default CalendarComponent;

// 4444444444444444

import React from 'react';
import  { useState } from "react";
import DatePicker from "react-datepicker";

const CalendarComponent = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            {/* <h2 className='bg-white w-40'>Click and save your date</h2> */}
            <DatePicker className='rounded-md' selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
    );
};

export default CalendarComponent;