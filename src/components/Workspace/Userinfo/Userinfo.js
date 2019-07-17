import React from "react";
import Cuentas from "./Cuentas/Cuentas";
import Saludo from "./Saludo/Saludo";
import "./Userinfo.css"
class Userinfo extends React.Component {
    state = {
        //data: "ok"
    }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <Saludo></Saludo>
          <ul className="list-group shadow space">
            <li className="list-group-item list-title">Cuentas</li>
            <Cuentas  tag="1234567" noTags="2"></Cuentas>
            <Cuentas  tag="7894561" noTags="2"></Cuentas>
          </ul>
        </div>
      </div>
    );
  }
}
export default Userinfo;
