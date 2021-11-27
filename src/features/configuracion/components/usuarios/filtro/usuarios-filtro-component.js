import { Fragment, useState } from 'react';
import { Button } from 'primereact/button';
import { Fieldset } from 'primereact/fieldset';
import { InputText } from 'primereact/inputtext';
import UsuariosModalFiltro from '../modal-filtro/usuarios-modal-filtro-component';
import './usuarios-filtro-component.scss';

const UsuariosFiltroComponent = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  return (
    <Fragment>
      <Fieldset legend="FILTRO POR" toggleable>
        <div className="filter-usuarios">
          <div className="w-full">
            <span className="p-input-icon-left w-full">
              <i className="pi pi-search" />
              <InputText icon="pi pi-check" placeholder="Search" />
            </span>
          </div>
          <div className="filter-usuarios-action">
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
