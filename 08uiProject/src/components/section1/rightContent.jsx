import React from "react";
import Leftimg from "./leftimg";
import Midimg from "./midimg";
import Rightimg from "./rightimg";
const rightContent = () => {
  return (
    <div className=" h-[calc(100vh-8rem)] w-[75%] p-5 flex gap-8">
      <Leftimg />
      <Midimg />
      <Rightimg />
    </div>
  );
};

export default rightContent;
