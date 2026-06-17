import React from "react";
import { Link } from "react-router-dom";
const SideNav = () => {
  return (
    <div className="w-[20%] h-full py-10 border-r-4 border-white p-4">
      <div className="flex w-full items-center gap-2 text-white font-bold">
        <i className="text-3xl text-[#013175] ri-tv-fill"></i>
        <h1 className="text-xl">MovieSearch</h1>
      </div>
      <h1 className="mt-7 ml-3 font-semibold text-2xl">New Feed</h1>
      <nav className="flex flex-col justify-center w-full px-5 gap-3 pt-4 items-start">
        <Link className="font-semibold text-zinc-300 text-xl hover:bg-[#4641ca] w-full px-4 duration-300 cursor-pointer py-3 hover:text-black rounded-xl"><i class="mr-2 ri-fire-fill"></i>Trending</Link>
        <Link className="font-semibold text-zinc-300 text-xl hover:bg-[#4641ca] w-full px-4 duration-300 cursor-pointer py-3 hover:text-black rounded-xl"><i class="mr-2 ri-bard-fill"></i>Popular</Link>
        <Link className="font-semibold text-zinc-300 text-xl hover:bg-[#4641ca] w-full px-4 duration-300 cursor-pointer py-3 hover:text-black rounded-xl"><i class="mr-2 ri-movie-fill"></i>Movies</Link>
        <Link className="font-semibold text-zinc-300 text-xl hover:bg-[#4641ca] w-full px-4 duration-300 cursor-pointer py-3 hover:text-black rounded-xl"><i class="mr-2 ri-tv-2-fill"></i>TV shows</Link>
        <Link className="font-semibold text-zinc-300 text-xl hover:bg-[#4641ca] w-full px-4 duration-300 cursor-pointer py-3 hover:text-black rounded-xl"><i class="mr-2 ri-team-fill"></i>People</Link>
      </nav>
      <hr className="border-none h-0.5 mt-2 bg-zinc-300"/>
      <nav className="flex flex-col justify-center w-full px-5 gap-3 pt-4 items-start py-4">
      <h1 className="text-white font-semibold text-2xl">Website Information</h1>
        <Link className="font-semibold text-zinc-300 text-xl hover:bg-[#4641ca] w-full px-4 duration-300 cursor-pointer py-3 hover:text-black rounded-xl"><i class="mr-2 ri-information-fill"></i>About</Link>
        <Link className="font-semibold text-zinc-300 text-xl hover:bg-[#4641ca] w-full px-4 duration-300 cursor-pointer py-3 hover:text-black rounded-xl"><i class="mr-2 ri-phone-line"></i>Contact Us</Link>
      </nav>
    </div>
  );
};

export default SideNav;
