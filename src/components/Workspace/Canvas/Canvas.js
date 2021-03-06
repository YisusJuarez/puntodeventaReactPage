import React from "react";
import "./Canvas.css";
import Movimientos from "./Movimientos/Movimientos";
import Recargas from "./Recargas/Recargas";
import Aclaraciones from "./Aclaraciones/Aclaraciones";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Canvas extends React.Component {
  render() {
    return (
      <div className="card shadow space-card">
        <div className="card-header">
          <span>Cuenta o Tag: {this.props.seleccionado}</span>
        </div>
        <Router>
          <div className="btn-group" role="group" aria-label="Basic example">
            <NavLink
              className="btn btn-secondary btn-styled-menu"
              to="/Movimientos"
            >
              MOVIMIENTOS
            </NavLink>
            <NavLink
              className="btn btn-secondary btn-styled-menu"
              to="/Aclaraciones"
            >
              ACLARACIONES
            </NavLink>
            <NavLink
              className="btn btn-secondary btn-styled-menu"
              to="/Recargas"
            >
              RECARGAS
            </NavLink>
          </div>
          <div className="card-body card-body-style">
            <Route
              exact
              path="/Movimientos"
              render={props => <Movimientos />}
            />
            <Route
              exact
              path="/Aclaraciones"
              render={props => <Aclaraciones />}
            />
            <Route exact path="/Recargas" render={props => <Recargas />} />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  seleccionado: state.seleccionado
});
export default connect(
  mapStateToProps,
  {}
)(Canvas);

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
