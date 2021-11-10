import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';

const RolPrivilegioComponente = ({ title = 'Nuevo Rol' }) => {
  const subTitles = [
    {
      col1: 'Gestion de auditorias',
      col2: 'Gestion de no conformidades',
    },
    {
      col1: 'Gestion de actas de revisón por la dirección',
      col2: 'Gestion de encuestas',
    },
    {
      col1: 'Gestion de mapa de procesos',
      col2: 'Gestion de objetivos',
    },
  ];

  const Col = ({ subtitle }) => {
    return (
      <div className="col">
        <h2 className="font-semibold">{subtitle}</h2>
        <div className="d-block">
          <Checkbox inputId="lectura" value="Lectura"></Checkbox>
          <label htmlFor="lectura" className="p-checkbox-label">
            Lectura
          </label>
        </div>
        <div className="d-block">
          <Checkbox inputId="escritura" value="escritura"></Checkbox>
          <label htmlFor="escritura" className="p-checkbox-label">
            Escritura
          </label>
        </div>
        <div className="d-block">
          <Checkbox inputId="eliminacion" value="eliminacion"></Checkbox>
          <label htmlFor="eliminacion" className="p-checkbox-label">
            Eliminación
          </label>
        </div>
      </div>
    );
  };

  return (
    <div className="form-custom p-0">
      <header className="header">
        <div className="title">
          <h3 className="mb-6 font-bold text-xl">{title}</h3>
        </div>
      </header>
      <section>
        <div className="fields py-2">
          <span className="p-float-label w-2/5">
            <InputText id="username" />
            <label htmlFor="username">Nombres</label>
          </span>
        </div>
        {subTitles.map((subtitle, index) => (
          <div className="flex gap-12 mt-4" key={index}>
            <Col subtitle={subtitle.col1} />
            <Col subtitle={subtitle.col2} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default RolPrivilegioComponente;
