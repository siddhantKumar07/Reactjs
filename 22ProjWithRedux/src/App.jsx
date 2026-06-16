import React from "react";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="h-full w-full  text-white ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </div>
  );
};

export default App;
