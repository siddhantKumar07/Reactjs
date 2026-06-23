import React, { useState } from "react";
import {ToastContainer,toast,Bounce} from 'react-toastify'
const App = () => {
  const [error, setError] = useState('')
  const [users,setUsers]= useState([])
const [formData, setFormData] = useState({
  fullName:"",
  email:'',
  password:'',
  confPass:''
})

const handleChange=(e)=>{
 const {name,value}=e.target;
  setFormData((prev)=>({
    ...prev,
    [name]:value
}))


}

const handleForm=(e)=>{
  e.preventDefault();

   if (formData.password !== formData.confPass) {
      setError("Password is not matched");
      return;
    }
    if (formData.password.length < 8) {
      setError("Password must be greater than 8");
      return;
    }
    // regix for pass
    if (!/[,<>!./;:@#$&*]/.test(formData.password)) {
      setError("password must contain a special character");
      return;
    }
    if (!/[A-Z]/.test(formData.password)) {
      setError("Password must contain a Capital letter");
      return;
    }
users.push(formData)
console.log(users)

setFormData(
  {
    fullName:"",
  email:'',
  password:'',
  confPass:''
  }
)
  notify()

  setError('')
}



 // toaster
    const notify = () =>
      toast.success("Form Submitted !!!", {
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
    <>
   <div className="h-screen w-full flex items-center justify-center p-1">
      <form
        onSubmit={(e) => {
          handleForm(e);
        }}
        className=" px-7 w-[30%] h-[70%] flex flex-col gap-4  justify-center bg-sky-100 rounded border-2 border-cyan-500"
      >
        <h1 className="text-3xl text-center font-bold underline">
          Create an Account
        </h1>
        <input
          required
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          type="text"
          placeholder="Enter your name"
          className="rounded py-3 px-4 text-2xl border-2 outline-none focus:border-cyan-700 focus:border-4"
        />
        <input
        name="email"
        value={formData.email}
        onChange={handleChange}
          required
          type="email"
          placeholder="Enter your email"
          className="rounded py-3 px-4 text-2xl border-2 outline-none focus:border-cyan-700 focus:border-4"
        />
        <input
        name="password"
        value={formData.password}
        onChange={handleChange}
          required
          type="password"
          placeholder="Enter your password"
          className="rounded py-3 px-4 text-2xl border-2 outline-none focus:border-cyan-700 focus:border-4"
        />
        <input
        name="confPass"
        value={formData.confPass}
        onChange={handleChange}
          required
          type="password"
          placeholder="Confirm password"
          className="rounded py-3 px-4 text-2xl border-2 outline-none focus:border-cyan-700 focus:border-4"
        />
        {error && (
          <p className="text-lg text-red-600 font-semibold text-center">
            {error}
          </p>
        )}
        <button className="px-5 py-3 bg-emerald-800 rounded-2xl w-full active:scale-90 cursor-pointer text-xl text-white font-bold">
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

    <div className="h-full w-full flex items-center gap-3 px-5 flex-wrap bg-emerald-400">
   {users.map((user,idx)=>{
    return(
      <h1 className=" bg-amber-400 py-3 px-3 w-fit text-2xl"key={idx}>{user.fullName}</h1>
    )
   })}
    </div>

    </>
  );
};

export default App;
