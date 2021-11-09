import { Button } from 'primereact/button';
import { Fieldset } from 'primereact/fieldset';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import './usuarios.page.scss';
import { Fragment } from 'react';
import CambiarContrasenaPage from './pages/cambiar-contrasena/cambiar-contrasena.page';

const UsuarioPage = () => {
  const roles = [{ rol: 'Rol 1' }, { rol: 'Rol 2' }, { rol: 'Rol 3' }];
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
      <CambiarContrasenaPage />
    </Fragment>
  );
};

export default UsuarioPage;
