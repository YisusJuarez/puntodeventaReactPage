import React from "react";
import Collapse from "react-bootstrap/Collapse";

class Tags extends React.Component {
  state = {
    open: false
  };
  render() {
    const { open } = this.state;
    return (
      <ul className="list-group">
       
        <li
          className="list-group-item"
          onClick={() => this.setState({ open: !open })}
          aria-expanded={open}
        >
          68434348
        </li>
        <Collapse in={this.state.open}>
          <ul className="list-group">
            <li className="list-group-item">53643514</li>
            <li className="list-group-item">53643514</li>
          </ul>
        </Collapse>
      </ul>
     
    );
  }
}
export default Tags;