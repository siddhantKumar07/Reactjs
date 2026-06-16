import React from "react";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import { Routes, Route } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div className="h-full w-full  text-white ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
<ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss={false}
draggable
pauseOnHover={false}
theme="dark"
transition={Bounce}
/>
    </div>
  );
};

export default App;
