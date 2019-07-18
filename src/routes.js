import React from "react";
import { Route, Switch } from "react-router-dom";

//Componentes
import App from "./App";
import Login from "./Login/Login";



const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/Inicio" component={App} />
      <Route exact path="/" component={Login} />
      <Route path="/Movimientos" component={App} />
      <Route path="/Recargas" component={App} />
      <Route path="/Aclaraciones" component={App} />
    </Switch>
  );
};
export default AppRoutes;
