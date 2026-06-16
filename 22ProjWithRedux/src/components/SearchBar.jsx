import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";
import { Link } from "react-router-dom";
import Tabs from "./Tabs";
const SearchBar = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(setQuery(value));
    console.log("submitted :" + value);
    setValue("");
  };
  return (
    <div className="flex items-center flex-col  w-full gap-8 pl-8 h-[45vh] bg-[#0B1326]">
      <div className=" mt-6 h-fit w-[50%]">
        <h1 className="font-bold text-5xl text-center text-[#DAE2FD]">
          {" "}
          Discover the World's most <br />
          <h1 className="text-center text-[#DAE2FD]">
            energetic imagery.
          </h1>{" "}
        </h1>
      </div>
      <form
        className=" flex items-center py-2 px-2 pl-4 gap-5 w-[45%] bg-[#182134] rounded-full"
        onSubmit={(e) => {
          submitHandle(e);
        }}
      >
        <i className="text-2xl font-bold ri-search-line"></i>
        <input
          className="px-4 py-5 w-[70%] text-xl text-white outline-none rounded-full"
          type="text"
          placeholder="Search for photos you like....."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button className=" text-blue-700 text-lg font-bold active:scale-90 cursor-pointer justify-self-end rounded-full px-7 h-10 bg-[#C0C1FF]">
          Search
        </button>
      </form>
      <div className="h-14 w-[45%] py-3 flex ">
        <Tabs />
        <Link to={"/collection"}>
          <button className="ml-8 px-8 py-1  rounded-full active:scale-90 cursor-pointer text-lg bg-[#2a3f76] hover:bg-[#324677]">
            <i className="mr-3 ri-bookmark-line"></i>Collection
          </button>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default SearchBar;
