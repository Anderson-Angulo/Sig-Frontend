import { Fragment, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
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
  const inputFile = useRef(null);
  const usuarioInformation = useSelector((state) => state.authReducer.user);
  const [srcAvatar, setSrcAvatar] = useState('');
  const currentAvatar = useRef('');
  const isActive = false;

  const sedesList = [
    { label: 'Sede 1', value: 'SEDE1' },
    { label: 'Sede 2', value: 'SEDE2' },
    { label: 'Sede 3', value: 'SEDE3' },
  ];

  useEffect(() => {
    setSrcAvatar(usuarioInformation?.avatar);
  }, [usuarioInformation]);

  const handlerUploadImage = () => inputFile.current.click();

  const onSelectedImage = ({ target }) => {
    const file = target.files[0];

    if (!file) {
      setSrcAvatar(usuarioInformation?.avatar);
      return;
    }
    const fr = new FileReader();
    fr.onloadend = () => setSrcAvatar(fr.result);
    fr.readAsDataURL(file);
  };

  return (
    <div className="bg-white p-10 mt-3 rounded-md shadow-md">
      <Panel header="DATOS GENERALES" toggleable>
        <form className="form-custom p-0 my-4 mx-4">
          <div className="flex justify-end mb-6">
            <div
              className="p-2 border rounded-md px-4"
              style={{
                ...(isActive
                  ? { backgroundColor: '#004680', color: '#fff' }
                  : {}),
              }}
            >
              <p>{isActive ? 'Activo' : 'Inactivo'}</p>
            </div>
          </div>
          <div className="field-row">
            <span className="p-float-label w-full">
              <InputText type="text" id="user_name" />
              <label htmlFor="user_name">Usuario</label>
            </span>
            <span className="p-float-label w-full">
              <InputText type="email" id="user_email" />
              <label htmlFor="user_email">Correo Eléctronico</label>
            </span>
            <span className="p-float-label w-full">
              <InputText type="text" id="user_names" />
              <label htmlFor="user_names">Nombres</label>
            </span>
            <div className="user-picture">
              <img src={srcAvatar} alt={usuarioInformation?.nombreCompleto} />
              <input
                type="file"
                className="hidden"
                ref={inputFile}
                onChange={onSelectedImage}
              />
              <Button
                type="button"
                label="Subir Foto"
                className="btn btn-primary"
                onClick={handlerUploadImage}
              />
            </div>
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
            <div className="flex items-center gap-6" key={num}>
              <InputSwitch />
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

      <div className="flex justify-end gap-4 mt-3">
        <Button
          icon="pi pi-times"
          type="button"
          label="Cancelar"
          className="btn btn-secondary mt-4"
          onClick={() => history.goBack()}
        />
        <Button
          icon="pi pi-save"
          type="button"
          label="Guardar"
          className="btn btn-primary mt-4"
        />
      </div>
    </div>
  );
};

export default UsuarioPage;
