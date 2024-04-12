import React from 'react'
// import React, { PureComponent } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart } from 'recharts';
import Piecharts from './Piecharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const Charts = () => {
  return (
    <div className=' flex mt-[22px]  gap-[30px]  bg-[#F8F9FC] '>
      <div className='basis-[55%] ml-[25px] my-[10px] border bg-white shadow-md cursor-pointer rounded-[4px] '>
        <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]  '>
            <h2>hello</h2>
            <BsThreeDotsVertical />
        </div>
        <div>
      <LineChart
      width={600}
      height={350}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
    </div>
      </div>

      <div className='basis-[35%] mr-[20px] my-[10px] border bg-white shadow-md cursor-pointer rounded-[4px]'>
        <div className='bg-[#F8F9FC] px-[20px] flex items-center justify-between py-[15px] border-b-[1px] border-[#EDEDED] mb-[20px]   '>
          <h2 className=''> hello</h2>
          <BsThreeDotsVertical />
        </div>
        <div className=''>
        <Piecharts/>
        </div>
      </div>
    </div>
  )
}

export default Charts
