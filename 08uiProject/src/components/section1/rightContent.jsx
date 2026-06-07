import React from "react";
import Leftimg from "./leftimg";
import Midimg from "./midimg";
import Rightimg from "./rightimg";
const rightContent = (props) => {
  return (
    <div className=" h-[calc(100vh-8rem)] w-[75%] p-5 flex flex-wrap flex-col overflow-auto gap-2 no-scrollbar">
    {props.users.map((prop)=>{
        return <Leftimg img={prop.img} />

    //   <Midimg />
    //   <Rightimg />
    })}
      
    </div>
  );
};

export default rightContent;
