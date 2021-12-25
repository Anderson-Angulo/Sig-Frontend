import { Fragment, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { ListBox } from 'primereact/listbox';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { InputSwitch } from 'primereact/inputswitch';
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import './UserPage.scss';
import TableEmpty from 'shared/components/tables/TableEmpty';
import limitCharacters from 'shared/utils/limitCharacters';
import { UsersAction } from 'features/configuration/store/actions/UsersAction';
import useSetTitlePage from 'shared/hooks/useSetTitlePage';

const UserPage = ({ title = 'Nuevo Usuario' }) => {
  const history = useHistory();
  const inputFile = useRef(null);
  const dispatch = useDispatch();
  const usuarioInformation = useSelector((state) => state.authReducer.user);
  const {
    loading,
    data: { roles, status, company },
  } = useSelector((state) => state.userReducer.dataManager);
  const dataManager = useSelector((state) => state.userReducer.dataManager);
  const [srcAvatar, setSrcAvatar] = useState('');
  const isActive = false;

  const { updateTitle } = useSetTitlePage();
  useEffect(() => {
    updateTitle({
      title: 'Configuración',
      subtitle: 'Gestión de Usuarios',
      description: title,
    });
  }, []);

  useEffect(() => {
    setSrcAvatar(usuarioInformation?.avatar);
  }, [usuarioInformation]);

  useEffect(() => {
    const { data } = dataManager;

    const cantList =
      data.roles.length + data.status.length + data.company.length;
    if (cantList === 0) dispatch(UsersAction.getDataMaster());
  }, []);

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

  const buildSedesArray = (arr) => {
    return arr.map((sede) => {
      return {
        label: sede.name,
        value: sede.name,
      };
    });
  };

  return (
    <div className="bg-white p-10 mt-3 rounded-md shadow-md">
      <Panel header="DATOS GENERALES" toggleable>
        <form className="form-custom p-0 my-4 mx-4">
          <div className="flex items-start gap-3 justify-between mb-6">
            <div className="field-row w-full">
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
                <div className="foreground-user-picture">
                  <i
                    className="pi pi-camera cursor-pointer"
                    onClick={() => inputFile.current.click()}
                  ></i>
                </div>
                <img src={srcAvatar} alt={usuarioInformation?.nombreCompleto} />
                <input
                  type="file"
                  className="hidden"
                  ref={inputFile}
                  onChange={onSelectedImage}
                />
              </div>
              <span className="p-float-label w-full">
                <InputText type="text" id="user_lastname" />
                <label htmlFor="user_lastname">Apellidos</label>
              </span>
            </div>
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
        </form>
      </Panel>
      {!loading && roles.length === 0 && (
        <div className="mt-4">
          <TableEmpty textAditional="Listado de Roles no encontrado" />
        </div>
      )}
      {!loading && roles.length > 0 && (
        <Panel header="ROLES" toggleable className="mt-3">
          <div className="user-roles py-2 px-5">
            {roles.map(({ description }, index) => (
              <div className="flex items-center gap-6" key={index}>
                <InputSwitch />
                <p title={description}>{limitCharacters(description, 28)} </p>
              </div>
            ))}
          </div>
        </Panel>
      )}

      {!loading && company.length === 0 && (
        <div className="mt-4">
          <TableEmpty textAditional="Listado de Compañias no encontrado" />
        </div>
      )}

      {!loading && company.length > 0 && (
        <Panel header="EMPRESAS" toggleable className="mt-3">
          {company.map((c, i) => (
            <Accordion key={i}>
              <AccordionTab
                header={
                  <Fragment>
                    <i className="pi pi-building"></i> {c.businessName}
                  </Fragment>
                }
              >
                {c.locations.length > 0 ? (
                  <ListBox multiple options={buildSedesArray(c.locations)} />
                ) : (
                  <div className="mt-4">
                    <TableEmpty textAditional="Listado de locaciones no encontrado" />
                  </div>
                )}
              </AccordionTab>
            </Accordion>
          ))}
        </Panel>
      )}

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

export default UserPage;
