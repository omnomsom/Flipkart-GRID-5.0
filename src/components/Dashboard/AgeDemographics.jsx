import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
const data = [
  {
    name: '10-20',
    pv: 2400,
    amt: 2400,
  },
  {
    name: '20-30',
    pv: 1398,
    amt: 2210,
  },
  {
    name: '30-40',
    pv: 9800,
    amt: 2290,
  },
  {
    name: '40-50',
    pv: 3908,
    amt: 2000,
  },
  {
    name: '50-60',
    pv: 4800,
    amt: 2181,
  },
  {
    name: '60-70',
    pv: 3800,
    amt: 2500,
  },
  {
    name: '70-80',
    pv: 4300,
    amt: 2100,
  },
];

function AmountDistributionChart() {
  return (
    <div className="w-11/12 h-5/6 flex flex-col justify-center items-center" >
      <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#F7A200" activeDot={{ r: 8 }} />
      
      </LineChart>
    </ResponsiveContainer>
      <p className="text-sm">Age Distribution</p>
    </div>
  );
}

export default AmountDistributionChart;
