import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'primereact/button';

import { BreadcrumpAction } from 'core/store/actions/BreadcrumpAction';
import UserChangePasswordPage from './UserChangePasswordPage';
import UsersFilterComponent from 'features/configuration/components/users/UsersFilterComponent';
import UsersTableComponent from 'features/configuration/components/users/UsersTableComponent';
import './UsersPage.scss';
import { UsersAction } from 'features/configuration/store/actions/UsersAction';

const UsersPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const usersInformation = useSelector((state) => state.userReducer.users);

  useEffect(() => {
    dispatch(BreadcrumpAction.setTitlePage({ title: 'Gestión de Usuarios' }));
  }, []);

  useEffect(() => {
    const { pagination } = usersInformation;

    const hasInformation = Object.values(pagination)?.length > 0;
    if (!hasInformation) {
      dispatch(UsersAction.getUsers({ change: false }));
    }
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
