import { Button } from 'primereact/button';
import { Fieldset } from 'primereact/fieldset';
import { InputText } from 'primereact/inputtext';
import { Fragment } from 'react';

const RolPrivilegioPage = () => {
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
    </Fragment>
  );
};

export default RolPrivilegioPage;
