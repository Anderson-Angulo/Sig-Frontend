import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

const AgregarUsuarioPage = () => {
  const opciones = [
    { opcion: 'Empresa' },
    { opcion: 'Empresa 1' },
    { opcion: 'Empresa 2' },
  ];

  const sedes = [{ sede: 'Sede 1' }, { sede: 'Sede 2' }, { sede: 'Sede 3' }];

  const roles = [{ rol: 'Rol 1' }, { rol: 'Rol 2' }, { rol: 'Rol 3' }];

  return (
    <form className="form-custom p-0">
      <header className="header">
        <div className="title">
          <h3 className="mb-6 font-bold text-xl">NUEVO USUARIO</h3>
        </div>
      </header>
      <div className="flex gap-2">
        <span className="p-float-label w-full">
          <InputText type="email" id="user" />
          <label htmlFor="user">Usuario</label>
        </span>
        <span className="p-float-label w-full">
          <InputText id="lastname" />
          <label htmlFor="lastname">Apellidos</label>
        </span>
      </div>
      <div className="flex gap-2 mt-7">
        <span className="p-float-label w-full">
          <InputText type="number" id="type_doc" />
          <label htmlFor="type_doc">Tipo de documento</label>
        </span>
        <Dropdown
          options={opciones}
          optionLabel="opcion"
          filter
          showClear
          filterBy="opcion"
          className="w-full"
          placeholder="Seleccione un "
        />
      </div>
      <div className="flex gap-2 mt-7">
        <Dropdown
          options={sedes}
          optionLabel="sede"
          filter
          showClear
          filterBy="sede"
          className="w-full"
          placeholder="Seleccione Sede"
        />
        <Dropdown
          options={roles}
          optionLabel="rol"
          filter
          showClear
          filterBy="rol"
          className="w-full"
          placeholder="Seleccione Rol"
        />
      </div>
      <div className="flex gap-3 items-center justify-end mt-3">
        <Button type="button" label="Cancelar" className="btn btn-secondary" />
        <Button type="button" label="Continuar" className="btn btn-primary" />
      </div>
    </form>
  );
};

export default AgregarUsuarioPage;
