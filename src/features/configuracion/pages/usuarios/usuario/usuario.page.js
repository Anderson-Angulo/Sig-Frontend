import { Fragment } from 'react';
import { useHistory } from 'react-router';
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const UsuarioPage = () => {
  const history = useHistory();

  const isActive = false;
  return (
    <Fragment>
      <Panel header="DATOS GENERALES" toggleable>
        <form className="form-custom p-0 my-4 mx-4">
          <div className="flex justify-end mb-6">
            <div
              className={`p-2 border rounded-md px-4 ${
                isActive ? 'user-active ' : ''
              }`}
            >
              <p>{isActive ? 'Activo' : 'Inactivo'}</p>
            </div>
          </div>
          <div className="flex gap-6">
            <span className="p-float-label w-full">
              <InputText type="text" id="user_name" />
              <label htmlFor="user_name">Nombre de usuario</label>
            </span>
            <span className="p-float-label w-full">
              <InputText type="email" id="user_email" />
              <label htmlFor="user_email">Correo Eléctronico</label>
            </span>
          </div>
          <div className="flex gap-6 mt-8">
            <span className="p-float-label w-full">
              <InputText type="text" id="user_names" />
              <label htmlFor="user_names">Nombres</label>
            </span>
            <span className="p-float-label w-full">
              <InputText type="text" id="user_lastname" />
              <label htmlFor="user_lastname">Apellidos</label>
            </span>
          </div>
        </form>
      </Panel>
      <Panel header="EMPRESAS" toggleable className="mt-3">
        <h1>Empresas</h1>
      </Panel>
      <Panel header="SEDES" toggleable className="mt-3">
        <h1>Sedes</h1>
      </Panel>

      <div className="flex gap-4 mt-3">
        <Button
          icon="pi pi-save"
          type="button"
          label="Guardar"
          className="btn btn-primary mt-4"
        />
        <Button
          icon="pi pi-times"
          type="button"
          label="Cancelar"
          className="btn btn-primary mt-4"
          onClick={() => history.goBack()}
        />
      </div>
    </Fragment>
  );
};

export default UsuarioPage;
