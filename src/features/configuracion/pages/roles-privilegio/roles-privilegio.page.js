import { Fragment } from 'react';
import { Button } from 'primereact/button';
import { Fieldset } from 'primereact/fieldset';
import { InputText } from 'primereact/inputtext';
import tablaRoles from './datos/roles';
import 'shared/styles/components/tablas.scss';

const RolesPrivilegioPage = () => {
  return (
    <Fragment>
      <Fieldset legend="Filtro por" toggleable>
        <div className="filter">
          <div className="fields py-4">
            <span className="p-float-label w-full">
              <InputText id="username" />
              <label htmlFor="username">Nombres</label>
            </span>
          </div>
        </div>
        <div className="actions flex gap-3 items-center justify-end">
          <Button type="button" label="Buscar" className="btn btn-primary" />
          <Button type="button" label="Limpiar" className="btn btn-secondary" />
        </div>
      </Fieldset>
      <div className="mt-5 flex items-center justify-end">
        <Button type="button" label="Nueva" className="btn btn-dark" />
      </div>
      <div className="table-main table-roles mt-5">
        <div className="table-header">
          {tablaRoles.header.map(({ titulo }, index) => (
            <div className="header-title" key={index}>
              <h3 className="text">{titulo}</h3>
              <i className="pi pi-filter"></i>
            </div>
          ))}
        </div>
        <div className="table-body relative">
          {tablaRoles.body.map(
            ({ rol, nroUsuario, nroPermiso, fechaCreacion }, index) => (
              <div className="table-item" key={index}>
                <p>{rol}</p>
                <p>{nroUsuario}</p>
                <p>{nroPermiso}</p>
                <p>{fechaCreacion}</p>
              </div>
            )
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default RolesPrivilegioPage;
