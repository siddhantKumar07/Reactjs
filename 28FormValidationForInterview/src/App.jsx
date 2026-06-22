import React, { useState } from "react";
import { ToastContainer, toast,Bounce } from 'react-toastify';
const App = () => {
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [conpass, setConpass] = useState("")
  const [error, setError] = useState('')
const handleForm=(e)=>{
e.preventDefault();
if(password!==conpass){
  setError("Password is not matched")
  return;
}
else if(password.length<8){
  setError("Password must be greater than 8")
  return;
}
console.log(`name : ${name} , email : ${email} ,pass: ${password} , confirm pass : ${conpass}`)
setConpass("")
setError('')
setName("")
setEmail("")
setPassword("")
}

// toaster 
const notify =()=> toast.success('Form Submitted !!!', {
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: false,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
  return (
    <div className="h-screen w-full flex items-center justify-center p-1">
      <form onSubmit={(e)=>{
        handleForm(e)
      }} className=" px-7 w-[30%] h-[70%] flex flex-col gap-4  justify-center bg-sky-100 rounded border-2 border-cyan-500">
        <h1 className="text-3xl text-center font-bold underline">
          Create an Account
        </h1>
        <input
        required
         value={name}
         onChange={(e)=>{setName(e.target.value)}}
          type="text"
          placeholder="Enter your name"
          className="rounded py-3 px-4 text-2xl border-2 outline-none focus:border-cyan-700 focus:border-4"
        />
        <input
        required
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
          type="email"
          placeholder="Enter your email"
          className="rounded py-3 px-4 text-2xl border-2 outline-none focus:border-cyan-700 focus:border-4"
        />
        <input
        required
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
          type="password"
          placeholder="Enter your password"
          className="rounded py-3 px-4 text-2xl border-2 outline-none focus:border-cyan-700 focus:border-4"
        />
        <input
        required
        value={conpass}
        onChange={(e)=>{setConpass(e.target.value)}}
          type="password"
          placeholder="Confirm password"
          className="rounded py-3 px-4 text-2xl border-2 outline-none focus:border-cyan-700 focus:border-4"
        />
        {error && (
          <p className="text-lg text-red-600 font-semibold text-center">{error}</p>
        )}
        <button className="px-5 py-3 bg-emerald-800 rounded-2xl w-full active:scale-90 cursor-pointer text-xl text-white font-bold"
        onClick={notify}>
          
          Submit
        </button>
      </form>

      
      <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover={false}
theme="light"
transition={Bounce}
/>
    </div>
  );
};

export default App;
