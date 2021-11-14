import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import SistemaPage from './pages/sistema/sistema.page';
import UsuariosPage from './pages/usuarios/usuarios.page';
import UsuarioPage from './pages/usuarios/usuario/usuario.page';
import RolesPrivilegioPage from './pages/roles-privilegio/roles-privilegio.page';

export const ConfiguracionRouting = (reducerRegistry) => {
  const { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={`${path}/sistema`} component={SistemaPage} />

        <Route path={`${path}/usuarios`} component={UsuariosPage}>
          <Route exact path={`${path}/usuarios`} component={UsuariosPage} />
          <Route path={`${path}/usuarios/:id`} component={UsuarioPage} />
        </Route>

        <Route
          exact
          path={`${path}/rol-privilegios`}
          component={RolesPrivilegioPage}
        ></Route>
        <Route exact path={`${path}/`} component={SistemaPage} />
      </Switch>
    </>
  );
};
