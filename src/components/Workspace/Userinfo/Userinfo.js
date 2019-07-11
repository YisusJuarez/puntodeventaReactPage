import React from "react";
import Tags from "./Tags/Tags";
import "./Userinfo.css"
class Userinfo extends React.Component {
    state = {
        //data: "ok"
    }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <ul className="list-group shadow">
            <li className="list-group-item list-title">Tags</li>
            <Tags></Tags>
          </ul>
        </div>
        <div className="col-md-12 bars-space">
          <ul className="list-group shadow">
            <li className="list-group-item list-title">Cuentas</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Userinfo;
