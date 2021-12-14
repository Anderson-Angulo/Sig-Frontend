import { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'primereact/button';

import { BreadcrumpAction } from 'core/store/actions/BreadcrumpAction';
import RolesFiltroComponent from 'features/configuration/components/roles/RolesFilterComponent';
import RolesTableComponent from 'features/configuration/components/roles/RolesTableComponent';
import 'shared/styles/components/tables.scss';

const RolesPrivilegioPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const usuarioInformation = useSelector((state) => state.authReducer.user);
  useEffect(() => {
    dispatch(
      BreadcrumpAction.setTitlePage(
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
