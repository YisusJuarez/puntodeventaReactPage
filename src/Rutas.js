import React from "react";
import Login from "./Login/Login";
import App from "./App";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class Rutas extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/inicio" exact component={App} />
      </Router>
    );
  }
}

export default Rutas;
