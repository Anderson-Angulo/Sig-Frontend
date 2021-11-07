import { Redirect, Route, Switch } from 'react-router-dom';

import InicioSesion from './pages/inicio-sesion/inicio-sesion-page';
import NuevaContrasena from './pages/nueva-contrasena/nueva-contrasena-page';

export const Publico = () => {
  return (
    <Switch>
      <Route exact path="/inicio-sesion" component={InicioSesion} />
      <Route exact path="/nueva-contrasena" component={NuevaContrasena} />
      <Redirect to="/rrhh" />
    </Switch>
  );
};
