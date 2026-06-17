import React from "react";
import SideNav from "../components/SideNav";

const Home = () => {
  return (
    <div className="w-full h-full flex  text-white">
        <SideNav/>
      <div className="w-[80%] h-full bg-red-400"></div>
    </div>
  );
};

export default Home;
