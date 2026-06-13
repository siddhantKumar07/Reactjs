import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  const employeeData =useContext(AuthContext);// this will give the employees and admin data from Authcontext which takes data from localstorage


  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(title ,date , assignTo,category,description)
    employeeData.employees.forEach((emp)=>{
      if(assignTo==emp.firstname){
        emp.tasks.push( {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: title,
        taskDescription: description,
        taskDate: date,
        category: category,
      })
      emp.taskNumbers.active += 1
      emp.taskNumbers.newTask += 1
      }
      
    })
    localStorage.setItem("employees", JSON.stringify(employeeData.employees))// this will update the whole employees array into the local storage
    setTitle("")
    setDate("")
    setDescription("")
    setCategory("")
    setAssignTo("")
  }
  return (
    <form onSubmit={handleSubmit} className="text-white h-[50%] w-[95%] flex items-start justify-between  bg-[#3b3a3a] px-4.5 pb-2.5 rounded-lg">
      <div className="h-full w-[50%] pr-30">
   
      <h2 className="text-xl mt-2">Title Task :</h2>
      <input
      value={title}
      onChange={(e)=>{
        setTitle(e.target.value)
      }}
        type="text"
        className="px-1 border-2 border-gray-400 font-bold w-full py-1.5 text-xl rounded-xl mt-0.5"
        placeholder="Make a ui Design"
      />
      <h2 className="text-xl mt-4">Date :</h2>
      <input
      value={date}
      onChange={(e)=>{
        setDate(e.target.value)
      }}
        type="date"
        className=" border-2 border-gray-400 font-bold w-full py-1.5 px-1 text-xl rounded-xl mt-0.5"
      />
      <h2 className="text-xl mt-4">Assign To :</h2>
      <input
      value={assignTo}
      onChange={(e)=>{
        setAssignTo(e.target.value)
      }}
        type="text"
        className=" border-2 border-gray-400 font-bold w-full py-1.5 px-1 text-xl rounded-xl mt-0.5"
        placeholder="Enter Employee name"
      />
      <h2 className="text-xl mt-4">Category :</h2>
      <input
      value={category}
      onChange={(e)=>{
        setCategory(e.target.value)
      }}
        type="text"
        className=" border-2 border-gray-400 font-bold w-full py-1.5 px-1 text-xl rounded-xl mt-0.5"
        placeholder="design,dev,etc"
      />



      </div>
      <div className=" w-[50%]">
  <h2 className="text-lg mt-2">Description :</h2>
      <textarea
      value={description}
      onChange={(e)=>{
        setDescription(e.target.value)
      }}
        className=" px-1 h-60  font-bold  border-2 border-gray-400 w-[85%] py-2.5 text-xl rounded-xl mt-1.5"
        placeholder="Enter Description"
      ></textarea>
            <button className="mt-3 font-bold text-2xl py-2.5 w-[85%] bg-green-500 border-none active:scale-90 cursor-pointer text-white rounded-xl">
        Create Task
      </button>
      </div>
    </form>
  );
};

export default CreateTask;
    