import { Fragment, useState } from 'react';
import { Fieldset } from 'primereact/fieldset';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import RolesModalFiltroComponent from '../modal-filtro/roles-modal-filtro-component';

const RolesFiltroComponent = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  return (
    <Fragment>
      <Fieldset legend="FILTRO POR" toggleable>
        <div className="filter-roles">
          <div className="w-full">
            <span className="p-input-icon-left w-full">
              <i className="pi pi-search" />
              <InputText icon="pi pi-check" placeholder="Buscar por rol" />
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
      <RolesModalFiltroComponent
        isOpen={showFilterModal}
        closeModal={() => setShowFilterModal(false)}
      />
    </Fragment>
  );
};

export default RolesFiltroComponent;
