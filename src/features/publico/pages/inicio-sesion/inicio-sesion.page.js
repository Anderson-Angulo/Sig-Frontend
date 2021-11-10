import { Fragment, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useHistory, useLocation, Redirect } from 'react-router-dom';

import PublicoLayout from 'shared/components/publico-layout/publico-layout';
import './inicio-sesion.page.scss';
import RecuperarContrasenaPage from 'features/publico/pages/recuperar-contrasena/recuperar-contrasena.page';

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { authAction } from 'features/publico/store/actions/auth.action';
import { recuperarContrasenaAction } from 'features/publico/store/actions/recupera-contrasena.action';
import SeleccionarPage from '../seleccionar/seleccionar.page';

const InicioSesionPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const [checked, setChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useSelector((state) => {
    if (state.authReducer.loggedIn) history.push('/inicio');
  });

  dispatch(authAction.validarSesion());
  
  const loading = useSelector(state => state.authReducer.loading);
  const mostrarRecuperarContrasena = useSelector(state => state.recuperarContrasenaReducer.mostrarRecuperarContrasena);




 

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    const { from } = location.state || { from: { pathname: "/" } };
    dispatch(authAction.login("username", "password", from));
  }

  function onMostrarContrasena(e) {
    dispatch(recuperarContrasenaAction.mostrar());
  }

  return (
    <PublicoLayout page="login">
      <Fragment>
        <form className="form-custom" onSubmit={onSubmit}>
          <header className="header">
            <img
              src="/images/logos/main-dark-logo.png"
              className="w-full logo"
              alt="Calidar"
              title="Calidar"
            />
          </header>
          <div className="fields">
            <span className="p-float-label p-input-icon-right field w-full">
              <i className="pi pi-user" />
              <InputText id="email" name="email" />
              <label htmlFor="email">Usuario</label>
            </span>

            <span className="p-float-label field">
              <Password
                id="password"
                name="password"
                className="w-full"
                toggleMask
              />
              <label htmlFor="password">Contraseña</label>
            </span>
          </div>

          <div className="actions">
            <a className="link" onClick={() => onMostrarContrasena(this)}>
              Olvidé mi contraseña
            </a>
            <div className="p-field-checkbox field field-checkbox mt-2 w-full">
              <Checkbox
                inputId="remember"
                checked={checked}
                onChange={(e) => setChecked(e.checked)}
              />
              <label htmlFor="remember" className="label-checkbox">
                {' '}
                Recuérdame
              </label>
            </div>
            <Button
              type="submit"
              loading={loading}
              label="Ingresar"
              className="btn btn-primary mt-4"
            />
          </div>
        </form>
        <RecuperarContrasenaPage isOpen={mostrarRecuperarContrasena} />
        <SeleccionarPage isOpen={false} />
      </Fragment>
    </PublicoLayout>
  );
};

export default InicioSesionPage;
