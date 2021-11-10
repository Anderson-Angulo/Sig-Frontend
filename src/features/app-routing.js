import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import { PublicoRouting } from "./publico/publico-routing";
import RequireAuth from "../core/routes/required-auth";
import InicioPage from "./dashboard/pages/inicio/inicio.page";
import { Provider, useStore } from "react-redux";
import PrivadoLayout from "shared/components/privado-layout/privado-layout";
import configureStore from "core/store/config.store";
import ReducerRegistry from "core/store/register.reducer";
import authReducer from "./publico/store/reducers/auth.reducer";
import recuperarContrasenaReducer from "./publico/store/reducers/recuperar-contrasena.reducer";
import { ConfiguracionRouting } from "./configuracion/configuracion-routing";
import RrhhRouting from "./rrhh/rrhh-routing";



export const AppRouting = () => {
  var reducerRegistry = new ReducerRegistry({ authReducer: authReducer });
  var store = configureStore(reducerRegistry);

  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>

            <Route path={`/publico`} component={p => PublicoRouting(reducerRegistry)} />

            <RequireAuth >
              <PrivadoLayout>
                <Route path={`/configuracion`} component={p => ConfiguracionRouting(reducerRegistry)} />
                <Route path={`/rrhh`} component={p => RrhhRouting(reducerRegistry)} />
                <Route exact path={`/`} component={InicioPage} />
              </PrivadoLayout>
            </RequireAuth>

          </Switch>
        </Router>
      </Provider>

    </>
  );
};
