import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    
  };
  return (
    <div>
      <form onSubmit={formSubmit}>
        <input type="text" 
        placeholder="enter your name "
        value={text}
        onChange={(e)=>{
          setText(e.target.value);
        }}
        />
        <button className="">click</button>
      </form>
    </div>
  );
};

export default App;
