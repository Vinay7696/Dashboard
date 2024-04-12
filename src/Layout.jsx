// import { Navbar } from '@material-tailwind/react'
import React from "react";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="flex">
        <div className=" basis-[16%]   h-[100vh] ">
          <Sidebar />
        </div>
        <div className="basis-[84%] h-[100vh] overflow-scroll ">

        <Navbar />
        <div>

        <Outlet></Outlet>
        </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
