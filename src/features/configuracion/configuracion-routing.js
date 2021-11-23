import { Switch, Route, useRouteMatch } from 'react-router-dom';
import SistemaPage from './pages/sistema/sistema.page';
import UsuariosPage from './pages/usuarios/usuarios.page';
import UsuarioPage from './pages/usuarios/usuario/usuario.page';
// import RolPrivilegioPage from './pages/roles-privilegio/rol-privilegio/rol-privilegio.page';
import MiCuentaPage from './pages/mi-cuenta/mi-cuenta-page';
import RolesPrivilegioPage from './pages/roles-privilegio/roles-privilegio.page';

export const ConfiguracionRouting = (reducerRegistry) => {
  const { path } = useRouteMatch();
  //debugger;
  return (
    <>
      <Switch>
        <Route exact path={`${path}/sistema`} component={SistemaPage} />
        <Route path={`${path}/mi-cuenta`} component={MiCuentaPage} />
        <Route path={`${path}/usuarios`} component={UsuariosPage}>
          <Route exact path={`${path}/usuarios`} component={UsuariosPage} />
          <Route path={`${path}/usuarios/:id`} component={UsuarioPage} />
        </Route>

        <Route
          exact
          path={`${path}/rol-privilegios`}
          component={RolesPrivilegioPage}
        ></Route>
        <Route path={`${path}/`} component={MiCuentaPage} />
      </Switch>
    </>
  );
};
