import { Fragment, useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import UsersModalFilterComponent from './UsersModalFilterComponent';
import { Panel } from 'primereact/panel';
import useUserFilter from 'features/configuration/hooks/users/useUserFilter';

const UsersFilterComponent = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const {valueSearch,setValueSearch,simpleFilter}=useUserFilter()
  return (
    <Fragment>
      <Panel header="FILTRO POR" toggleable>
        <div className="filter-users">
          <div className="w-full ">
            <span className="p-float-label p-input-icon-left w-full">
              <i className="pi pi-search" />
              <InputText 
                onChange={e=>setValueSearch(e.target.value)}
                values={valueSearch}
                id="input-search" />
              <label htmlFor="input-search">Buscar por usuario o nombres</label>
            </span>
          </div>
          <div className="filter-users-action">
            <div className="flex gap-3 w-full">
              <Button
                icon="pi pi-search"
                type="button"
                label="Buscar"
                disabled={!valueSearch}
                onClick={simpleFilter}
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
      </Panel>

      <UsersModalFilterComponent
        isOpen={showFilterModal}
        closeModal={() => setShowFilterModal(false)}
      />
    </Fragment>
  );
};

export default UsersFilterComponent;
