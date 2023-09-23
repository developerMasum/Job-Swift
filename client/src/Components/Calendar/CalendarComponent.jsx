
import React from 'react';
import  { useState } from "react";
import DatePicker from "react-datepicker";

const CalendarComponent = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            {/* <h2 className='bg-white w-40'>Click and save your date</h2> */}
            <DatePicker className='rounded-md text-black w-28 h-8' selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
    );
};

export default CalendarComponent;