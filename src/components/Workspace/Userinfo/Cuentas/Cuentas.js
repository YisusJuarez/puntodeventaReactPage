import React from "react";
import "./Cuentas.css";
import Collapse from "react-bootstrap/Collapse";
import Badge from "react-bootstrap/Badge";
import { connect } from "react-redux";

 class Tags extends React.Component {
  state = {
    open: false
  };

  render() {
    const open = this.state.open;
    return (
      <ul className="list-group">
        <li
          className="list-group-item list-interactive "
          onClick={() => {
            this.setState({ open: !open });
            this.props.agregarseleccion(this.props.tag);
          }}
          aria-expanded={open}
        >
          {this.props.tag}
          <Badge className="badge" variant="secondary">
            {this.props.noTags + " Tags"}
          </Badge>
          <Badge className="badge" variant="primary">
            {this.props.type}
          </Badge>
        
        </li>
        <Collapse in={this.state.open}>
          <ul className="list-group">
            {this.props.tags.map(tags => (
              <li className="list-group-item list-interactive">
                <i className="material-icons icon-medida">
                  subdirectory_arrow_right
                </i>
                {tags}
              </li>
            ))}
          </ul>
        </Collapse>
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  seleccionado: state.seleccionado
});
const mapDispatchToProps = dispatch => ({
  agregarseleccion(select) {
    dispatch({
      type: "Agregando_Seleccion",
      select
    });
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tags);
