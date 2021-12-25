import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'primereact/button';

import UserChangePasswordPage from './UserChangePasswordPage';
import UsersFilterComponent from 'features/configuration/components/users/UsersFilterComponent';
import UsersTableComponent from 'features/configuration/components/users/UsersTableComponent';
import './UsersPage.scss';
import { UsersAction } from 'features/configuration/store/actions/UsersAction';
import useSetTitlePage from 'shared/hooks/useSetTitlePage';

const UsersPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const usersInformation = useSelector((state) => state.userReducer.users);
  const dataManager = useSelector((state) => state.userReducer.dataManager);

  const { updateTitle } = useSetTitlePage();
  useEffect(() => {
    updateTitle('Gestión de Usuarios');
  }, []);

  useEffect(() => {
    const { pagination } = usersInformation;

    const hasInformation = Object.values(pagination)?.length > 0;
    if (!hasInformation) {
      dispatch(UsersAction.getUsers({ change: false }));
    }
  }, []);

  useEffect(() => {
    const { data } = dataManager;

    const cantList =
      data.roles.length + data.status.length + data.company.length;
    if (cantList === 0) dispatch(UsersAction.getDataMaster());
  }, []);

  return (
    <Fragment>
      <UsersFilterComponent />
      <Button
        icon="pi pi-plus"
        type="button"
        label="Nuevo"
        className="btn btn-primary mt-4"
        onClick={() => {
          history.push('/configuracion/usuarios/nuevo');
        }}
      />
      <UsersTableComponent />
      <UserChangePasswordPage />
    </Fragment>
  );
};

export default UsersPage;
