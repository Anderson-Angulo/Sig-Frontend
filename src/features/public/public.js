import { Redirect, Route, Switch } from 'react-router-dom';

import LoginPage from './pages/login/login-page';
import NewPassword from './pages/new-password/new-password-page';

export const Public = () => {
  return (
    <Switch>
      <Route exact path="/inicio-sesion" component={LoginPage} />
      <Route exact path="/nueva-contrasena" component={NewPassword} />
      <Redirect to="/rrhh" />
    </Switch>
  );
};
