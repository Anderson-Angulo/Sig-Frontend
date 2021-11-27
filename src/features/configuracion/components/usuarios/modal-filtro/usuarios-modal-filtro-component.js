import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';

import './usuarios-modal-filtro-component.scss';
import { Button } from 'primereact/button';

const UsuariosModalFiltro = ({ isOpen = false, closeModal }) => {
  const opciones = [
    { opcion: 'Empresa' },
    { opcion: 'Empresa 1' },
    { opcion: 'Empresa 2' },
  ];
  const sedes = [{ sede: 'Sede 1' }, { sede: 'Sede 2' }, { sede: 'Sede 3' }];
  const roles = [{ rol: 'Rol 1' }, { rol: 'Rol 2' }, { rol: 'Rol 3' }];

  const styleLabel = {
    color: '#004680',
    fontWeight: 600,
    marginBottom: '5px',
  };

  if (isOpen) {
    return (
      <div className="usuarios-modal-filtro shadow-md">
        <form className="form-modal p-8">
          <header className="header mb-4">
            <div className="title text-left">
              <h3 className="mb-2 font-bold">Filtrar</h3>
            </div>
          </header>
          <div className="body">
            <div className="flex gap-4">
              <div className="w-full">
                <h3 style={styleLabel}>Desde</h3>
                <Calendar placeholder="-- /-- /--" className="w-full" />
              </div>
              <div className="w-full">
                <h3 style={styleLabel}>Hasta</h3>
                <Calendar placeholder="-- /-- /--" className="w-full" />
              </div>
            </div>
            <div className="flex mt-3">
              <div className="w-full">
                <h3 style={styleLabel}>Por Empresa</h3>
                <Dropdown
                  options={opciones}
                  optionLabel="opcion"
                  filter
                  showClear
                  filterBy="opcion"
                  className="w-full"
                  placeholder="Seleccionar"
                />
              </div>
            </div>
            <div className="flex mt-3">
              <div className="w-full">
                <h3 style={styleLabel}>Por Sede</h3>
                <Dropdown
                  options={sedes}
                  optionLabel="sede"
                  filter
                  showClear
                  filterBy="sede"
                  className="w-full"
                  placeholder="Seleccione una sede"
                />
              </div>
            </div>
            <div className="flex mt-3">
              <div className="w-full">
                <h3 style={styleLabel}>Por Rol</h3>
                <Dropdown
                  options={roles}
                  optionLabel="rol"
                  filter
                  showClear
                  filterBy="rol"
                  className="w-full"
                  placeholder="Seleccione Rol"
                />
              </div>
            </div>
            <div className="flex mt-3">
              <div className="w-full">
                <h3 style={styleLabel}>Por Estado</h3>
                <div className="flex gap-3">
                  <div className="flex gap-3">
                    <Checkbox value="Activo"></Checkbox>
                    <p>Activo</p>
                  </div>
                  <div className="flex gap-3">
                    <Checkbox value="Inactivo"></Checkbox>
                    <p>Inactivo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-3">
            <Button
              type="button"
              label="Limpiar Filtro"
              className="btn btn-secondary mt-4"
              onClick={closeModal}
            />
            <Button
              type="button"
              label="Buscar"
              className="btn btn-primary mt-4"
            />
          </div>
        </form>
      </div>
    );
  }

  return null;
};

export default UsuariosModalFiltro;
