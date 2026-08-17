import { ArrowRight } from "lucide-react";
import React from "react";

const HeaderCard = ({ first, second, third }) => {
  return (
    <div className="h-full w-1/4 bg-white py-2 pl-3.5 rounded-2xl">
      <div className="flex flex-col items-start justify-start gap-1">
        <h1 className="text-3xl uppercase text-gray-600">{first}</h1>
        <p className="uppercase text-gray-400 text-lg">{second}</p>
        <span className="text-[#FF5200] mt-2">{third}</span>
      </div>
      <div className="flex items-end justify-between">
        <button className="rounded-full px-3 py-3 cursor-pointer"><ArrowRightt strokeWidth={2.5} /></button>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default HeaderCard;
