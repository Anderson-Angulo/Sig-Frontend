import { Fragment } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import RolesModalFiltroComponent from './RolesModalFilterComponent';
import PinerComponent from 'shared/components/Piner/PinerComponent';
import { Panel } from 'primereact/panel';
import useRoleFilter from 'features/configuration/hooks/roles/useRoleFilter';

const RolesFilterComponent = () => {
  const {
    fieldRole,
    handleChange,
    disabledBtnSearch,
    openModal,
    removePiner,
    showPiners,
    filterRole,
    values,
  } = useRoleFilter();

  return (
    <Fragment>
      <Panel header="FILTRO POR" toggleable>
        <div className="filter-roles mt-3">
          <div className="w-full">
            <span className="p-float-label p-input-icon-left w-full">
              <i className="pi pi-search" />
              <InputText
                id="input-search"
                ref={fieldRole}
                onChange={handleChange}
              />
              <label htmlFor="input-search">Buscar por rol</label>
            </span>
            {showPiners() && (
              <div className="filter-piners mt-3">
                {values.map(({ value, field }, index) => (
                  <PinerComponent
                    name={value}
                    field={field}
                    removePiner={removePiner}
                    key={index}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="filter-users-action">
            <div className="flex gap-3 w-full">
              <Button
                icon="pi pi-search"
                type="button"
                label="Buscar"
                onClick={filterRole}
                disabled={disabledBtnSearch}
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
      </Panel>

      <RolesModalFiltroComponent />
    </Fragment>
  );
};

export default RolesFilterComponent;
