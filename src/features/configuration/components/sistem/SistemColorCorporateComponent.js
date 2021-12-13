import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';
import { useState } from 'react';
import './SistemColorCorporateComponent.scss';

const SistemColorCorporateComponent = () => {
  const [colors, setColors] = useState({
    fondo: '#E24D4D',
    defecto: '#E6E4E4',
    mouseEncima: '#000000',
    seleccionado: '#4DB4E2',
    btnPrimario: '#004680',
    btnSecundario: '#808080',
    btnExito: '#4DB4E2',
    btnAdvertencia: '#DFA98A',
    btnError: '#FF0909',
    btnOscuro: '#030303',
  });
  const handlerChangeColor = (e) => {
    setColors({
      ...colors,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <Panel header="Barra de Navegación" toggleable className="mt-5">
        <div className="option-color">
          <p>Color fondo</p>
          <input type="color" defaultValue="#E24D4D" />
        </div>
      </Panel>
      <Panel header="Barra de Menú" toggleable className="mt-4">
        <div className="option-color max-width">
          <p>Por defecto</p>
          <input
            name="defecto"
            onChange={handlerChangeColor}
            type="color"
            defaultValue="#E6E4E4"
          />
          <div
            className="option-color-example-item"
            style={{ color: colors.defecto }}
          >
            <i className="pi pi-sitemap"></i>
            <p>Gestión de la organización</p>
            <i className="pi pi-chevron-down"></i>
          </div>
        </div>
        <div className="option-color max-width">
          <p>Mouse encima</p>
          <input
            type="color"
            name="mouseEncima"
            onChange={handlerChangeColor}
            defaultValue="#000000"
          />
          <div
            className="option-color-example-item"
            style={{ color: colors.mouseEncima }}
          >
            <i className="pi pi-sitemap"></i>
            <p>Gestión de la organización</p>
            <i className="pi pi-chevron-down"></i>
          </div>
        </div>
        <div className="option-color max-width">
          <p>Seleccionado</p>
          <input
            type="color"
            name="seleccionado"
            onChange={handlerChangeColor}
            defaultValue="#4DB4E2"
          />
          <div
            className="option-color-example-item flex "
            style={{ color: '#FFF', backgroundColor: colors.seleccionado }}
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
          <input
            type="color"
            name="btnPrimario"
            onChange={handlerChangeColor}
            defaultValue="#004680"
          />
          <Button
            type="button"
            label="Aceptar"
            className="btn btn-primary"
            style={{ backgroundColor: colors.btnPrimario }}
          />
        </div>
        <div className="option-color">
          <p>Secundario</p>
          <input
            type="color"
            name="btnSecundario"
            onChange={handlerChangeColor}
            defaultValue="#808080"
          />
          <Button
            type="button"
            label="Aceptar"
            className="btn btn-primary"
            style={{
              backgroundColor: colors.btnSecundario,
              borderColor: colors.btnSecundario,
            }}
          />
        </div>
        <div className="option-color">
          <p>Exito</p>
          <input
            type="color"
            onChange={handlerChangeColor}
            name="btnExito"
            defaultValue="#4DB4E2"
          />
          <Button
            type="button"
            label="Aceptar"
            className="btn btn-primary"
            style={{
              backgroundColor: colors.btnExito,
              borderColor: colors.btnExito,
            }}
          />
        </div>
        <div className="option-color">
          <p>Advertencia</p>
          <input
            type="color"
            onChange={handlerChangeColor}
            name="btnAdvertencia"
            defaultValue="#DFA98A"
          />
          <Button
            type="button"
            label="Aceptar"
            className="btn btn-primary"
            style={{
              backgroundColor: colors.btnAdvertencia,
              borderColor: colors.btnAdvertencia,
            }}
          />
        </div>
        <div className="option-color">
          <p>Error</p>
          <input
            type="color"
            onChange={handlerChangeColor}
            name="btnError"
            defaultValue="#FF0909"
          />
          <Button
            type="button"
            label="Aceptar"
            className="btn btn-primary"
            style={{
              backgroundColor: colors.btnError,
              borderColor: colors.btnError,
            }}
          />
        </div>
        <div className="option-color">
          <p>Oscuro</p>
          <input
            type="color"
            onChange={handlerChangeColor}
            name="btnOscuro"
            defaultValue="#030303"
          />
          <Button
            type="button"
            label="Aceptar"
            className="btn btn-primary"
            style={{
              backgroundColor: colors.btnOscuro,
              borderColor: colors.btnOscuro,
            }}
          />
        </div>
      </Panel>
      <div className="flex gap-3 justify-end mt-6">
        <Button type="button" label="Cancelar" className="btn btn-secondary" />
        <Button type="button" label="Guardar" className="btn btn-primary" />
      </div>
    </div>
  );
};

export default SistemColorCorporateComponent;
