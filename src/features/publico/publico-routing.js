import { Redirect, Route, Switch } from 'react-router-dom';
import authReducer from "./store/reducers/auth.reducer";
import recuperarContrasenaReducer from "./store/reducers/recuperar-contrasena.reducer";

import InicioSesionPage from './pages/inicio-sesion/inicio-sesion.page';
import NuevaContrasenaPage from './pages/nueva-contrasena/nueva-contrasena.page';


export const PublicoRouting = (reducerRegistry) => {
  
  reducerRegistry.register({ authReducer: authReducer });
  reducerRegistry.register({ recuperarContrasenaReducer: recuperarContrasenaReducer });

  return (
    <Switch>
      <Route exact path="/inicio-sesion" component={InicioSesionPage} />
      <Route exact path="/nueva-contrasena" component={NuevaContrasenaPage} />
      <Route component={InicioSesionPage} />
    </Switch>
  );
};
