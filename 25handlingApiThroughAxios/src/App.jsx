import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [user, setUser] = useState([]);
  const [formDetails, setFormDetails] = useState({
    name: "",
    age: "",
  });

  const postData = async () => {
    const response = await axios({
      url: "https://6a34d42a8248ee962fa5af71.mockapi.io/users",
      method: "post",
      data: formDetails,
    });
    setFormDetails({
    name: "",
    age: "",
  })
    console.log(response.data);
    handleClick();
  };
  const config = {
    url: "https://6a34d42a8248ee962fa5af71.mockapi.io/users",
  };

  console.log(formDetails);
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
    const response = await axios(config);
    setUser(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="flex items-center flex-col">
      <div className="h-[30vh] w-[50%] py-25 px-10">
        <form className=" flex item-center">
          <input
            onChange={(e) => {
              handleForm(e);
            }}
            className="py-3 px-5 border-2 border-black"
            type="text"
            name="name"
            placeholder="name"
          />
          <input
            className="py-3 px-5 border-2z border-black"
            type="text"
            name="age"
            placeholder="age"
            onChange={(e) => {
              handleForm(e);
            }}
          />
        </form>
      </div>
      <div className="flex w-full items-center justify-center gap-10">
        <button
          className="bg-blue-400 py-4 px-2 ml-10 cursor-pointer rounded"
          onClick={handleClick}
        >
          FetchData
        </button>
        <button
          className="bg-blue-400 py-4 px-2 ml-10 cursor-pointer rounded"
          onClick={postData}
        >
          postData
        </button>
      </div>
      <div className="h-[50vh] w-full border-2 flex flex-wrap gap-5 overflow-auto border-red-700">
        {user.map((user) => {
          return (
            <div
              className="h-30 w-30 bg-sky-500 rounded px-3 py-3"
              key={user.id}
            >
              <h1>{user.name}</h1>
              <p>{user.age}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
