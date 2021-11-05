import React from "react";
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import RequireAuth from "../core/routes/required-auth";
import DefaultComponent from "../shared/components/default-layout/default.component";
import LoginPage from "./publico/pages/login/login.page";
import PublicoRouting from "./publico/publico-routing";
import PersonaPage from "./rrhh/pages/personas/persona/persona.page";
import RrhhRouting from "./rrhh/rrhh-routing";

export default function AppRouting() {
  //const { path } = useRouteMatch();
  return (
    <>
      <Router>
        <Switch>

          <Route path={`/publico`} component={PublicoRouting} />
          <DefaultComponent>
            <RequireAuth>
              <Route path={`/rrhh`} component={RrhhRouting} />
            </RequireAuth>
          </DefaultComponent>


        </Switch>
      </Router>
      {/* </Route> */}
    </>

  );
}
