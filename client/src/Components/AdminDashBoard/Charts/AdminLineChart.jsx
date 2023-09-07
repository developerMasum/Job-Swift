import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FunctionComponent } from "react";
import TopCompanyTable from '../TopCompanyTable';

const AdminLineChart = () => {
    const data = [
        {
          name: 'January ',
          hired: 4000,
          applications: 2400,
          amt: 2400,
        },
        {
          name: 'February',
          hired: 3000,
          applications: 1398,
          amt: 2210,
        },
        {
          name: 'March',
          hired: 2000,
          applications: 9800,
          amt: 2290,
        },
        {
          name: 'April',
          hired: 2780,
          applications: 3908,
          amt: 2000,
        },
        {
          name: 'May',
          hired: 1890,
          applications: 4800,
          amt: 2181,
        },
        {
          name: 'June',
          hired: 2390,
          applications: 3800,
          amt: 2500,
        },
        {
          name: 'July',
          hired: 3490,
          applications: 4300,
          amt: 2100,
        },
      ];
      const CustomizedLabel = (props) => {
        const { x, y, stroke, value } = props;
      
        return (
          <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
            {value}
          </text>
        );
      };
      
      const CustomizedAxisTick = (props) => {
        const { x, y, payload } = props;
      
        return (
          <g transform={`translate(${x},${y})`}>
            <text
              x={0}
              y={0}
              dy={16}
              textAnchor="start"
              fill="#666"
              transform="rotate(0)"
            >
              {payload.value}
            </text>
          </g>
        );
      };

    return (
     
         <div>
          <div> <p className='uppercase text-sm font-bold text-primary pb-6'> Application wise hired candidate </p></div>
             <ResponsiveContainer width={600} height={400}>
        <LineChart
          width={300}
          height={100}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
          
        >
          {/* <CartesianGrid strokeDasharray="5 5" /> */}
          <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="applications" stroke="#8884d8" label={<CustomizedLabel />} />
          <Line type="monotone" dataKey="hired" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
        </div>
      

    
    );
};

export default AdminLineChart;