import React from "react";
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import LoginPage from "./pages/login/login.page";
import RecuperarContrasenaPage from "./pages/recuperar-contrasena/recuperar-contrasena.page";


export default function PublicoRouting() {
  const { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={`${path}/login`} component={LoginPage} />
        <Route exact path={`${path}/recuperar-contrasena`} component={RecuperarContrasenaPage} />
        <Route component={LoginPage} />
      </Switch>
    </>
  );
}