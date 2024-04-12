import React, { useEffect, useRef, useState } from "react";
import { FaUser } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import profile2 from "../ass/img/profile2.jpg";
import userEvent from "@testing-library/user-event";
const User = () => {
  const [open, setopen] = useState(false);

const dropdownRef = useRef(null);
useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setopen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return ()=>{
      document.removeEventListener('mousedown', handleClickOutside);
    }
  },[]);
  const toggleDropdown =()=>{
    setopen(!open);
  };

 
  return (
    <>
      <div className="relative">
        <img
      
          onClick={toggleDropdown}
          src={profile2}
          alt=""
          className="h-10 w-10 object-cover border-2 border-gray-400 rounded-full cursor-pointer"
        />
        {open && (
          <div   ref={dropdownRef} className="bg-white p-4 w-52 shadow-lg absolute border border-stroke bg-white shadow-default ml-[-142px]">
            <ul className=" border border-stroke bg-white shadow-default px-4 py-5 text-[#5a5c69]  ">
              <li onClick={() => setopen(!false)} className="flex  mb-2">
                <a
                  href=""
                  className="flex items-center  text-[18px] font-medium duration-300 ease-in-out hover:text-blue-500"
                >
                  <FaUser className="mr-[20px]" />
                  My Profile
                </a>
              </li>
              <li className="flex  mb-2">
                <a
                  href=""
                  className="flex items-center  text-[18px] font-medium duration-300 ease-in-out hover:text-blue-500"
                >
                  <RiContactsBook2Fill className="mr-[20px]" />
                  My Contact
                </a>
              </li>
              <li className="flex mb-2 ">
                <a
                  href=""
                  className="flex items-center  text-[18px] font-medium duration-300 ease-in-out hover:text-blue-500"
                >
                  <IoSettings className="mr-[20px]" />
                  Setting
                </a>
              </li>
            </ul>
            <button className="flex items-center text-[#5a5c69] font-bold px-6 py-4  font-medium duration-300 ease-in-out hover:text-blue-500 text-[18px]">
              <CiLogout className="mr-[20px] text-[20px] font-bold" /> logout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default User;
