import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { LoginSelectCompanySiteComponentAction } from 'features/public/store/actions/LoginSelectCompanySiteComponentAction';
import { authAction } from 'core/store/actions/AuthAction';
const LoginSelectCompanySiteComponent = ({ isOpen }) => {
  const dispatch = useDispatch();
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [mostrarEmpresa, setMostrarEmpresa] = useState(true);
  const [empresas, setEmpresas] = useState([]);
  const [sedes, setSedes] = useState([]);
  const empresaControl = useWatch({ control, name: 'empresa' });

  const loading = useSelector(
    (state) => state.SelectCompanySiteComponentReducer.loading
  );
  const usuarioInformation = useSelector(
    (state) => state.SelectCompanySiteComponentReducer.user
  );
  const emailUser = useSelector(
    (state) => state.SelectCompanySiteComponentReducer.emailUser
  );
  const passwordUser = useSelector(
    (state) => state.SelectCompanySiteComponentReducer.passwordUser
  );

  useEffect(() => validarVisibilidad(), [usuarioInformation]);
  useEffect(() => onSelectEmpresa(empresaControl), [empresaControl]);

  function validarVisibilidad() {
    if (
      usuarioInformation?.empresas !== null &&
      usuarioInformation?.empresas !== undefined
    ) {
      setEmpresas(usuarioInformation.empresas);
      if (usuarioInformation.empresas.length > 1) setMostrarEmpresa(true);
      else {
        setMostrarEmpresa(false);
        setSedes(usuarioInformation.empresas[0].sedes);
      }
    }
  }

  const onSelectEmpresa = (e) => {
    if (e !== null && e !== undefined) {
      const currentEmpresa = empresas.filter((c) => {
        return c.id === e.id;
      });
      setSedes(currentEmpresa[0].sedes);
    } else {
      setSedes([]);
      setValue('sede', null, { shouldValidate: true });
    }
  };

  const onHide = () => {
    dispatch(LoginSelectCompanySiteComponentAction.ocultar());
  };

  const onSubmit = (data) => {
    if (data.empresa) usuarioInformation.empresaId = data.empresa.id;
    else usuarioInformation.empresaId = usuarioInformation.empresas[0].id;
    usuarioInformation.sedeId = data.sede.id;

    dispatch(
      LoginSelectCompanySiteComponentAction.seleccionar(
        usuarioInformation,
        emailUser,
        passwordUser
      )
    );
  };

  return (
    <Dialog
      visible={isOpen}
      onHide={onHide}
      style={{ width: '24vw' }}
      className="modal-custom"
      breakpoints={{ '1200px': '45vw', '640px': '80vw' }}
    >
      <form className="form-custom p-0" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-modal p-0">
          <header className="header">
            <div className="title">
              <h3 className="mb-2 font-bold">SELECCIONE</h3>
            </div>
          </header>

          <div className="fields flex flex-col gap-4 mt-4">
            {mostrarEmpresa && (
              <Controller
                control={control}
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Dropdown
                    options={empresas}
                    optionLabel="nombre"
                    filter
                    showClear
                    filterBy="nombre"
                    value={value}
                    className="w-full"
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder="Seleccione una empresa"
                    className={errors.empresa ? 'p-invalid' : ''}
                    inputRef={ref}
                    {...register('empresa', {
                      required: 'La empresa es un campo requerido',
                    })}
                  />
                )}
                name="empresa"
                control={control}
              />
            )}

            <Controller
              control={control}
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
              }) => (
                <Dropdown
                  options={sedes}
                  optionLabel="nombre"
                  filter
                  showClear
                  filterBy="nombre"
                  value={value}
                  placeholder="Seleccione una sede"
                  onChange={onChange}
                  onBlur={onBlur}
                  className={errors.sede ? 'p-invalid w-full' : 'w-full'}
                  inputRef={ref}
                  {...register('sede', {
                    required: 'La sede es un campo requerido',
                  })}
                />
              )}
              name="sede"
              control={control}
            />
          </div>

          {errors.empresa ? (
            <>
              <small className="p-error">{errors.empresa.message}</small>
              <br />
            </>
          ) : null}
          {errors.sede ? (
            <>
              <small className="p-error">{errors.sede.message}</small>
              <br />
            </>
          ) : null}

          <div className="flex gap-2 mt-6 justify-center">
            <Button
              label="Cancelar"
              type="button"
              onClick={() => onHide()}
              className="btn btn-secondary"
            />
            <Button
              label="Continuar"
              type="submit"
              loading={loading ?? false}
              className="btn btn-primary"
            />
          </div>
        </div>
      </form>
    </Dialog>
  );
};

export default LoginSelectCompanySiteComponent;
