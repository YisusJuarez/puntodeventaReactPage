import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Workspace from "./components/Workspace/Workspace";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Workspace></Workspace>
    </div>
  );
}

export default App;
