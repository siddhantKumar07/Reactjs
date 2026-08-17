import { ArrowRight } from "lucide-react";
import React from "react";

const HeaderCard = ({image }) => {
  return (
    <div className="h-full w-2/5 bg-white  rounded-4xl cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
       <img src={image} alt="image" className="h-full w-full object-center scale-115 rounded-4xl" />
    </div>
  );
};

export default HeaderCard;
