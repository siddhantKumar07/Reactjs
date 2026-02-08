// const heading = React.createElement("h1", {id:"head"   },"hello this is created by me using react");
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "h1",
    { id: "head" },
    "hello this is created by me using react",
  ),
  [
    React.createElement(
      "div",
      { id: "child1" },
      React.createElement("h1", {}, "i am present in child1 div"),
    ),
    React.createElement(
      "div",
      { id: "child2" },
      React.createElement("h1", {}, "i am present in child2 div"),
    ),
  ],
]);

root.render(parent);
