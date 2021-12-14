import { useRouteMatch, Route, Switch } from 'react-router-dom';
import authReducer from 'core/store/reducers/AuthReducer';
import RecoveryPasswordReducer from './store/reducers/RecoveryPasswordReducer';
import SelectCompanySiteComponentReducer from './store/reducers/SelectCompanySiteComponentReducer';

import Login from './pages/login/LoginPage';
import NuevaContrasenaPage from './pages/new-password/NewPasswordPage';

const PublicRouting = (reducerRegistry) => {
  const { path } = useRouteMatch();

  reducerRegistry.register({ authReducer });
  reducerRegistry.register({
    RecoveryPasswordReducer,
  });
  reducerRegistry.register({
    SelectCompanySiteComponentReducer,
  });

  return (
    <Switch>
      <Route exact path={`${path}/inicio-sesion`} component={Login} />
      <Route
        exact
        path={`${path}/nueva-contrasena`}
        component={NuevaContrasenaPage}
      />
      <Route component={Login} />
    </Switch>
  );
};

export default PublicRouting;
