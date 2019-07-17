import React from "react";
import "./Saludo.css";
class Saludo extends React.Component {
  render() {
    return (
      <div className="card card-space">
        <div className="card-header header-style">BIENVENIDO</div>
        <div className="card-footer">Usuario: usuario@gmail.com</div>
      </div>
    );
  }
}
export default Saludo;
