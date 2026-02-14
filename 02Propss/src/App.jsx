import Card from "./components/card.jsx";
function App() {
  return (
    <>
      <div className="parent">
        <Card
          title="Siddhant kumar"
          img="https://plus.unsplash.com/premium_photo-1690031000842-1ac0508f18b7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          title="thala"
          img="https://www.livemint.com/lm-img/img/2023/04/23/1600x900/MS_Dhoni_1682266132445_1682266132661.jpg"
        />
      </div>
    </>
  );
}
export default App;
