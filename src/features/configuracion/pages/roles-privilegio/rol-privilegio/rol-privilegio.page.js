import { useHistory } from 'react-router';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import './rol-privilegio.scss';
import { InputText } from 'primereact/inputtext';

const RolPrivilegioPage = ({ title = 'NUEVO ROL' }) => {
  const history = useHistory();
  const roles = [
    'Gestion de auditorias',
    'Gestion de no conformidades',
    'Gestion de actas de revisón por la dirección',
    'Gestion de encuestas',
    'Gestion de mapa de procesos',
    'Gestion de objetivos',
  ];

  return (
    <div className="bg-white p-10 mt-3 rounded-md shadow-md">
      <form className="form-custom p-0">
        <div className="mb-6 w-2/5">
          <span className="p-float-label w-full">
            <InputText type="text" id="rol_name" />
            <label htmlFor="rol_name">Nombre del rol</label>
          </span>
        </div>
        <div className="grid-roles scroll">
          {roles.map((rol, index) => (
            <div className="rol mt-4" key={index}>
              <div className="rol-title">
                <h2 className="font-semibold">{rol}</h2>
              </div>
              <div className="rol-list">
                <div className="mb-2">
                  <Checkbox inputId="Lectura" value="Lectura"></Checkbox>
                  <label htmlFor="Lectura" className="p-checkbox-label ml-3">
                    Lectura
                  </label>
                </div>
                <div className="mb-2">
                  <Checkbox inputId="Escritura" value="Escritura"></Checkbox>
                  <label htmlFor="Escritura" className="p-checkbox-label ml-3">
                    Escritura
                  </label>
                </div>
                <div className="mb-2">
                  <Checkbox
                    inputId="Eliminación"
                    value="Eliminación"
                  ></Checkbox>
                  <label
                    htmlFor="Eliminación"
                    className="p-checkbox-label ml-3"
                  >
                    Eliminación
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 items-center justify-end mt-3">
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
      </form>
    </div>
  );
};

export default RolPrivilegioPage;
