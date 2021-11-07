import { Redirect, Route, Switch } from 'react-router-dom';

import InicioSesionPage from './pages/inicio-sesion/inicio-sesion.page';
import NuevaContrasenaPage from './pages/nueva-contrasena/nueva-contrasena.page';

export const PublicoRouting = () => {
  
  return (
    <Switch>
      <Route exact path="/inicio-sesion" component={InicioSesionPage} />
      <Route exact path="/nueva-contrasena" component={NuevaContrasenaPage} />
      <Route component={InicioSesionPage} /> 
    </Switch>
  );
};
