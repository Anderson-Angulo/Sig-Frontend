<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import PrivateLayout from 'shared/components/privado-layout/private-layout';
import { PublicoRouting } from "./publico/publico-routing";
import RrhhRouting from "./rrhh/rrhh-routing";
import RequireAuth from "../core/routes/required-auth";
import InicioPage from "./dashboard/pages/inicio/inicio.page";
import { Provider } from "react-redux";
import publicoStore from './publico/store/publico.store';
=======
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import PrivadoLayout from 'shared/components/privado-layout/privado-layout';
import { PublicoRouting } from './publico/publico-routing';
import RrhhRouting from './rrhh/rrhh-routing';
import RequireAuth from '../core/routes/required-auth';
import InicioPage from './dashboard/pages/inicio/inicio.page';

>>>>>>> 7f6a98470711f35578b3aaabeefff24122f69574
export const AppRouting = () => {
  const loggedIn = false;
  console.log('AppRouting');
  return (
    <>
<<<<<<< HEAD
      <Provider store={publicoStore}>
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
      </Provider>

=======
      <Router>
        <Switch>
          <Route path={`/publico`} component={PublicoRouting} />

          <RequireAuth>
            <PrivadoLayout>
              <Route path={`/rrhh`} component={RrhhRouting} />
              <Route component={InicioPage} />
            </PrivadoLayout>
          </RequireAuth>
        </Switch>
      </Router>
>>>>>>> 7f6a98470711f35578b3aaabeefff24122f69574
    </>
  );
};
