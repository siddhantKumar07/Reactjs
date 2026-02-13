import "./App.css";
import { useState } from "react";
import QueueForm from "./componets/queueForm";
export default function App() {
  const [queue, setQueue] = useState([]);
  const addToQueue = (customer) => {};
  const updateQueue = (id, newStatus) => {};
  const removeFromQueue = (id) => {};
  return (
    <div className="app">
      <header>
        <h1>Queue Management System</h1>
        <p>Manage your customer here</p>
      </header>
      <main>
        <QueueForm addToQueue={addToQueue} />
        <h1>QueueDisplay</h1>
      </main>
    </div>
  );
}
