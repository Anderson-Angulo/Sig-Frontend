import { Fragment, useRef } from 'react';
import { Fieldset } from 'primereact/fieldset';
import { InputText } from 'primereact/inputtext';
import { useDispatch } from 'react-redux';
import { Button } from 'primereact/button';
import RolesModalFiltroComponent from './RolesModalFilterComponent';
import { RolesAction } from 'features/configuration/store/actions/RolesAction';

const RolesFilterComponent = () => {
  const dispatch = useDispatch();
  const fielRole = useRef('');

  const filterRole = () => {
    dispatch(RolesAction.searchRole(fielRole.current.value));
  };

  const openModal = () => {
    dispatch(RolesAction.toggleModalFilters({ showModal: true }));
  };

  const handleChange = () => {
    if (fielRole.current.value === '') filterRole();
  };

  return (
    <Fragment>
      <Fieldset legend="FILTRO POR" toggleable>
        <div className="filter-roles">
          <div className="w-full pt-5">
            <span className="p-float-label p-input-icon-left w-full">
              <i className="pi pi-search" />
              <InputText
                id="input-search"
                ref={fielRole}
                onChange={handleChange}
              />
              <label htmlFor="input-search">Buscar por rol</label>
            </span>
          </div>
          <div className="filter-users-action">
            <div className="flex gap-3 w-full">
              <Button
                icon="pi pi-search"
                type="button"
                label="Buscar"
                onClick={filterRole}
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
                onClick={openModal}
              />
            </div>
          </div>
        </div>
      </Fieldset>
      <RolesModalFiltroComponent />
    </Fragment>
  );
};

export default RolesFilterComponent;
