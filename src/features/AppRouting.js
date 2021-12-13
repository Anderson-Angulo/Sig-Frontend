import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import PrivadoLayout from 'shared/components/private-layout/PrivateLayout';

import RequireAuth from 'core/routes/RequiredAuth';
import configureStore from 'core/store/ConfigStore';
import ReducerRegistry from 'core/store/RegisterReducer';
import authReducer from 'core/store/reducers/AuthReducer';
import breadcrumpReducer from 'core/store/reducers/BreadcrumpReducer';
import toastReducer from 'core/store/reducers/ToastReducer';
import toggleSidebarReducer from 'features/configuration/store/reducers/ToggleSidebarReducer';
import RrhhRouting from 'features/rrhh/RrhhRouting';
import ConfigurationRouting from 'features/configuration/ConfigurationRouting';
import PublicRouting from 'features/public/PublicRouting';

export const AppRouting = () => {
  const reducerRegistry = new ReducerRegistry({
    authReducer,
    toastReducer,
    breadcrumpReducer,
    toggleSidebarReducer,
  });

  const store = configureStore(reducerRegistry);

  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route
              path={`/seguridad`}
              component={() => PublicRouting(reducerRegistry)}
            />
            <Route
              exact
              path={`/`}
              component={() => PublicRouting(reducerRegistry)}
            />
            <PrivadoLayout>
              <RequireAuth path="/configuracion">
                <Route
                  path={`/configuracion`}
                  component={() => ConfigurationRouting(reducerRegistry)}
                />
              </RequireAuth>
              <RequireAuth path="/rrhh">
                <Route
                  path={`/rrhh`}
                  component={() => RrhhRouting(reducerRegistry)}
                />
              </RequireAuth>
            </PrivadoLayout>
          </Switch>
        </Router>
      </Provider>
    </>
  );
};
