import "./App.css";
import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const [setToCount, setSetToCount] = useState(0);
  return (
    <>
      <h1>Count is {count} </h1>
      <div className="card">Count is {count}</div>

      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          classsName=""
          style={{
            margin: "0 10px",
            height: "50px",
            width: "150px",
            fontSize: "18px",
          }}
        >
          Increment
        </button>

        <button
          onClick={() => {
            if (count > 0) setCount(count - 1);
          }}
          //this is the another way to decrease the count by not getting the value to - value , it a way to do with ternary operator
          // onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}
          style={{
            margin: "0 10px",
            height: "50px",
            width: "150px",
            fontSize: "18px",
          }}
        >
          Decrement
        </button>
        {/* for reset button */}
        <button
          onClick={() => {
            setCount(0);
          }}
          style={{
            margin: "0 10px",
            height: "50px",
            width: "150px",
            fontSize: "18px",
          }}
        >
          Reset
        </button>
      </div>

      <div style={{ margin: "10px 0px" }}>
        <input
          type="text"
          value={setToCount}
          onChange={(e) => {
            setSetToCount(Number(e.target.value));
          }}
          style={{
            height: "6vh",
            width: "17vw",
            margin: "4vh 2vw",
            font: "1.5vw",
            border: "3px solid white",
            borderRadius: "2px",
            padding: "0 10px",
          }}
        />
        <button
          onClick={() => {
            setCount(setToCount);
            setSetToCount(0);
          }}
          style={{
            margin: "0 10px",
            height: "50px",
            width: "150px",
            fontSize: "18px",
          }}
        >
          Set to {setToCount}
        </button>
      </div>
    </>
  );
}
