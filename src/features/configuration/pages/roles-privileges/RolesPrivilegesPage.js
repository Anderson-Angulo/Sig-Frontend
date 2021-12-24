import { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'primereact/button';

import RolesFiltroComponent from 'features/configuration/components/roles/RolesFilterComponent';
import RolesTableComponent from 'features/configuration/components/roles/RolesTableComponent';
import { BreadcrumpAction } from 'core/store/actions/BreadcrumpAction';
import { RolesAction } from '../../store/actions/RolesAction';
import 'shared/styles/components/tables.scss';

const RolesPrivilegioPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const rolesInformation = useSelector((state) => state.roleReducer.roles);

  useEffect(() => {
    dispatch(
      BreadcrumpAction.setTitlePage({
        title: 'Roles y Privilegios',
      })
    );
  }, []);

  useEffect(() => {
    const { pagination } = rolesInformation;

    const hasInformation = Object.values(pagination)?.length > 0;
    if (!hasInformation) {
      dispatch(RolesAction.getRoles({ change: false }));
    }
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
