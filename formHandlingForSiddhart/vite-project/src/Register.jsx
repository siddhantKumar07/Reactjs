import { useState } from "react";
import "./Register.css";

function Register() {
  
    const [user, setUser] = useState({
        userName:"",
        password:'',
        confirmPass:"",
        gmail:""
    })  
    
const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(user)
}

const handleChange=(e)=>{
const {name,value}=e.target
console.log(e)
console.log(name,value)
setUser((prev)=>{
    return{
        ...prev,
        [name]:value
    }
})
}



  return (
    <div className="form-container">
      <h2>Create Account</h2>

      <form onSubmit={handleSubmit} >
        <label htmlFor="username">Username</label>
        <input
        name="userName"
        value={user.userName}
          type="text"
          id="username"
          placeholder="Enter username"
          required
          onChange={handleChange}
        />

        <label htmlFor="gmail">Gmail</label>
        <input
        value={user.gmail}
        name="gmail"
          type="email"
          id="gmail"
          placeholder="Enter your Gmail"
          required
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
        name="password"
        value={user.password}
          type="password"
          id="password"
          placeholder="Enter password"
          required
          onChange={handleChange}
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
        name="confirmPass"
        value={user.confirmPass}
          type="password"
          id="confirmPassword"
          placeholder="Confirm password"
          required
          onChange={handleChange}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
