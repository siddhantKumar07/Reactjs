import React from "react";
import Imgs from "./Imgs";
const rightContent = (props) => {
  return (
    <div className=" h-[calc(100vh-8rem)] w-[75%] p-5 flex flex-wrap flex-col overflow-auto gap-2 no-scrollbar">
    {props.users.map((prop)=>{
        return <Imgs img={prop.img} Number={prop.Number} intro={prop.intro} tag={prop.tag}/>
    })}
      
    </div>
  );
};

export default rightContent;
