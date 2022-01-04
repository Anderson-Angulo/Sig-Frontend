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
import userReducer from 'features/configuration/store/reducers/UserReducer';
import breadcrumpReducer from '../core/store/reducers/BreadcrumpReducer';
import toastReducer from './../core/store/reducers/ToastReducer';
import FeedBackReducer from './../core/store/reducers/FeedBackReducer';
import toggleSidebarReducer from './configuration/store/reducers/ToggleSidebarReducer';

import RrhhRouting from './rrhh/RrhhRouting';
import PageHomePage from 'shared/pages/home/PageHomePage';
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min';

export const AppRouting = () => {
  var reducerRegistry = new ReducerRegistry({
    authReducer,
    toastReducer,
    breadcrumpReducer,
    toggleSidebarReducer,
    FeedBackReducer,
    roleReducer,
    userReducer,
  });

  var store = configureStore(reducerRegistry);

  return (
    <>
      <Provider store={store}>


        <Router>

          <HashRouter>

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
                <RequireAuth path="/inicio">
                  <Route path={`/inicio`} component={PageHomePage} />
                </RequireAuth>
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

          </HashRouter>

        </Router>


      </Provider>
    </>
  );
};
