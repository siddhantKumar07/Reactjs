import React, { useState } from "react";
import { X } from 'lucide-react';
const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [tasks, setTask] = useState([])

  // let data = JSON.parse(localStorage.getItem("cards")) || [];
  // function store() {

//   data.forEach((elem) => {
//     console.log(elem);
//   });

//   data.push(task);

//   localStorage.setItem("cards", JSON.stringify(data));
// }
  const handleform = (e) => {
    e.preventDefault();
    console.log(detail);
    console.log(title);
    const copytask =[...tasks]
    copytask.push({title,detail})
    setTask(copytask)
    console.log(tasks);
    
    setTitle("");
    setDetail("");
    // store();
  };

  return (
    <div className="h-screen w-full lg:flex bg-black p-0.5  ">
      <form
        onSubmit={handleform}
        className="flex flex-col gap-4 justify-between lg:w-1/2 m-10 h-[60%] w-[40%] items-start p-7"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter notes Heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className=" outline-none px-4 py-3 w-full rounded text-white  border-2 text-3xl bg-black"
        />

        <textarea
          type="text"
          placeholder="Enter the details"
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value);
          }}
          className="px-4 py-8 max-h-40 outline-none rounded w-full text-white border-2 text-3xl bg-black"
        />
        <button className="active:scale-90 px-4 cursor-pointer py-5 w-full bg-white outline-none text-black rounded-2xl font-bold text-2xl ">
          Add note
        </button>
      </form>
      <div className=" h-full  lg:w-1/2 border-l-4 lg:border-white pl-1">
        <h1 className="text-center h-[5%] text-3xl font-bold text-white">
          Your Tasks
        </h1>
        <div className="flex gap-3 flex-wrap py-8 px-1 overflow-auto h-[calc(100vh-5%)]">
          {tasks.map((task,idx)=>{
            return  <div key={idx} className="h-60 py-5 relative px-3.5 w-57 bg-cover rounded-4xl bg-[url('https://www.bing.com/th/id/OIP.rQE-2z4GsRRsCjlZrqiffwHaKX?w=193&h=270&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2')]">
              <h1 className="absolute cursor-pointer right-1.5 px-2 py-2 bg-red-500 rounded-full top-2"><X size={24} color="#fff" /></h1>
            <h1 className="text-4xl font-bold">{task.title}</h1>
            <h3 className="text-2xl h-[80%]">{task.detail}</h3>
          </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
