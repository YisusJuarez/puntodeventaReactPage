import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Workspace from "./components/Workspace/Workspace";
import "./App.css";
import { Provider } from "react-redux";
import Tienda from "./store";
function App() {
  return (
    <Provider store = {Tienda}>
      <div className="App">
        <Navbar />
        <Workspace />
      </div>
    </Provider>
  );
}

export default App;
