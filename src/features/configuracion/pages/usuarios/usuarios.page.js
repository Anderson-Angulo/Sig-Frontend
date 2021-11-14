import { Fragment, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Fieldset } from 'primereact/fieldset';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import './usuarios.page.scss';
import CambiarContrasenaPage from './cambiar-contrasena/cambiar-contrasena.page';
import { useDispatch, useSelector } from 'react-redux';
import { breadcrumpAction } from 'core/store/actions/breadcrump.action';

const UsuariosPage = () => {
  const roles = [{ rol: 'Rol 1' }, { rol: 'Rol 2' }, { rol: 'Rol 3' }];

  const dispatch = useDispatch();
  const usuarioInformation = useSelector(state => state.authReducer.user);
  useEffect(() => { dispatch(breadcrumpAction.setTitlePage('GESUSU', usuarioInformation.menuAdministrador)); }, []);


  return (
    <Fragment>
      <Fieldset legend="Filtro por" toggleable>
        <div className="filter">
          <div className="fields py-4 flex justify-between gap-4">
            <span className="p-float-label w-full">
              <InputText id="username" />
              <label htmlFor="username">Nombres</label>
            </span>
            <span className="p-float-label w-full">
              <InputText id="lastname" />
              <label htmlFor="lastname">Apellidos</label>
            </span>
            <Dropdown
              options={roles}
              optionLabel="rol"
              filter
              showClear
              filterBy="rol"
              className="w-full"
              placeholder="Seleccione un rol"
            />
          </div>
        </div>
        <div className="actions flex gap-3 items-center justify-end">
          <Button type="button" label="Buscar" className="btn btn-primary" />
          <Button type="button" label="Limpiar" className="btn btn-secondary" />
        </div>
      </Fieldset>
      <div className="mt-5 flex items-center justify-end">
        <Button type="button" label="Nuevo" className="btn btn-dark" />
      </div>

      <CambiarContrasenaPage />
    </Fragment>
  );
};

export default UsuariosPage;
