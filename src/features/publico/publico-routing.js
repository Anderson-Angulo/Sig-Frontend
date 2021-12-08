import { useRouteMatch, Route, Switch } from 'react-router-dom';
import authReducer from '../../core/store/reducers/auth.reducer';
import recuperarContrasenaReducer from './store/reducers/recuperar-contrasena.reducer';
import selecEmpresaSedeReducer from './store/reducers/selec-empresa-sede.reducer';

import InicioSesionPage from './pages/inicio-sesion/inicio-sesion.page';
import NuevaContrasenaPage from './pages/nueva-contrasena/nueva-contrasena.page';

export const PublicoRouting = (reducerRegistry) => {
  //
  const { path } = useRouteMatch();
  console.log(reducerRegistry);
  reducerRegistry.register({ authReducer });
  reducerRegistry.register({
    recuperarContrasenaReducer,
  });
  reducerRegistry.register({
    selecEmpresaSedeReducer,
  });
  // const location = useLocation();
  // const loggedIn = useSelector(state => state.authReducer.loggedIn);

  return (
    <Switch>
      <Route
        exact
        path={`${path}/inicio-sesion`}
        component={InicioSesionPage}
      />
      <Route
        exact
        path={`${path}/nueva-contrasena`}
        component={NuevaContrasenaPage}
      />
      <Route component={InicioSesionPage} />
    </Switch>
  );
};
