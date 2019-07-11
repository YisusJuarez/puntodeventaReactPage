import React from "react";
import "./Navbar.css";
import logo from "./SiVAwhite.png";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar shadow">
        <img className="logo" alt="img" src={logo}/>
      </div>
    );
  }
}
export default Navbar;
