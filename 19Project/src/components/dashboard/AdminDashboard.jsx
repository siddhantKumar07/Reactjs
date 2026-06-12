import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = (props) => {
  // Inside the props the admin detail is passed through the local storage
  console.log()
  return (
    <div className="bg-[#1c1c1c] h-screen w-full flex flex-col  gap-8 items-center">
      <Header />
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
