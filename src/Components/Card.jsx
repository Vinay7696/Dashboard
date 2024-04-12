import React from "react";
// import image from "../ass/img/image.jpg";
import { FaEye } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";

const Card = () => {
  return (
    <>
      {/* <div className=" flex mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <div className="grid grid-cols-3 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          <div className="rounded-sm border border-stroke bg-white py-6 px-7 shadow-default  ">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#000] ">
            <FaEye  className="text-[#fff]"/>
            </div>
            <div className="mt-4 flex items-end justify-between">
              <div>
                <h4 className="text-title-md text-[20px] font-bold text-black ">9999</h4>
                <span className="text-sm font-medium">total view</span>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-meta-3">40%<BsGraphUpArrow /></span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          <div className="rounded-sm border border-stroke bg-white py-6 px-7 shadow-default  ">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#000] ">
            <FaEye  className="text-[#fff]"/>
            </div>
            <div className="mt-4 flex items-end justify-between">
              <div>
                <h4 className="text-title-md text-[20px] font-bold text-black ">9999</h4>
                <span className="text-sm font-medium">total view</span>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-meta-3">40%<BsGraphUpArrow /></span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          <div className="rounded-sm border border-stroke bg-white py-6 px-7 shadow-default  ">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#000] ">
            <FaEye  className="text-[#fff]"/>
            </div>
            <div className="mt-4 flex items-end justify-between">
              <div>
                <h4 className="text-title-md text-[20px] font-bold text-black ">9999</h4>
                <span className="text-sm font-medium">total view</span>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-meta-3">40%<BsGraphUpArrow /></span>
            </div>
          </div>
        </div>
        
        <div></div>
      </div> */}

      <div className="pt-[25px] mt-[60px] px-[25px] bg-[#F8F9FC]  ">
      
        <div className="grid grid-cols-3 gap-[30px] mt-[25px] pb-[15px]  ">
          <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[25px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transtion duration-300 ease  ">
            <div>
              <h2 className="text-[#8589DF] text-[11px] leading-[17px] font-bold ">
                Earing (monthly)
              </h2>
              <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]     ">
                $40000
              </h1>
            </div>
            <CiCalendar fontSize={28} />
          </div>
          <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[25px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transtion duration-300 ease  ">
            <div>
              <h2 className="text-[#8589DF] text-[11px] leading-[17px] font-bold ">
                Earing (monthly)
              </h2>
              <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]     ">
                $40000
              </h1>
            </div>
            <CiCalendar fontSize={28} />
          </div>
          <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[25px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transtion duration-300 ease  ">
            <div>
              <h2 className="text-[#8589DF] text-[11px] leading-[17px] font-bold ">
                Earing (monthly)
              </h2>
              <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]     ">
                $40000
              </h1>
            </div>
            <CiCalendar fontSize={28} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
