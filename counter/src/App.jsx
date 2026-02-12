import "./App.css";
export default function App() {
  return (
    <>
      <h1>Counter App</h1>
      <div className="card">Count is 32</div>

      <div>
        <button
          onClick={() => {}}
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
          // value={6}
          onChange={() => {}}
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
        onClick={()=>{}}
          style={{
            margin: "0 10px",
            height: "50px",
            width: "150px",
            fontSize: "18px",
          }}
        >
          Set to 8
        </button>
      </div>
    </>
  );
}
