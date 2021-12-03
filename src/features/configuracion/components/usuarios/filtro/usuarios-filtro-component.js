import { Fragment, useState } from 'react';
import { Button } from 'primereact/button';
import { Fieldset } from 'primereact/fieldset';
import { InputText } from 'primereact/inputtext';
import UsuariosModalFiltro from '../modal-filtro/usuarios-modal-filtro-component';

const UsuariosFiltroComponent = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  return (
    <Fragment>
      <Fieldset legend="FILTRO POR" toggleable>
        <div className="filter-users">
          <div className="w-full">
            <span className="p-input-icon-left w-full">
              <i className="pi pi-search" />
              <InputText
                icon="pi pi-check"
                placeholder="Buscar por usuario o nombres"
              />
            </span>
          </div>
          <div className="filter-users-action">
            <div className="flex gap-3 w-full">
              <Button
                icon="pi pi-search"
                type="button"
                label="Filtrar"
                className="btn btn-primary w-full"
              />
              <Button
                icon="pi pi-download"
                type="button"
                label="Descargar"
                className="btn btn-primary w-full"
              />
            </div>
            <div className="flex mt-3">
              <Button
                type="button"
                label="Búsqueda avanzada"
                className="btn btn-primary w-full"
                onClick={() => setShowFilterModal(true)}
              />
            </div>
          </div>
        </div>
      </Fieldset>
      <UsuariosModalFiltro
        isOpen={showFilterModal}
        closeModal={() => setShowFilterModal(false)}
      />
    </Fragment>
  );
};

export default UsuariosFiltroComponent;
