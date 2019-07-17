import React from "react";
import Canvas from "./Canvas/Canvas";
import Userinfo from "./Userinfo/Userinfo";

import "./Workspace.css";
class Workspace extends React.Component {
    state = {
        
      };
  render() {
    return (
      <div className="container-fluid container-space">
        <div className="row">
          <div className="col-xl-12">
            <div className="row">
              <div className="col-xl-2">
                <Userinfo />
              </div>
              <div className="col-xl-10">
                <Canvas />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Workspace;
