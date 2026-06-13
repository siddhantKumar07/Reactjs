import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const { userdata } = useContext(AuthContext);
  return (
    <div className="bg-[#3b3a3a] px-4 rounded-lg  w-[95%] ">
      <div className="bg-[#3b3a3a] px-2 py-1 flex rounded justify-between mb-2">
        <h2 className="text-xl w-1/5 text-center font-bold text-white">
          Employee Name
        </h2>
        <h2 className="text-xl w-1/5 text-center font-bold text-white">
          New Task
        </h2>
        <h2 className="text-xl w-1/5 text-center font-bold text-white">
          Active Task
        </h2>
        <h2 className="text-xl w-1/5 text-center font-bold text-white">
          Completed Task
        </h2>
        <h2 className="text-xl w-1/5 text-center font-bold text-white">
          Failed
        </h2>
      </div>
      <div className="removeScroll overflow-scroll h-53">
        {userdata.employees.map((elem) => {
          return (
            <div key={elem.id} className="border-2  border-emerald-500 px-2 py-3 flex rounded-xl justify-between mb-3">
              <h2 className="text-2xl text-center font-bold w-1/5">
                {elem.firstname}
              </h2>
              <h2 className="w-1/5 text-center font-bold text-xl text-blue-500">{elem.taskNumbers.newTask}</h2>
              <h2 className="w-1/5 text-center font-bold text-xl text-yellow-700">{elem.taskNumbers.active}</h2>
              <h2 className="w-1/5 text-center font-bold text-xl text-green-500">{elem.taskNumbers.completed}</h2>
              <h2 className="w-1/5 text-center  font-bold text-xl text-red-500">{elem.taskNumbers.failed}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
