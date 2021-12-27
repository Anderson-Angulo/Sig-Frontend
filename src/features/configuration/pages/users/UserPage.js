import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Checkbox } from 'primereact/checkbox';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Skeleton } from 'primereact/skeleton';
import { InputSwitch } from 'primereact/inputswitch';
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

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
    handleSubmit,
    statusName,
    setStatusName,
    isCheckedLocation,
    cancelSaveUser,
  } = useUser({ title });

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
    <div className="bg-white p-10 mt-3 rounded-md shadow-md">
      <Panel header="DATOS GENERALES" toggleable>
        <form className="form-custom p-0 my-4 mx-4" onSubmit={handleSubmit}>
          <div className="flex items-start gap-3 justify-between mb-6 w-full">
            <div className="field-row w-full">
              {editUser.loading ? (
                <SkeletonCustom />
              ) : (
                <span className="p-float-label w-full">
                  <InputText
                    type="text"
                    id="user_name"
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
                    id="user_names"
                    defaultValue={!isUserNew ? editUser?.data?.firstName : ''}
                  />
                  <label htmlFor="user_names">Nombres</label>
                </span>
              )}

              <div className="user-picture">
                {editUser.loading ? (
                  <Skeleton shape="circle" size="6rem"></Skeleton>
                ) : (
                  <>
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
                      alt={isUserNew ? '' : usuarioInformation?.nombreCompleto}
                    />
                    <input
                      type="file"
                      className="hidden"
                      ref={inputFile}
                      onChange={onSelectedImage}
                    />
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
                    defaultValue={!isUserNew ? editUser?.data?.lastName : ''}
                  />
                  <label htmlFor="user_lastname">Apellidos</label>
                </span>
              )}
            </div>
            <div className="flex gap-2  justify-end w-2/4">
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
        </form>
      </Panel>
      {!loading && roles?.length === 0 && (
        <div className="mt-4">
          <TableEmpty textAditional="Listado de Roles no encontrado" />
        </div>
      )}
      {!loading && roles?.length > 0 && !isAdmin && (
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
    </div>
  );
};

export default UserPage;
