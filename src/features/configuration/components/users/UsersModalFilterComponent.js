import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import useUserFilter from 'features/configuration/hooks/users/useUserFilter';
import { Checkbox } from 'primereact/checkbox';

const UsersModalFilterComponent = ({ isOpen = false, closeModal }) => {
  const {
    companiesOptions,
    rolesOptions,
    locationsOptions,
    advancedfilter,
    handlerChangeModalFilter,
    values,
    setValues,
    loading
  } = useUserFilter()

  const clearModal=()=>{
    setValues(null)
  }

  const companies = companiesOptions
  const locations = locationsOptions
  const roles = rolesOptions
  
  const styleLabel = {
    color: '#004680',
    fontWeight: 600,
    marginBottom: '5px',
  };

 

  if (isOpen) {
    return (
      <div className="modal-filtro shadow-md">
        <form className="form-modal px-8 py-4"  onSubmit={advancedfilter}>
          <header className="header mb-4">
            <div className="icon-closed cursor-pointer" onClick={closeModal}>
              <i className="pi pi-times"></i>
            </div>
            <div className="title text-left">
              <h3 className="mb-2 font-bold modal-filtro-title">Filtrar</h3>
             
            </div>
          </header>
          <div className="body">
            <div className="flex gap-4 pt-3">
              <div className="w-full">
                <span className="p-float-label">
                  <Calendar 
                    value={values?.fromDate}
                    onChange={handlerChangeModalFilter}
                    name="fromDate"
                    id="desde" />     
                  <label htmlFor="desde">Desde</label>
                </span>
              </div>
              <div className="w-full">
                <span className="p-float-label">
                  <Calendar
                    value={values?.toDate}
                    onChange={handlerChangeModalFilter}
                    name="toDate"
                    id="hasta" />
                  <label htmlFor="hasta">Hasta</label>
                </span>
              </div>
            </div>
            <div className="flex pt-7">
              <div className="w-full">
                <span className="p-float-label">
                  <Dropdown
                    value={values?.companyId}
                    onChange={handlerChangeModalFilter}
                    name="companyId"
                    options={companies}
                    optionLabel="company"
                    filter
                    showClear
                    filterBy="company"
                    className="w-full"
                  />
                  <label htmlFor="dropdown">Por Empresa</label>
                </span>
              </div>
            </div>
            <div className="flex pt-7">
              <div className="w-full">
                <span className="p-float-label">
                  <Dropdown
                    name="locationId"
                    value={values?.locationId}
                    onChange={handlerChangeModalFilter}
                    options={locations}
                    optionLabel="location"
                    filter
                    showClear
                    filterBy="location"
                    className="w-full"
                  />

                  <label htmlFor="dropdown">Por Sede</label>
                </span>
              </div>
            </div>
            <div className="flex pt-7">
              <div className="w-full">
                <span className="p-float-label">
                  <Dropdown
                    name="roleId"
                    value={values?.roleId}
                    onChange={handlerChangeModalFilter} 
                    options={roles}
                    optionLabel="role"
                    filter
                    showClear
                    filterBy="role"
                    className="w-full"
                  />
                  <label htmlFor="dropdown">Por Rol</label>
                </span>
              </div>
            </div>
            <div className="flex mt-3">
              <div className="w-full">
                <h3 style={styleLabel}>Por Estado</h3>
                <div className="flex gap-3">
                  <div className="flex gap-3">
                    <Checkbox name="statusId" onChange={handlerChangeModalFilter} value="ACTIVO"  checked={values?.statusId==="ACTIVO"}  />
                    <p>Activo</p>
                  </div>
                  <div className="flex gap-3">
                    <Checkbox  name="statusId" onChange={handlerChangeModalFilter} value="INACTIVO" checked={values?.statusId==="INACTIVO"}  />
                    <p>Inactivo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-2">
            <Button
              type="button"
              label="Limpiar Filtro"
              className="btn btn-secondary mt-4"
              onClick={clearModal}
            />
            <Button
              type="submit"
              label="Buscar"
              loading={loading}
              className="btn btn-primary mt-4"
            />
          </div>
        </form>
      </div>
    );
  }

  return null;
};

export default UsersModalFilterComponent;
