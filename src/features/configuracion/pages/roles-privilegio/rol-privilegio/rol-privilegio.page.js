import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import './rol-privilegio.scss';

const RolPrivilegioPage = ({ title = 'NUEVO ROL' }) => {
  const roles = [
    'Gestion de auditorias',
    'Gestion de no conformidades',
    'Gestion de actas de revisón por la dirección',
    'Gestion de encuestas',
    'Gestion de mapa de procesos',
    'Gestion de objetivos',
  ];

  return (
    <form className="form-custom p-0">
      <header className="header">
        <div className="title">
          <h3 className="mb-6 font-bold text-xl">{title}</h3>
        </div>
      </header>
      <div className="grid-roles scroll">
        {roles.map((rol, index) => (
          <div className="rol mt-4" key={index}>
            <div className="rol-title">
              <h2 className="font-semibold">{rol}</h2>
            </div>
            <div className="rol-list">
              <div>
                <Checkbox inputId="Lectura" value="Lectura"></Checkbox>
                <label htmlFor="Lectura" className="p-checkbox-label ml-3">
                  Lectura
                </label>
              </div>
              <div>
                <Checkbox inputId="Escritura" value="Escritura"></Checkbox>
                <label htmlFor="Escritura" className="p-checkbox-label ml-3">
                  Escritura
                </label>
              </div>
              <div>
                <Checkbox inputId="Eliminación" value="Eliminación"></Checkbox>
                <label htmlFor="Eliminación" className="p-checkbox-label ml-3">
                  Eliminación
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 items-center justify-end mt-3">
        <Button type="button" label="Cancelar" className="btn btn-secondary" />
        <Button type="button" label="Guardar" className="btn btn-primary" />
      </div>
    </form>
  );
};

export default RolPrivilegioPage;
