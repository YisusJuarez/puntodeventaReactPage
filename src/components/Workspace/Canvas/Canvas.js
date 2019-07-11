import React from "react";
import "./Canvas.css";

class Canvas extends React.Component {
  
  render() {
    return (
      <div className="card">
        <div className="card-header header-style">BIENVENIDO</div>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-secondary btn-styled-menu">
            MOVIMIENTOS
          </button>
          <button type="button" className="btn btn-secondary btn-styled-menu">
            ACLARACIONES
          </button>
          <button type="button" className="btn btn-secondary btn-styled-menu">
            RECARGAS
          </button>
        </div>
        <div className = "card-body card-body-style">
         
        </div>
      </div>
    );
  }
}
export default Canvas;
