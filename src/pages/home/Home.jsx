import React from "react";
import Sidebar from "../../component/Sidebar";
import { Outlet } from "react-router-dom";
import Breadcrumb from "../../component/materialTailwind/Breadcrumb/Breadcrumb";

const Home = () => {
  return (
    <div className="flex justify-between">
      <div className=" w-[20%]">
        <Sidebar /> 
      </div>
      <div className="  w-[77%] px-4  py-7 ">
        <div className="mb-10">
          <Breadcrumb/>
        </div>
        <Outlet/>
      </div>
    </div>
  );
};

export default Home;
