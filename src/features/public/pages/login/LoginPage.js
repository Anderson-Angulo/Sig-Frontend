import { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';

import PublicLayout from 'shared/components/public-layout/PublicLayout';
import RecoveryPasswordPage from 'features/public/pages/recovery-password/RecoveryPasswordPage';

import { authAction } from 'core/store/actions/AuthAction';
import { RecoveryPasswordAction } from 'features/public/store/actions/RecoveryPasswordAction';
import LoginSelectCompanySiteComponent from 'features/public/components/login/LoginSelectCompanySiteComponent';

import './LoginPage.scss';

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [checked, setChecked] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loggedIn = useSelector((state) => state.authReducer.loggedIn);
  const loading = useSelector((state) => state.authReducer.loading);

  const mostrarRecuperarContrasena = useSelector(
    (state) => state.RecoveryPasswordReducer.mostrarRecuperarContrasena
  );
  const mostrarSeleccionEmpresaSede = useSelector(
    (state) =>
      state.SelectCompanySiteComponentReducer.mostrarSeleccionarEmpresaSede
  );

  useEffect(() => {
    dispatch(authAction.validarSesion());
  }, []);

  useEffect(() => {
    if (loggedIn) {
      history.push('/configuracion/mi-cuenta');
    }
  }, [loggedIn]);

  const onSubmit = (data) => {
    dispatch(authAction.login(data.email, data.password));
  };

  function onMostrarContrasena(e) {
    dispatch(RecoveryPasswordAction.mostrar());
  }

  return (
    <PublicLayout page="login">
      <Fragment>
        <form className="form-custom" onSubmit={handleSubmit(onSubmit)}>
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
              <Controller
                control={control}
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <InputText
                    className={errors.email ? 'p-invalid' : ''}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                )}
                name="email"
                rules={{
                  required: 'El correo eléctronico es requerido',
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message:
                      'El correo eléctronico no tiene un formato correcto',
                  },
                }}
              />
              <label htmlFor="email">Correo eléctronico</label>
            </span>

            <span className="p-float-label field p-input-icon-right w-full">
              <Controller
                control={control}
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Password
                    type="password"
                    toggleMask
                    feedback={false}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={errors.password ? 'p-invalid w-full' : 'w-full'}
                  />
                )}
                name="password"
                rules={{
                  required: 'La contraseña es requerida',
                }}
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

            {errors.email ? (
              <>
                <small className="p-error">{errors.email.message}</small>
                <br />
              </>
            ) : null}

            {errors.password ? (
              <>
                <small className="p-error">{errors.password.message}</small>
                <br />
              </>
            ) : null}

            <Button
              type="submit"
              loading={loading}
              label="Ingresar"
              className="btn btn-primary mt-4"
            />
          </div>
        </form>
        <RecoveryPasswordPage isOpen={mostrarRecuperarContrasena} />
        <LoginSelectCompanySiteComponent isOpen={mostrarSeleccionEmpresaSede} />
      </Fragment>
    </PublicLayout>
  );
};

export default LoginPage;