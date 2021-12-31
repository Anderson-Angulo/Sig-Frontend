import { useSelector } from 'react-redux';
import { Checkbox } from 'primereact/checkbox';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Skeleton } from 'primereact/skeleton';
import { InputSwitch } from 'primereact/inputswitch';
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useEffect, useState } from 'react';

import './UserPage.scss';
import TableEmpty from 'shared/components/tables/TableEmpty';
import limitCharacters from 'shared/utils/limitCharacters';
import pluralOrSingularText from 'shared/utils/pluralOrSingularText';
import useUser from 'features/configuration/hooks/users/useUser';

const UserPage = ({ title = 'Nuevo Usuario' }) => {
  const {
    loading,
    data: { roles, status, company },
  } = useSelector((state) => state.userReducer.dataManager);

  const { editUser } = useSelector((state) => state.userReducer);

  const usuarioInformation = useSelector((state) => state.authReducer.user);

  const {
    onSelectedImage,
    isUserNew,
    inputFile,
    srcAvatar,
    isAdmin,
    setIsAdmin,
    statusName,
    setStatusName,
    setUserData,
    userData,
    isCheckedLocation,
    cancelSaveUser,
    createOrEditUser,
    setSrcAvatar,
  } = useUser({ title });

  const rolesFilter = roles?.filter((r) => r.code !== 'ADMIN');
  const roleAdmin = roles?.filter((r) => r.code === 'ADMIN')[0];

  let initialSwitchRole = {};
  const roleKeys = roles?.map((r) => r.id);
  roleKeys?.forEach((k) => (initialSwitchRole[k] = false));

  if (!isUserNew) {
    const rolesEditUser = editUser?.data?.roles;
    const roleKeysEnable = rolesEditUser?.map((r) => r.id);
    roleKeysEnable?.forEach((k) => (initialSwitchRole[k] = true));
  }

  const [valuesSwitch, setValuesSwitch] = useState(initialSwitchRole);

  const handlerChangeSwitchRole = (e) => {
    if (e.target.name === 1 && e.target.value === false) {
      setIsAdmin(false);
    } else if (e.target.name === 1 && e.target.value === true) {
      roleKeys?.forEach((k) => (valuesSwitch[k] = false));
      setIsAdmin(true);
    }

    setValuesSwitch({
      ...valuesSwitch,
      [e.target.name]: e.target.value,
    });
  };

  const handlerChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const SkeletonCustom = ({ width = '100%' }) => {
    return <Skeleton width={width} height="2.2rem" />;
  };

  const StatusComponent = ({ text, isActive = false }) => {
    return (
      <div
        className="p-2 border rounded-md px-4 cursor-pointer"
        style={{
          ...(isActive ? { backgroundColor: '#004680', color: '#fff' } : {}),
        }}
        onClick={() => setStatusName(text)}
      >
        <p>{text}</p>
      </div>
    );
  };

  return (
    <div className="bg-white p-8 mt-3 rounded-md shadow-md">
      <form
        className="form-custom p-0"
        onSubmit={createOrEditUser}
        onChange={handlerChange}
      >
        <Panel header="DATOS GENERALES" toggleable>
          <div className="flex items-start gap-3 justify-between mb-6 w-full">
            <div className="field-row w-full">
              {editUser.loading ? (
                <SkeletonCustom />
              ) : (
                <span className="p-float-label w-full">
                  <InputText
                    type="text"
                    id="user_name"
                    name="email"
                    defaultValue={!isUserNew ? editUser?.data?.email : ''}
                  />
                  <label htmlFor="user_name">Usuario</label>
                </span>
              )}

              {editUser.loading ? (
                <SkeletonCustom />
              ) : (
                <span className="p-float-label w-full">
                  <InputText type="email" id="user_email" />
                  <label htmlFor="user_email">Correo Eléctronico</label>
                </span>
              )}

              {editUser.loading ? (
                <SkeletonCustom />
              ) : (
                <span className="p-float-label w-full">
                  <InputText
                    type="text"
                    id="user_name"
                    name="email"
                    defaultValue={!isUserNew ? editUser?.data?.email : ''}
                  />
                  <label htmlFor="user_name">Usuario</label>
                </span>
              )}

              <div className="user-picture">
                {editUser.loading ? (
                  <Skeleton shape="circle" size="6rem"></Skeleton>
                ) : (
                  <>
                    <div
                      className={`${
                        srcAvatar !== ''
                          ? 'flex flex-row gap-4 items-center'
                          : ''
                      }`}
                    >
                      <div className="foreground-user-picture">
                        <i
                          className="pi pi-camera cursor-pointer"
                          onClick={() => inputFile.current.click()}
                        ></i>
                      </div>

                      <img
                        src={
                          srcAvatar === ''
                            ? '/images/decorations/avatar.png'
                            : srcAvatar
                        }
                        className="avatar"
                        alt={
                          isUserNew ? '' : usuarioInformation?.nombreCompleto
                        }
                      />
                      <input
                        type="file"
                        className="hidden"
                        ref={inputFile}
                        onChange={onSelectedImage}
                      />
                      {srcAvatar !== '' && (
                        <Button
                          label="Eliminar foto"
                          icon="pi pi-trash"
                          className="p-button-secondary p-button-outlined"
                          onClick={() => {
                            setSrcAvatar('');
                          }}
                        />
                      )}
                    </div>
                  </>
                )}
              </div>
              {editUser.loading ? (
                <SkeletonCustom />
              ) : (
                <span className="p-float-label w-full">
                  <InputText
                    type="text"
                    id="user_lastname"
                    name="lastName"
                    defaultValue={!isUserNew ? editUser?.data?.lastName : ''}
                  />
                  <label htmlFor="user_lastname">Apellidos</label>
                </span>
              )}
            </div>
            <div className="flex gap-2  justify-end ">
              {editUser.loading && !loading ? (
                <>
                  <SkeletonCustom width="30%" />
                  <SkeletonCustom width="30%" />
                </>
              ) : (
                <>
                  {status?.map((s, i) => {
                    return (
                      <StatusComponent
                        key={i}
                        text={s.description}
                        isActive={s.description === statusName}
                      />
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </Panel>
        {!loading && roles?.length === 0 && (
          <div className="mt-4">
            <TableEmpty textAditional="Listado de Roles no encontrado" />
          </div>
        )}
        {}
        <Panel header="ROLES" toggleable className="mt-3">
          <div className="user-roles py-2 px-5">
            <div className="flex items-center gap-6">
              <InputSwitch
                name={roleAdmin?.id}
                checked={valuesSwitch[roleAdmin?.id]}
                onChange={handlerChangeSwitchRole}
              />
              <p title={roleAdmin?.description}>
                {limitCharacters(roleAdmin?.description, 28)}{' '}
              </p>
            </div>
            {!loading && roles?.length > 0 && (
              <>
                {rolesFilter.map(({ description, id }, index) => (
                  <div className="flex items-center gap-6" key={index}>
                    <InputSwitch
                      disabled={isAdmin}
                      name={id}
                      checked={valuesSwitch[id]}
                      onChange={handlerChangeSwitchRole}
                    />
                    <p title={description}>
                      {limitCharacters(description, 28)}{' '}
                    </p>
                  </div>
                ))}
              </>
            )}
          </div>
        </Panel>

        {!loading && company?.length === 0 && (
          <div className="mt-4">
            <TableEmpty textAditional="Listado de Compañias no encontrado" />
          </div>
        )}

        {!loading && company?.length > 0 && (
          <Panel
            header={pluralOrSingularText({
              cant: company.length,
              textPlural: 'EMPRESAS',
              textSingular: 'EMPRESA',
            })}
            toggleable
            className="mt-3"
          >
            {company.map((c, i) => (
              <Accordion key={i}>
                <AccordionTab
                  header={
                    <div>
                      <i className="pi pi-building"></i> {c.businessName}
                    </div>
                  }
                >
                  {c.locations.length > 0 ? (
                    <div>
                      <h3 className="mb-3 font-bold">
                        {pluralOrSingularText({
                          cant: c.locations.length,
                          textPlural: 'SEDES',
                          textSingular: 'SEDE',
                        })}
                      </h3>
                      {c.locations.map(({ id, name }, index) => (
                        <div className="item-location mb-1" key={index}>
                          <p>{name}</p>
                          <Checkbox
                            checked={isCheckedLocation({ id })}
                          ></Checkbox>
                        </div>
                      ))}
                    </div>
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
            onClick={cancelSaveUser}
            className="btn btn-secondary mt-4"
          />
          <Button
            icon="pi pi-save"
            type="submit"
            label="Guardar"
            className="btn btn-primary mt-4"
          />
        </div>
      </form>
    </div>
  );
};

export default UserPage;
