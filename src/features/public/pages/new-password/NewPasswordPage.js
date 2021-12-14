import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import PublicLayout from 'shared/components/public-layout/PublicLayout';
import './NewPasswordPage.scss';

const NewPasswordPage = () => {
  return (
    <PublicLayout page="new-password">
      <form className="form-custom">
        <header className="header">
          <div className="title">
            <h3 className="mb-2 font-bold">Nueva Contraseña</h3>
          </div>
          <div className="description text-left">
            <p className="text-sm mb-2">
              Elige una contraseña segura y no la utilices en otras cuentas.
            </p>
            <p className="text-sm">
              Si cambias la contraseña se cerrará la sesión en todos tus
              dispositivos y tendrás que iniciar sesión nuevamente.
            </p>
          </div>
        </header>
        <div className="fields">
          <span className="p-float-label field w-full">
            <Password
              id="password"
              name="password"
              className="w-full"
              toggleMask
            />
            <label htmlFor="password">Contraseña</label>
          </span>

          <span className="p-float-label field w-full">
            <Password
              id="password2"
              name="password"
              className="w-full"
              toggleMask
            />
            <label htmlFor="password2">Confirmar contraseña</label>
          </span>
        </div>
        <div className="actions">
          <Button label="Cambiar contraseña" className="btn btn-primary" />
        </div>
      </form>
    </PublicLayout>
  );
};

export default NewPasswordPage;
