import React from "react";
// import { NavLink, useLocation } from 'react-router-dom';
import { FaHome , FaUser} from "react-icons/fa";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className=" bg-[#4E73DF]   h-screen">
      <div className="px-[15px] py-[20px] flex items-center justify-center border-b-[1px] border  ">
        <h1 className="text-white text-[20px] leading-[24px] font-bold cursor-pointer ">
          Dashboard
        </h1>
      </div>
      <ul className="mt-3 text-white font-bold  my-[20px] ">
        <li className=" mx-[10px]  mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3">
            <FaHome className="inline-block w-6 h-6 mr-2 -mt-2  "></FaHome>home
          </a>
        </li>
        
        <Link to={"/layout/chart"}>
        <li className=" mx-[10px]  mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3">
            <FaHome className="inline-block w-6 h-6 mr-2 -mt-2  "></FaHome>Chart
          </a>
        </li>
        </Link>

        <Link to={"/layout/profile"}>
        <li className=" mx-[10px]  mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3">
            <FaUser className="inline-block w-6 h-6 mr-2 -mt-2  "></FaUser>Profile
          </a>
        </li>
        </Link>
        <li className=" mx-[10px]  mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3">
            <FaHome className="inline-block w-6 h-6 mr-2 -mt-2  "></FaHome>home
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
