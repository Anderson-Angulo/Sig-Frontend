import { Fragment } from 'react';
import { ListBox } from 'primereact/listbox';
import { useHistory } from 'react-router';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { InputSwitch } from 'primereact/inputswitch';
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import './usuario.page.scss';

const UsuarioPage = () => {
  const history = useHistory();

  const isActive = false;

  const sedesList = [
    { label: 'Sede 1', value: 'SEDE1' },
    { label: 'Sede 2', value: 'SEDE2' },
    { label: 'Sede 3', value: 'SEDE3' },
  ];
  return (
    <div className="bg-white p-10 mt-3 rounded-md shadow-md">
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
      <Panel header="ROLES" toggleable className="mt-3">
        <div className="user-roles py-2 px-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <div className="flex items-center gap-6">
              <InputSwitch key={num} />
              <p>ROL {num} </p>
            </div>
          ))}
        </div>
      </Panel>
      <Panel header="EMPRESAS" toggleable className="mt-3">
        <Accordion>
          <AccordionTab
            header={
              <Fragment>
                <i className="pi pi-building"></i> EMPRESA 1
              </Fragment>
            }
          >
            <h5 className="font-bold mb-3">SEDE</h5>
            <ListBox multiple options={sedesList} />
          </AccordionTab>
        </Accordion>
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
    </div>
  );
};

export default UsuarioPage;
