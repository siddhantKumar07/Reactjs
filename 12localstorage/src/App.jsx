import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
const App = () => {
  const [fullname, setFullname] = useState(JSON.parse(localStorage.getItem("fullname"))||[]);

  // const obj = {
  //   name:"siddhant kumar",
  //   age:22,
  //   city:"somewhere in india"
  // }
  // localStorage.setItem("obj",JSON.stringify(obj))
  const [name, setName] = useState()
  
  useEffect(() => {
    localStorage.setItem("fulname",JSON.stringify(fullname))
  }, [fullname])
  
  return (
    <div>
   <form  onSubmit={(e)=>{
e.preventDefault()
    console.log(name);
    localStorage.setItem("name",name)
    const gettedname= [...fullname];
    gettedname.push(name);
    setFullname(gettedname)
   }}>
       <input 
      type="text"
       placeholder='enter name'
       value={name}
       onChange={(e)=>{
        setName(e.target.value)
       }}
       />
      <button>click</button>
   </form>
      </div>
  )
}

export default App