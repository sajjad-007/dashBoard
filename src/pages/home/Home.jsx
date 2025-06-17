import React from "react";
import Sidebar from "../../component/Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-between">
      <div className=" w-[20%]">
        <Sidebar /> 
      </div>
      <div className="  w-[77%] px-4  py-7 ">
        <Outlet/>
      </div>
    </div>
  );
};

export default Home;
