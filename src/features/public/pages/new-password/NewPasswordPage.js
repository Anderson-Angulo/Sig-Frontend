import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from 'react-redux';
import { RecoveryPasswordAction } from 'features/public/store/actions/RecoveryPasswordAction';
import PublicLayout from 'shared/components/public-layout/PublicLayout';
import './NewPasswordPage.scss';
import { useForm, Controller } from 'react-hook-form';
import { useParams } from 'react-router';
import { Password } from 'primereact/password';
import SuccessRecoveryPasswordPage from 'features/public/components/recovery-password/SuccessRecoveryPasswordPage';

const NewPasswordPage = () => {
  const [dataForm, setDataForm] = useState(null);

  const dispatch = useDispatch();
  const mostrarFeedback = useSelector(
    (state) => state.FeedBackReducer.mostrarFeedback
  );
  const {
    control,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const { token } = useParams();

  const submit = (data) => {
    console.log('Enviando');
    dispatch(RecoveryPasswordAction.recuperarContrasena(token, data.password));
  };
  useEffect(() => {
    if (dataForm?.password !== dataForm?.confirmPassword) {
      return setError('match', {
        type: 'MatchConfirmPassword',
        message: 'No coincide con la nueva contraseña',
      });
    }
    clearErrors('match');
  }, [dataForm]);

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <PublicLayout page="new-password">
      <form
        className="form-custom"
        onChange={handleChange}
        onSubmit={handleSubmit(submit)}
      >
        <header className="header">
          <div className="title">
            <h3 className="mb-2 font-bold">Recuperar Contraseña</h3>
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
            <Controller
              control={control}
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
              }) => (
                <Password
                  type="password"
                  toggleMask
                  name="password"
                  feedback={false}
                  onBlur={onBlur}
                  onChange={onChange}
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
          {errors.password ? (
            <>
              <small className="p-error">{errors.password.message}</small>
              <br />
            </>
          ) : null}

          <span className="p-float-label field w-full">
            <Controller
              control={control}
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
              }) => (
                <Password
                  type="password"
                  toggleMask
                  name="confirmPassword"
                  feedback={false}
                  onBlur={onBlur}
                  onChange={onChange}
                  className={
                    errors.confirmPassword ? 'p-invalid w-full' : 'w-full'
                  }
                />
              )}
              name="confirmPassword"
              rules={{
                required: 'La contraseña es requerida',
              }}
            />
            <label htmlFor="confirmPassword">Confirmar contraseña</label>
          </span>
          {errors.confirmPassword ? (
            <>
              <small className="p-error">
                {errors.confirmPassword.message}
              </small>
              <br />
            </>
          ) : (
            <>
              <small className="p-error">{errors?.match?.message}</small>
              <br />
            </>
          )}
        </div>
        <div className="text-center mt-2">
          <Button label="Cambiar contraseña" className="btn btn-primary" />
        </div>
      </form>
      <SuccessRecoveryPasswordPage isOpen={mostrarFeedback} />
    </PublicLayout>
  );
};

export default NewPasswordPage;
