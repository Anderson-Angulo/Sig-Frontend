import { useState } from 'react';
import PublicLayout from 'shared/components/public-layout/public-layout';

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';

import './login.page.scss';

const LoginPage = () => {
  const [checked, setChecked] = useState(false);

  return (
    <PublicLayout page="login">
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
          <span className="p-float-label p-input-icon-right field">
            <i className="pi pi-user" />
            <InputText id="email" name="email" />
            <label htmlFor="email">Usuario</label>
          </span>

          <span className="p-float-label field">
            <Password id="password" name="password" toggleMask />
            <label htmlFor="password">Contraseña</label>
          </span>
        </div>

        <div className="actions">
          <p className="link">Olvidé mi contraseña</p>
          <div className="p-field-checkbox field field-checkbox">
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
            label="Ingresar"
            className="btn btn-primary" /* loading={loading2} onClick={onLoadingClick2} */
          />
        </div>
      </form>
    </PublicLayout>
  );
};

export default LoginPage;
