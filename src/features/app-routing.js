import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import PrivateLayout from 'shared/components/privado-layout/private-layout';
import { PublicoRouting } from "./publico/publico-routing";
import RrhhRouting from "./rrhh/rrhh-routing";
import RequireAuth from "../core/routes/required-auth";
import InicioPage from "./dashboard/pages/inicio/inicio.page";

export const AppRouting = () => {
  const loggedIn = false;
  console.log("AppRouting");
  return (
    <>
      <Router>
        <Switch>

          <Route path={`/publico`} component={PublicoRouting} />

          <RequireAuth>
            <PrivateLayout>
              <Route path={`/rrhh`} component={RrhhRouting} />
              <Route component={InicioPage} />
            </PrivateLayout>
          </RequireAuth>






        </Switch>
      </Router>
    </>
  );
};
