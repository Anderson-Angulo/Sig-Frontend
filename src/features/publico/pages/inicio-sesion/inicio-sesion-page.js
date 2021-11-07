import { Fragment, useState } from 'react';
import PublicoLayout from 'shared/components/publico-layout/publico-layout';
import './inicio-sesion-page.scss';

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import ModalRecuperarContrasenaComponent from 'features/publico/components/modal-recuperar-contrasena-component';

const InicioSesion = () => {
  const [checked, setChecked] = useState(false);

  return (
    <PublicoLayout page="login">
      <Fragment>
        <form className="form-custom">
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
            <p className="link">Olvidé mi contraseña</p>
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
            <Button label="Ingresar" className="btn btn-primary mt-4" />
          </div>
        </form>
        <ModalRecuperarContrasenaComponent />
      </Fragment>
    </PublicoLayout>
  );
};

export default InicioSesion;
