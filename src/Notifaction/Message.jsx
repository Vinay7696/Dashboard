import React, { useEffect, useRef, useState } from "react";
// import { AiTwotoneMessage } from "react-icons/ai";
import { FaMessage } from "react-icons/fa6";
import billgates from "../ass/img/billgates.jpg";


const Message = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return ()=>{
      document.removeEventListener('mousedown', handleClickOutside);
    }
  },[]);
  const toggleDropdown =()=>{
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* <div className=''> */}
      <div className="">
        <a
          href="#"
         
          className=" flex h-8 w-8 items-center justify-center rounded-full border-[2px] border-stroke bg-[fff] hover:text-primary  "
        >
          {/* <span className="absolute mr-[283px] mt-[13px] z-1 h-2 w-2 rounded-full text-red bg-meta-1 
          "><span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-1"></span>
          </span> */}
        <FaMessage fontSize={25} onClick={toggleDropdown}   className="cursor-pointer" 
        />
            
        </a>
      </div>
      {isOpen && (

      <div ref={dropdownRef}
        className=" absolute  mt-[440px] ml-[-217px] flex h-[350px] w-[300px] flex-col rounded-sm border border-stroke bg-white shadow-default " >
        <div className="px-4 py-3">
          <h5 className="text-sm font-medium text-black">Messages</h5>
        </div>
        <ul className="flex h-auto flex-col overflow-y-auto">
          <li>
            <a
              href=""
              className="flex gap-4 border-t border-stroke px-4 py-3 hover:bg-gray-100"
            >
              <div>
                <img
                  src={billgates}
                  className="h-[50px] w-[50px] rounded-[50px] mx-1 my-1"
                  alt=""
                />
              </div>
              <div>
                <h6 className="text-sm font-medium text-black pb-1">
                  Mariya Desoja
                </h6>
                <p className="text-sm">I like your confidence 💪</p>
                <p className="text-xs">2min ago</p>
              </div>
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex gap-4 border-t border-stroke px-4 py-3 hover:bg-gray-100"
            >
              <div>
                <img
                  src={billgates}
                  className="h-[50px] w-[50px] rounded-[50px] mx-1 my-1"
                  alt=""
                />
              </div>
              <div>
                <h6 className="text-sm font-medium text-black pb-1">
                  Mariya Desoja
                </h6>
                <p className="text-sm">I like your confidence 💪</p>
                <p className="text-xs">2min ago</p>
              </div>
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex gap-4 border-t border-stroke px-4 py-3 hover:bg-gray-100"
            >
              <div>
                <img
                  src={billgates}
                  className="h-[50px] w-[50px] rounded-[50px] mx-1 my-1"
                  alt=""
                />
              </div>
              <div>
                <h6 className="text-sm font-medium text-black pb-1">
                  Mariya Desoja
                </h6>
                <p className="text-sm">I like your confidence 💪</p>
                <p className="text-xs">2min ago</p>
              </div>
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex gap-4 border-t border-stroke px-4 py-3 hover:bg-gray-100"
            >
              <div>
                <img
                  src={billgates}
                  className="h-[50px] w-[50px] rounded-[50px] mx-1 my-1"
                  alt=""
                />
              </div>
              <div>
                <h6 className="text-sm font-medium text-black pb-1">
                  Mariya Desoja
                </h6>
                <p className="text-sm">I like your confidence 💪</p>
                <p className="text-xs">2min ago</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
)}
      {/* </div> */}
    </>
  );
};

export default Message;
