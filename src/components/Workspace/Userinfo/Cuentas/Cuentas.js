import React from "react";
import "./Cuentas.css";
import Collapse from "react-bootstrap/Collapse";
import Badge from "react-bootstrap/Badge";

class Tags extends React.Component {
  state = {
    open: false
  };
  render() {
    // const { open } = this.state;
    const open = this.state.open;
    return (
      <ul className="list-group">
        <li
          className="list-group-item list-interactive "
          onClick={() => this.setState({ open: !open })}
          aria-expanded={open}
        >
          {this.props.tag}
          <Badge className="badge" variant="secondary">
            {this.props.noTags +" Tags"}
          </Badge>
        </li>
        <Collapse in={this.state.open}>
          <ul className="list-group">
            <li className="list-group-item list-interactive">
              <i className="material-icons icon-medida">subdirectory_arrow_right</i>53643514
            </li>
            <li className="list-group-item list-interactive">
              <i className="material-icons icon-medida">subdirectory_arrow_right</i>53643514
            </li>
          </ul>
        </Collapse>
      </ul>
    );
  }
}
export default Tags;
