import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [user, setUser] = useState([]);
  const [formDetails, setFormDetails] = useState({
    name: "",
    age: "",
  });

  const postData = async () => {
    if(formDetails.name===""||formDetails.age===""){
      alert("enter the value in both")
      return
    }
    const response = await axios({
      url: "https://6a34d42a8248ee962fa5af71.mockapi.io/users",
      method: "post",
      data: formDetails,
    });
    setFormDetails({
      name: "",
      age: "",
    });
    console.log(response.data);
    handleClick();
  };

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleClick = async () => {
    const response = await axios({
      url: "https://6a34d42a8248ee962fa5af71.mockapi.io/users",
    });
    setUser(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    handleClick();
  }, []);

  // for to edit the user

  const editData = async() => {
const response = await axios({
      url: "https://6a34d42a8248ee962fa5af71.mockapi.io/users",
      method: "put",
      data: formDetails,
    });
    setFormDetails({
      name: "",
      age: "",
    });
    console.log(response.data);
    handleClick();
  };

  return (
    <div className="flex items-center flex-col">
      <div className="h-[40vh] w-[50%] py-25 items-center gap-8 justify-between px-10 flex flex-col">
        <form className=" flex item-center gap-8">
          <input
            value={formDetails.name}
            onChange={(e) => {
              handleForm(e);
            }}
            className="py-3 px-5 text-xl font-bold border-2 border-black rounded"
            type="text"
            name="name"
            placeholder="name"
          />
          <input
            value={formDetails.age}
            className="py-3 px-5 text-xl font-bold border-2 border-black rounded"
            type="text"
            name="age"
            placeholder="age"
            onChange={(e) => {
              handleForm(e);
            }}
          />
        </form>

        <div className="flex gap-3">
          {/* <button
            className="bg-blue-400 py-3 px-2 ml-10 cursor-pointer rounded"
            onClick={handleClick}
          >
            FetchData
          </button> */}
        {formDetails.editMode?(
          <button
            className="bg-blue-400 py-3 px-2 ml-10 cursor-pointer rounded"
            onClick={editData}
          >
            editData
          </button>)
          :
          (<button
            className="bg-blue-400 py-3 px-2 ml-10 cursor-pointer rounded"
            onClick={postData}
          >
            postData
          </button>)}

        </div>
      </div>

      <div className="h-[60vh] w-full px-14 py-10 border-2 flex flex-wrap gap-5 overflow-auto border-red-700">
        {user.map((indivi) => {
          return (
            <div
              className="h-40 w-50 bg-sky-500 rounded px-3 py-1"
              key={indivi.id}
            >
              <h1 className="text-xl font-bold">{indivi.name}</h1>
              <p className="text-2xl font-bold mt-3">{indivi.age}</p>
              <button
                className="px-6 rounded-xl mt-3 ml-16 active:scale-90 cursor-pointer py-2 bg-black text-white"
                onClick={() => {
                 setFormDetails({...indivi,editMode:true});;
                }}
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
