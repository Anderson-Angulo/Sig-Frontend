import { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { breadcrumpAction } from 'core/store/actions/breadcrump.action';
import 'shared/styles/components/tablas.scss';
import RolesFiltroComponent from 'features/configuracion/components/roles/filtro/roles-filtro-component';
import { Button } from 'primereact/button';
import RolesTableComponent from 'features/configuracion/components/roles/tabla/roles-tabla-component';

const RolesPrivilegioPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const usuarioInformation = useSelector((state) => state.authReducer.user);
  useEffect(() => {
    dispatch(
      breadcrumpAction.setTitlePage(
        'ROLPRI',
        usuarioInformation.menuAdministrador
      )
    );
  }, []);

  return (
    <Fragment>
      <RolesFiltroComponent />
      <Button
        icon="pi pi-plus"
        type="button"
        label="Nuevo"
        className="btn btn-primary mt-4"
        onClick={() => {
          history.push('/configuracion/rol-privilegios/nuevo');
        }}
      />
      <RolesTableComponent />
    </Fragment>
  );
};

export default RolesPrivilegioPage;
