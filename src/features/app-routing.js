import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import { Provider } from "react-redux";

import PrivadoLayout from "shared/components/privado-layout/privado-layout";
import { ConfiguracionRouting } from "./configuracion/configuracion-routing";
import { PublicoRouting } from "./publico/publico-routing";
import RequireAuth from "../core/routes/required-auth";
import configureStore from "core/store/config.store";
import ReducerRegistry from "core/store/register.reducer";
import authReducer from "../core/store/reducers/auth.reducer";
import breadcrumpReducer from "../core/store/reducers/breadcrump.reducer";
import toastReducer from "./../core/store/reducers/toast.reducer";
import RrhhRouting from "./rrhh/rrhh-routing";



export const AppRouting = () => {
  var reducerRegistry = new ReducerRegistry({
    authReducer: authReducer,
    toastReducer: toastReducer,
    breadcrumpReducer: breadcrumpReducer
  });

  var store = configureStore(reducerRegistry);

  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path={`/seguridad`} component={p => PublicoRouting(reducerRegistry)} />
            <Route exact path={`/`} component={p => PublicoRouting(reducerRegistry)} />
            <PrivadoLayout>
              <RequireAuth path="/configuracion"><Route path={`/configuracion`} component={p => ConfiguracionRouting(reducerRegistry)} /></RequireAuth>
              <RequireAuth path="/rrhh"><Route path={`/rrhh`} component={p => RrhhRouting(reducerRegistry)} /></RequireAuth>
            </PrivadoLayout>

          </Switch>
        </Router>
      </Provider>

    </>
  );

};

