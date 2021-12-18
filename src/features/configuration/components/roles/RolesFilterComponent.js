import { Fragment, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fieldset } from 'primereact/fieldset';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import RolesModalFiltroComponent from './RolesModalFilterComponent';
import { RolesAction } from 'features/configuration/store/actions/RolesAction';
import PinerComponent from 'shared/components/Piner/PinerComponent';

const RolesFilterComponent = () => {
  const dispatch = useDispatch();
  const fieldRole = useRef(null);
  const { values } = useSelector((state) => state.roleReducer.filterRole);
  const [disabledBtnSearch, setDisabledBtnSearch] = useState(true);

  const filterRole = () => {
    const value = fieldRole.current.value;
    filterRoles();

    if (value !== null)
      dispatch(RolesAction.setFilterValues([{ field: 'name', value }]));
  };

  const openModal = () => {
    dispatch(RolesAction.toggleModalFilters({ showModal: true }));
  };

  const handleChange = () => {
    const showBtn = fieldRole.current.value.length > 2 ? false : true;
    setDisabledBtnSearch(showBtn);
    if (fieldRole.current.value === null) {
      filterRoles();
      dispatch(RolesAction.removeFilterValues('name'));
    }
  };

  const showPiners = () => {
    if (values.length > 0) return true;
    else return false;
  };

  const filterRoles = () => {
    const value = fieldRole.current.value;
    const fields = {};

    fields.name = value;

    if (values.length > 0) {
      const fieldTo = values.filter((val) => val.field === 'to');
      if (fieldTo.length > 0) fields.to = fieldTo[0].date;
      else fields.to = null;
      const fieldFrom = values.filter((val) => val.field === 'from');
      if (fieldFrom.length > 0) fields.from = fieldFrom[0].date;
      else fields.from = null;
    }

    dispatch(RolesAction.getRoles({ change: true, fields }));
  };

  useEffect(() => {
    filterRoles();
  }, [values]);

  const removePiner = (field) => {
    if (field === 'name') fieldRole.current.value = null;
    dispatch(RolesAction.removeFilterValues(field));
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
                ref={fieldRole}
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
        {showPiners() && (
          <div className="filter-piners mt-4">
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
      </Fieldset>
      <RolesModalFiltroComponent />
    </Fragment>
  );
};

export default RolesFilterComponent;
