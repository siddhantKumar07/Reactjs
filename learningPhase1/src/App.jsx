import "./App.css";
import Card from "./components/card";
import Header from "./components/header";
import Section from "./components/section";
function App() {
  return (
    <>
      {/* <div className="app">
        <h1>Welcome to My React App</h1>
        <p className="text-red-300 text-5xl border-4 rounded-2xl p-2.5 ">
          This is a simple React application.
        </p>
      </div> */}
     <Header />
     <Section />
      <div className="flex  overflow-scroll">
        <Card
          title="resting...."
          buttonText="heySid"
          img="https://images.unsplash.com/photo-1760399219837-fc7044842ba8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWwlMjBpbiUyMHdlc3Rlcm58ZW58MHx8MHx8fDA%3D"
        />
        <Card
          title="joging is good "
          buttonText="heyTap!"
          img="https://images.unsplash.com/photo-1571103774222-032bcfbf6bac?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          title="models is love "
          buttonText="click here!"
          img="https://images.unsplash.com/photo-1618375531912-867984bdfd87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"
        />
      </div>
    </>
  );
}

export default App;
