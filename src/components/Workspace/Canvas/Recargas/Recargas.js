import React from "react";

import Jumbotron from 'react-bootstrap/Jumbotron'
class Recargas extends React.Component {
  render() {
    return (
        <Jumbotron>
        <h1>Información</h1>
        <p>
        Te redireccionaremos al portal de recarga del Banco Industrial
        </p>
        <p>
          <a href="https://www.corporacionbi.com/gt/bancoindustrial/inicio" className="btn btn-primary">Enlace a Recargas</a>
        </p>
      </Jumbotron>
    );
  }
}
export default Recargas;