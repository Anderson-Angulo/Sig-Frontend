import { Switch, Route, useRouteMatch } from 'react-router-dom';
import SistemPage from './pages/sistem/SistemPage';
import UsersPage from './pages/users/UsersPage';
import UserPage from './pages/users/UserPage';
import MyAccountPage from './pages/my-account/MyAccountPage';
import RolPrivilegePage from './pages/roles-privileges/RolPrivilegePage';
import RolesPrivilegesPage from './pages/roles-privileges/RolesPrivilegesPage';

const ConfigurationRouting = (reducerRegistry) => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/sistema`} component={SistemPage} />
      <Route path={`${path}/mi-cuenta`} component={MyAccountPage} />
      <Route path={`${path}/usuarios`} component={UsersPage}>
        <Route exact path={`${path}/usuarios`} component={UsersPage} />
        <Route exact path={`${path}/usuarios/nuevo`} component={UserPage} />
        <Route path={`${path}/usuarios/editar/:id`} component={UserPage} />
      </Route>
      <Route path={`${path}/rol-privilegios`} component={RolesPrivilegesPage}>
        <Route
          exact
          path={`${path}/rol-privilegios`}
          component={RolesPrivilegesPage}
        />
        <Route
          exact
          path={`${path}/rol-privilegios/nuevo`}
          component={() => <RolPrivilegePage title="NUEVO ROL" />}
        />
        <Route
          exact
          path={`${path}/rol-privilegios/editar/:id`}
          component={() => <RolPrivilegePage title="EDITAR ROL" />}
        />
      </Route>
      <Route path={`${path}/`} component={MyAccountPage} />
    </Switch>
  );
};

export default ConfigurationRouting;
