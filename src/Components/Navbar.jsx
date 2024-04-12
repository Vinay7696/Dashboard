import React from "react";
import {  FaSearch , FaAngleDown } from "react-icons/fa";
// import profile2 from "../ass/img/profile2.jpg";
import Noti from "../Notifaction/Noti";
import Message from "../Notifaction/Message";
import User from "../Notifaction/User";

const Navbar = () => {
  // const style ={
  //   fontSize: "20px",
  // }
  return (
    <div className=" flex items-center justify-between fixed w-full h-[70px] bg-[#fff] z-50  shadow-lg px-[25px]   ">
      <div className="flex items-center rounded-[5px] ">
        <input
          type="text"
          className="bg-[#F8F9FC] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal "
          placeholder="search for "
        />
        <div className="bg-[#4E73DF] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]  ">
          <FaSearch className="text-[#fff]" />
        </div>
      </div>
      <div className="flex items-center gap-[15px] mr-[215px] relative  ">
        <div className="flex items-center gap-[25px] border-r-[1px] pr-[25px]  ">
          <Noti/>
          {/* <FaEnvelope  fontSize={22}  className="cursor-pointer" /> */}
          <Message/>
        </div>
        <div className="flex items-center gap-[15px] relative  ">
          <p className="text-[18px]">vinay yadav</p>
          
            {/* <img
              src={profile2}
              className="w-[40px] h-[40px] rounded-[50px] bg-[#4E73DF] cursor-pointer flex items-center justify-center relative  "
              alt=""
            /> */}
            <User/>
          <FaAngleDown/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
