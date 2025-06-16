import React from "react";
import Sidebar from "../../component/Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex gap-[3%]">
      <div className=" w-[20%]">
        <Sidebar /> 
      </div>
      <div className="  w-[77%] p-8 pb-20 ">
        <Outlet/>
      </div>
    </div>
  );
};

export default Home;
