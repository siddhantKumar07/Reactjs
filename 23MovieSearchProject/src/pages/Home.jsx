import React from "react";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";

const Home = () => {
  return (
    <div className="w-full h-full flex  text-white">
        <SideNav/>
      <div className="w-[80%] h-full">
        <TopNav/>
      </div>
    </div>
  );
};

export default Home;
