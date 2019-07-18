import React from "react";
import "./Login.css";
import Nav from "../components/Navbar/Navbar";
import { NavLink } from "react-router-dom";
class Login extends React.Component {
  state={
    passok:"user",
    pass:"",
    user:""
  }
  pass(e) {
    this.setState({ pass: e.target.value });
  }
  user(e){
    this.setState({user: e.target.value})
  }
 
  render() {
    return (
      <div>
        <Nav></Nav>
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
            <div className="col-md-8 col-lg-6">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto">
                      <h3 className="login-heading mb-4">Bienvenido!</h3>
                      <form>
                        <div className="form-label-group ">
                          <input
                            type="email"
                            id="inputEmail"
                            className="form-control space-group"
                            placeholder="Email address"
                            required
                            onChange={(e) => this.user(e)}
                            autoFocus
                          />
                          <label htmlFor="inputEmail" className="">Correo Electrónico {this.state.user}</label>
                          <div className="form-label-group">
                            <input
                              type="password"
                              id="inputPassword"
                              className="form-control"
                              placeholder="Password"
                              onChange={(e) => this.pass(e)}
                              required
                            />
                            <label htmlFor="inputPassword">Contraseña {this.state.pass}</label>
                          </div> 
                          <NavLink className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2 botoninicio-verde" exact to="/Inicio">
                          iniciar
                          </NavLink>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
