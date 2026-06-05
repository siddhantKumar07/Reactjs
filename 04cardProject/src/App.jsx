import React from "react";
import Card from "./components/card";
const App = () => {
  return (
    <div className="parent">
      <Card 
      img="https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWxpbmd8ZW58MHx8MHx8fDA%3D"
      name="siddhant"
      position="software developer"
      money ="$250"
      address="gorakhpur, up"
      />
      <Card 
      img="https://i.pinimg.com/736x/a2/a6/f9/a2a6f95f90f031518b623bd7838e735f.jpg"
      name="mahendra"
      position="cricketer"
      money ="$850"
      address="ranchi, jk"
      />
      <Card 
      img="https://i.pinimg.com/736x/52/a1/de/52a1de8e7beec0fd18f615ed1fb2cd9f.jpg"
      name="someone"
      position="software engineer"
      money ="$150"
      address="somethingpur"
      />
      <Card 
      img="https://i.pinimg.com/736x/fd/b3/ed/fdb3ed2fe8a5f9ce092796cd987d462c.jpg"
      name="another singh"
      position="web developer"
      money ="$50"
      address="america, usa"
      />
    </div>
  );
};

export default App;
