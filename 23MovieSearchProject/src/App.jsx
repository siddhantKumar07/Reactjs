import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
const App = () => {
  return (
    <div className="bg-[#1f1e24] h-screen w-full">
      <Routes>
       <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App