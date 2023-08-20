import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
const data = [
  {
    name: '10',
    Amount: 1200,
  },
  {
    name: '20',
    Amount: 7500,
  },
  {
    name: '30',
    Amount: 9800,

  },
  {
    name: '40',
    Amount: 5500,
  
  },
  {
    name: '50',
    Amount: 3908,
   
  },
  {
    name: '60',
    Amount: 2000,
   
  },
  {
    name: '70',
    Amount: 1800,

  },
  {
    name: '80',
    Amount: 1500,
   
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
        
        <Line type="monotone" dataKey="Amount" stroke="#F7A200" activeDot={{ r: 8 }} />
      
      </LineChart>
    </ResponsiveContainer>
      <p className="text-sm">Age-wise Popularity</p>
    </div>
  );
}

export default AmountDistributionChart;
