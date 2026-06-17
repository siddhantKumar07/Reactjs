import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios";
const TopNav = () => {
  const [value, setValue] = useState("");

  const GetData = async () => {
    try {
      const d = await axios.get(`/search/multi?query=la`);
      console.log(d);
      
    } catch (err) {
      console.log(err);
    }
  }
      useEffect(()=>{
        GetData()
    },[]);
  return (
    <div className="h-[10nvh] relative w-full flex items-center gap-2 justify-center ">
      <i className="text-2xl mr-2 ri-search-line"></i>
      <input
        type="text"
        placeholder="Search anything...."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="px-4 py-4 outline-none text-xl w-[55%]"
      />
      {value.length > 0 && (
        <i
          onClick={() => {
            setValue("");
          }}
          className="cursor-pointer text-2xl ri-close-line"
        ></i>
      )}

      <div className="scroll scrollbar-thumb-cyan-800 scrollbar-thumb- absolute top max-h-[50vh] w-[50%] top-[90%] bg-zinc-200 overflow-auto">
        {/* <Link className='text-zinc-600 hover:bg-zinc-300 hover:text-black w-full flex items-start p-8 text-2xl border-b-4 border-zinc-100 '>
        <img src="" alt="" />
        <span>hello</span>
        </Link> */}
      </div>
    </div>
  );
};

export default TopNav;
