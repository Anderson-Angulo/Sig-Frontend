import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';
import './color-corporativo-component.scss';

const ColorCorporativoComponent = () => {
  return (
    <div>
      <div className="flex gap-3 justify-end">
        <Button type="button" label="Guardar" className="btn btn-primary" />
        <Button type="button" label="Cancelar" className="btn btn-secondary" />
      </div>
      <Panel header="Barra de Navegación" toggleable className="mt-5">
        <div className="option-color">
          <p>Color fondo</p>
          <input type="color" defaultValue="#E24D4D" />
        </div>
      </Panel>
      <Panel header="Barra de Menú" toggleable className="mt-4">
        <div className="option-color max-width">
          <p>Por defecto</p>
          <input type="color" defaultValue="#E6E4E4" />
          <div
            className="option-color-example-item"
            style={{ color: '#E6E4E4' }}
          >
            <i className="pi pi-sitemap"></i>
            <p>Gestión de la organización</p>
            <i className="pi pi-chevron-down"></i>
          </div>
        </div>
        <div className="option-color max-width">
          <p>Mouse encima</p>
          <input type="color" defaultValue="#000000" />
          <div
            className="option-color-example-item"
            style={{ color: '#000000' }}
          >
            <i className="pi pi-sitemap"></i>
            <p>Gestión de la organización</p>
            <i className="pi pi-chevron-down"></i>
          </div>
        </div>
        <div className="option-color max-width">
          <p>Seleccionado</p>
          <input type="color" defaultValue="#4DB4E2" />
          <div
            className="option-color-example-item flex "
            style={{ color: '#FFF', backgroundColor: '#4DB4E2' }}
          >
            <i className="pi pi-sitemap"></i>
            <p>Gestión de la organización</p>
            <i className="pi pi-chevron-down"></i>
          </div>
        </div>
      </Panel>
      <Panel header="Botones" toggleable className="mt-4">
        <div className="option-color">
          <p>Primario</p>
          <input type="color" defaultValue="#004680" />
          <Button
            type="button"
            label="Aceptar"
            className="btn btn-primary"
            style={{ backgroundColor: '#004680' }}
          />
        </div>
        <div className="option-color">
          <p>Secundario</p>
          <input type="color" defaultValue="#808080" />
          <Button
            type="button"
            label="Aceptar"
            className="btn btn-primary"
            style={{ backgroundColor: '#808080', borderColor: '#808080' }}
          />
        </div>
        <div className="option-color">
          <p>Exito</p>
          <input type="color" defaultValue="#4DB4E2" />
          <Button
            type="button"
            label="Aceptar"
            className="btn btn-primary"
            style={{ backgroundColor: '#4DB4E2', borderColor: '#4DB4E2' }}
          />
        </div>
        <div className="option-color">
          <p>Advertencia</p>
          <input type="color" defaultValue="#DFA98A" />
          <Button
            type="button"
            label="Aceptar"
            className="btn btn-primary"
            style={{ backgroundColor: '#DFA98A', borderColor: '#DFA98A' }}
          />
        </div>
        <div className="option-color">
          <p>Error</p>
          <input type="color" defaultValue="#FF0909" />
          <Button
            type="button"
            label="Aceptar"
            className="btn btn-primary"
            style={{ backgroundColor: '#FF0909', borderColor: '#FF0909' }}
          />
        </div>
        <div className="option-color">
          <p>Oscuro</p>
          <input type="color" defaultValue="#030303" />
          <Button
            type="button"
            label="Aceptar"
            className="btn btn-primary"
            style={{ backgroundColor: '#030303', borderColor: '#030303' }}
          />
        </div>
      </Panel>
    </div>
  );
};

export default ColorCorporativoComponent;
