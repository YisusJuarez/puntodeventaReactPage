import React from "react";
import Cuentas from "./Cuentas/Cuentas";
import Saludo from "./Saludo/Saludo";
import "./Userinfo.css";
class Userinfo extends React.Component {
  state = {
    tag: ["123456", "893624", "876930"],
    tags:["1234","9875"]
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <Saludo />
          <ul className="list-group shadow space">
            <li className="list-group-item list-title">Cuentas</li>
            {this.state.tag.map((tag, index) => (
              <Cuentas tag={tag} noTags="2" tags={this.state.tags} key={index} type="Colectiva"/>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default Userinfo;
