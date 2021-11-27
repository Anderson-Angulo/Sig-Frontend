import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom';

import { breadcrumpAction } from 'core/store/actions/breadcrump.action';
import CambiarContrasenaPage from './cambiar-contrasena/cambiar-contrasena.page';
import UsuariosFiltroComponent from 'features/configuracion/components/usuarios/filtro/usuarios-filtro-component';
import './usuarios.page.scss';
import UsuariosTablaComponent from 'features/configuracion/components/usuarios/tabla/usuarios-tabla-component';

const UsuariosPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const usuarioInformation = useSelector((state) => state.authReducer.user);
  useEffect(() => {
    dispatch(
      breadcrumpAction.setTitlePage(
        'GESUSU',
        usuarioInformation.menuAdministrador
      )
    );
  }, []);

  return (
    <Fragment>
      <UsuariosFiltroComponent />
      <Button
        icon="pi pi-plus"
        type="button"
        label="Nuevo"
        className="btn btn-primary mt-4"
        onClick={() => {
          history.push('/configuracion/usuarios/nuevo');
        }}
      />
      <UsuariosTablaComponent />
      <CambiarContrasenaPage />
    </Fragment>
  );
};

export default UsuariosPage;
