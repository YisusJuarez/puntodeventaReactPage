import React from "react";
import Table from "react-bootstrap/Table";
import "./Movimientos.css"
class Movimientos extends React.Component {
  render() {
    return (
      <div>
          <span className="saldo">Saldo actual: $30.00</span>
          <Table className="space-table" bordered striped responsive>
        <thead>
          <tr>
            <th>Movimiento</th>
            <th>Caseta/Tramo</th>
            <th>Fecha</th>
            <th>Monto</th>
            <th>Saldo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cruce</td>
            <td>Palín-Escuintla</td>
            <td>11/04/2019</td>
            <td>-$110.00</td>
            <td>$30.00</td>
         
          </tr>
          <tr>
            <td>Cruce</td>
            <td>Palín-Escuintla</td>
            <td>10/04/2019</td>
            <td>-$100.00</td>
            <td>$140.00</td>
        
          </tr>
          <tr>
            <td>Recarga</td>
            <td>-</td>
            <td>10/04/2019</td>
            <td>$140.00</td>
            <td>$240.00</td>
          
          </tr>
        </tbody>
      </Table>
      </div>
    );
  }
}
export default Movimientos;
