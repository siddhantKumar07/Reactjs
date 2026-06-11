import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const SubmitHandle =(e)=>{
    e.preventDefault();
    console.log("email : "+email)
    console.log("password : "+pass)
    setEmail("")
    setPass("")
  }
  return (
    <div className="h-screen w-full flex p-0.5 items-center justify-center bg-gradient-to-b from-blue-300 via-purple-500 to-pink-300">
      <div
        className=" w-[400px] h-[600px] bg-gray-800 border-2 border-b-blue-950 px-3
      flex flex-col gap-28 rounded-3xl justify-start items-start py-5"
      >
        <h1 className="text-start font-bold text-3xl text-white">Log in</h1>

        <form onSubmit={SubmitHandle} className="flex flex-col h-[80%] py-3 gap-9 w-full px-2   ">
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
          required
            type="email"
            placeholder="Email"
            className="px-10 py-2 text-white bg-black text-2xl border-2 border-emerald-400 rounded-full outline-none placeholder:text-gray-400"
          />
          <input
          value={pass}

          onChange={(e)=>{
            setPass(e.target.value)
          }}
          required
            type="password"
            placeholder="Password"
            className="px-10 py-2 outline-none placeholder:text-gray-400 text-white bg-black text-2xl border-2 border-emerald-400  rounded-full"
          />
          <div className="flex items-center justify-between">
            <div className="flex gap-2.5">
              <input type="checkbox" id="remeber" className="cursor-pointer" />
              <label
                htmlFor="remeber"
                className="font-bold text-md text-gray-400 cursor-pointer"
              >
                Remember me
              </label>
            </div>
            <a href="" className=" text-md text-red-500">
              Forgot Password
            </a>
          </div>
          <button className="px-6 py-2.5 bg-red-400 text-lg rounded-full border-none active:scale-90 cursor-pointer font-bold text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
