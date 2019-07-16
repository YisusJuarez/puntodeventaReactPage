import React from "react";
import "./Canvas.css";
import Movimientos from "./CanvasDom/Movimientos/Movimientos";
import Recargas from "./CanvasDom/Recargas/Recargas";
import Aclaraciones from "./CanvasDom/Aclaraciones/Aclaraciones";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class Canvas extends React.Component {
  state = {
    select: 0
  };

  render() {
    return (
      <div className="card shadow">
        <div className="card-header header-style">BIENVENIDO</div>
        <div className="card-footer">Usuario:</div>
        <Router>
          <div className="btn-group" role="group" aria-label="Basic example">
            <NavLink className="btn btn-secondary btn-styled-menu" exact to="/">
              Movimientos
            </NavLink>
            <NavLink
              className="btn btn-secondary btn-styled-menu"
              to="/Aclaraciones"
            >
              Aclaraciones
            </NavLink>
            <NavLink
              className="btn btn-secondary btn-styled-menu"
              to="/Recargas"
            >
              Recargas
            </NavLink>
          </div>
          <div className="card-body card-body-style">
            <Route exact path="/" component={Movimientos} />
            <Route exact path="/Aclaraciones" component={Aclaraciones} />
            <Route exact path="/Recargas" component={Recargas} />
          </div>
        </Router>
      </div>
    );
  }
}
export default Canvas;

/* 
import CanvasDom from "./CanvasDom/CanvasDom";
<div className="card shadow">
<div className="card-header header-style">BIENVENIDO</div>
<div className="card-footer">Usuario:</div>
<div className="btn-group" role="group" aria-label="Basic example">
  <button
    type="button"
    onClick={() =>  this.setState({ select: 0 })}
    className="btn btn-secondary btn-styled-menu"
  >
    MOVIMIENTOS
  </button>
  <button
    type="button"
    onClick={() => this.setState({ select: 1 })}
    className="btn btn-secondary btn-styled-menu"
  >
    ACLARACIONES
  </button>
  <button
    type="button"
    onClick={() => this.setState({ select: 2 })}
    className="btn btn-secondary btn-styled-menu"
  >
    RECARGAS
  </button>
</div>
<div className="card-body card-body-style">
<CanvasDom seleccion = {this.state.select}></CanvasDom>
</div>
</div> */
