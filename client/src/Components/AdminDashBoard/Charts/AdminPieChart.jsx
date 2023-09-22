import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const AdminPieChart = () => {
  const data = [
    { name: 'Hired', value: 700 },
    { name: 'Interview', value: 300 },
    { name: 'Applied', value: 300 },
    { name: 'Assessment', value: 200 },
  ];

  const COLORS = ['#33afb4', '#6483eb', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
 <div> 
       <PieChart width={600} height={400}>
      <Pie
        data={data}
        cx={300} 
        cy={200} 
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={120} 
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
 </div>
  );
};

export default AdminPieChart;