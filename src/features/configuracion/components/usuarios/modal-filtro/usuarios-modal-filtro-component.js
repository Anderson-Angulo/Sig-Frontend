import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';

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
      <div className="modal-filtro shadow-md">
        <form className="form-modal px-8 py-4">
          <header className="header mb-4">
            <div className="icon-closed cursor-pointer" onClick={closeModal}>
              <i className="pi pi-times"></i>
            </div>
            <div className="title text-left">
              <h3 className="mb-2 font-bold modal-filtro-title">Filtrar</h3>
            </div>
          </header>
          <div className="body">
            <div className="flex gap-4 pt-3">
              <div className="w-full">
                <span className="p-float-label">
                  <Calendar id="desde" />
                  <label htmlFor="desde">Desde</label>
                </span>
              </div>
              <div className="w-full">
                <span className="p-float-label">
                  <Calendar id="hasta" />
                  <label htmlFor="hasta">Hasta</label>
                </span>
              </div>
            </div>
            <div className="flex pt-7">
              <div className="w-full">
                <span className="p-float-label">
                  <Dropdown
                    options={opciones}
                    optionLabel="opcion"
                    filter
                    showClear
                    filterBy="opcion"
                    className="w-full"
                  />

                  <label htmlFor="dropdown">Por Empresa</label>
                </span>
              </div>
            </div>
            <div className="flex pt-7">
              <div className="w-full">
                <span className="p-float-label">
                  <Dropdown
                    options={sedes}
                    optionLabel="sede"
                    filter
                    showClear
                    filterBy="sede"
                    className="w-full"
                  />

                  <label htmlFor="dropdown">Por Sede</label>
                </span>
              </div>
            </div>
            <div className="flex pt-7">
              <div className="w-full">
                <span className="p-float-label">
                  <Dropdown
                    options={roles}
                    optionLabel="rol"
                    filter
                    showClear
                    filterBy="rol"
                    className="w-full"
                  />

                  <label htmlFor="dropdown">Por Rol</label>
                </span>
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
          <div className="flex justify-center gap-4 mt-2">
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
