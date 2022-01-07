import { useSelector } from 'react-redux';
import { Checkbox } from 'primereact/checkbox';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Skeleton } from 'primereact/skeleton';
import { InputSwitch } from 'primereact/inputswitch';
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import Message from 'shared/components/messages/Message';

import './UserPage.scss';
import TableEmpty from 'shared/components/tables/TableEmpty';
import limitCharacters from 'shared/utils/limitCharacters';
import pluralOrSingularText from 'shared/utils/pluralOrSingularText';
import useUser from 'features/configuration/hooks/users/useUser';

const UserPage = ({ title = 'Nuevo Usuario' }) => {
  const {
    loading,
    data: { roles, company },
  } = useSelector((state) => state.userReducer.dataManager);


  const {
    onSelectedImage,
    isUserNew,
    inputFile,
    srcAvatar,
    isAdmin,
    setUserData,
    isActive,
    setIsActive,
    userData,
    isCheckedLocation,
    isCheckedRole,
    createOrEditUser,
    setSrcAvatar,
    handleRoleChange,
    handleLocationChange,
    register,
    handleSubmit,
    errors,
    handleClick,
    visible,
    setVisible,
    accept,
    reject,
    disabledButtonState,
    editUser
} = useUser({ title });

 
  const rolesFilter = roles?.filter((r) => r.code !== 'ADMIN');
  const roleAdmin = roles?.filter((r) => r.code === 'ADMIN')[0];
  const roleAdminId=roleAdmin?.id
  const {data}=editUser

 
  const messages=[]
  for(let prop in errors ){
    if(errors.hasOwnProperty(prop)){
      messages.push(errors[prop].message)
    }
  }


  const handlerChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const SkeletonCustom = ({ width = '100%' }) => {
    return <Skeleton width={width} height="2.2rem" />;
  };


  return (
    <div className="bg-white p-8 mt-3 rounded-md shadow-md">
      <form
        className="form-custom p-0"
        onSubmit={handleSubmit(createOrEditUser)}
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
                    {...register("userName",{
                      required:{value:true,message:"El campo Username es requerido"}
                    })}
                    type="text"
                    id="user_name"
                    name="userName"
                    className={errors?.userName ? 'p-invalid w-full' : 'w-full'}
                    value={userData?.userName}
                  />
                  <label htmlFor="user_name">Usuario</label>
                </span>
              )}

              {editUser.loading ? (
                <SkeletonCustom />
              ) : (
                <span className="p-float-label w-full">
                  <InputText
                    {...register("email",{
                      required:{value:true,message:"El campo Email es requerido"}
                    })}
                    type="email" 
                    id="user_email"
                    name="email"
                    className={errors?.email ? 'p-invalid w-full' : 'w-full'}
                    value={userData?.email}/>
                  <label htmlFor="user_email">Correo Eléctronico</label>
                </span>
              )}

              {editUser.loading ? (
                <SkeletonCustom />
              ) : (
                <span className="p-float-label w-full">
                  <InputText
                     {...register("firstName",{
                      required:{value:true,message:"El campo Firstname es requerido"}
                    })}
                    type="text"
                    id="user_firstname"
                    name="firstName"
                    className={errors?.firstName ? 'p-invalid w-full' : 'w-full'}
                    value={userData?.firstName }
                  />
                  <label htmlFor="user_firstname">Nombres</label>
                </span>

              )}

              <div className="user-picture">
                {editUser.loading ? (
                  <Skeleton shape="circle" size="6rem"></Skeleton>
                ) : (
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
                          srcAvatar === null
                            ? '/images/decorations/avatar.png'
                            : srcAvatar
                        }
                        className="avatar"
                        alt={
                          isUserNew ? '' : data?.avatar
                        }
                      />
                      <input
                        type="file"
                        className="hidden"
                        ref={inputFile}
                        onChange={onSelectedImage}
                      />
                      {srcAvatar !== null && (
                        <Button
                          label="Eliminar foto"
                          icon="pi pi-trash"
                          className="p-button-secondary p-button-outlined"
                          onClick={() => {
                            setSrcAvatar(null);
                          }}
                        />
                      )}
                    </div>
                )}
              </div>
              {editUser.loading ? (
                <SkeletonCustom />
              ) : (
                <span className="p-float-label w-full">
                  <InputText
                    {...register("lastName",{
                      required:{value:true,message:"El campo Lastname es requerido"}
                    })}
                    type="text"
                    id="user_lastname"
                    name="lastName"
                    className={errors?.lastName ? 'p-invalid w-full' : 'w-full'}
                    value={ userData?.lastName }
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
                <div className="state-field" >
                  <span htmlFor="user_state">Estado</span>
                  <InputSwitch
                    checked={isActive}
                    disabled={disabledButtonState}
                    onChange={e=>setIsActive(e.value)}
                  />  
                  {isActive ? "ACTIVO"  :  "INACTIVO"}
                </div>
                 
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
                name={roleAdminId}
                checked={isCheckedRole({id:roleAdminId})}
                onChange={handleRoleChange}
                className={errors?.role ? 'p-invalid ' : ''}
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
                      checked={isCheckedRole({id})}
                      className={errors?.role ? 'p-invalid ' : ''}
                      onChange={handleRoleChange}
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
                        <div  className="item-location mb-1" key={index}>
                          <p>{name}</p>
                          <Checkbox
                            name={id}
                            checked={isCheckedLocation({ id })}
                            onChange={handleLocationChange}
                            className={errors?.location ? 'p-invalid ' : ''}
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
            {(messages.length > 0) && (
            <Message messages={messages} status="error" />
          )}

        <div className="flex justify-end gap-4 mt-3">
          <Button
            icon="pi pi-times"
            type="button"
            label="Cancelar"
            onClick={() => setVisible(true)}
            className="btn btn-secondary mt-4"
          />
          <Button
            icon="pi pi-save"
            type="submit"
            label="Guardar"
            onClick={handleClick}
            className="btn btn-primary mt-4"
          />
        </div>
      </form>
      <ConfirmDialog
        visible={visible}
        onHide={() => setVisible(false)}
        message="¿Está seguro que desea cancelar?"
        header="Cancelar"
        icon="pi pi-exclamation-triangle"
        accept={accept}
        reject={reject}
      />
    </div>
  );
};

export default UserPage;
