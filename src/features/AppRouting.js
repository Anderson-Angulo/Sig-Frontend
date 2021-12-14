import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import PrivateLayout from 'shared/components/private-layout/PrivateLayout';
import ConfiguracionRouting from './configuration/ConfigurationRouting';
import PublicoRouting from './public/PublicRouting';
import RequireAuth from '../core/routes/RequiredAuth';
import configureStore from 'core/store/ConfigStore';
import ReducerRegistry from 'core/store/RegisterReducer';
import authReducer from '../core/store/reducers/AuthReducer';
import roleReducer from 'features/configuration/store/reducers/RolesReducer';
import breadcrumpReducer from '../core/store/reducers/BreadcrumpReducer';
import toastReducer from './../core/store/reducers/ToastReducer';
import toggleSidebarReducer from './configuration/store/reducers/ToggleSidebarReducer';

import RrhhRouting from './rrhh/RrhhRouting';

export const AppRouting = () => {
  var reducerRegistry = new ReducerRegistry({
    authReducer,
    toastReducer,
    breadcrumpReducer,
    roleReducer,
    toggleSidebarReducer,
  });

  var store = configureStore(reducerRegistry);

  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route
              path={`/seguridad`}
              component={() => PublicoRouting(reducerRegistry)}
            />
            <Route
              exact
              path={`/`}
              component={() => PublicoRouting(reducerRegistry)}
            />
            <PrivateLayout>
              <RequireAuth path="/configuracion">
                <Route
                  path={`/configuracion`}
                  component={() => ConfiguracionRouting(reducerRegistry)}
                />
              </RequireAuth>
              <RequireAuth path="/rrhh">
                <Route
                  path={`/rrhh`}
                  component={() => RrhhRouting(reducerRegistry)}
                />
              </RequireAuth>
            </PrivateLayout>
          </Switch>
        </Router>
      </Provider>
    </>
  );
};