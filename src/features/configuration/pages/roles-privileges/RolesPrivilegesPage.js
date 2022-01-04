import { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'primereact/button';

import RolesFiltroComponent from 'features/configuration/components/roles/RolesFilterComponent';
import RolesTableComponent from 'features/configuration/components/roles/RolesTableComponent';

import { RolesAction } from '../../store/actions/RolesAction';
import 'shared/styles/components/tables.scss';
import useSetTitlePage from 'shared/hooks/useSetTitlePage';
import { ConfirmDialog } from 'primereact/confirmdialog';
import useRoleTable from 'features/configuration/hooks/roles/useRoleTable';

const RolesPrivilegioPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const rolesInformation = useSelector((state) => state.roleReducer.roles);
  const { updateTitle } = useSetTitlePage();
  const { isOpen } = useSelector((state) => state.roleReducer.deleteRoleModal);
  const { cancelDelete, confirmDelete } = useRoleTable();

  useEffect(() => {
    updateTitle({
      title: 'Configuración',
      subtitle: 'Roles y Privilegios',
    });
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

      <ConfirmDialog
        visible={isOpen}
        onHide={cancelDelete}
        message="¿Está seguro que desea eliminar el registro?"
        header="Eliminar"
        icon="pi pi-trash"
        accept={confirmDelete}
        reject={cancelDelete}
      />
    </Fragment>
  );
};

export default RolesPrivilegioPage;
