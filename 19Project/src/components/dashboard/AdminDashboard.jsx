import React from "react";
import Header from "../others/Header";

const AdminDashboard = () => {
  return (
    <div className="bg-[#1c1c1c] h-screen w-full flex flex-col  gap-8 items-center">
      <Header />
      <form className="text-white h-[83%] w-[30%] bg-gray-800 px-4.5 py-1.5 rounded-lg">
        <h1 className="text-xl font-bold">Create Task</h1>
        <h2 className="text-lg mt-8">Title Task :</h2>
        <input
          type="text"
          className="bg-gray-400 font-bold w-full py-1.5 text-xl rounded-xl mt-0.5"
        />
        <h2 className="text-lg mt-3">Description :</h2>
        <textarea className="max-h-20 font-bold bg-gray-400 w-full py-1.5 text-xl rounded-xl mt-0.5"></textarea>
        <h2 className="text-lg mt-3">Date :</h2>
        <input
          type="date"
          className="bg-gray-400 font-bold w-full py-1.5 px-1 text-xl rounded-xl mt-0.5"
        />
        <h2 className="text-lg mt-3">Assign To :</h2>
        <input
          type="text"
          className="bg-gray-400 font-bold w-full py-1.5 px-1 text-xl rounded-xl mt-0.5"
        />
        <h2 className="text-lg mt-3">Category :</h2>
        <input
          type="text"
          className="bg-gray-400 font-bold w-full py-1.5 px-1 text-xl rounded-xl mt-0.5"
        />

        <button className="mt-3 py-2.5 w-full bg-black border-none active:scale-90 cursor-pointer text-white rounded-xl">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;
