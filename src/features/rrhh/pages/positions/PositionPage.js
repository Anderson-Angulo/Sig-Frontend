import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

const PositionPage = ({ title = 'NUEVO CARGO' }) => {
  return (
    <div className="bg-white p-8  rounded-md shadow-md">
      <form className="form-custom p-0" onSubmit={null}>
        <Panel header={title} toggleable>
          <div className="mb-6 w-2/5 mt-5">
            <span className="p-float-label w-full">
              <InputText
                type="text"
                id="position_name"
                value={null}
                onChange={null}
                className=''
              />
              <label htmlFor="rol_name">Nombre del cargo*</label>
            </span>
          </div>
          <div className="mb-6 w-4/5 mt-5">
            <span className="p-float-label w-full">
              <InputText
                type="text"
                id="position_name"
                value={null}
                onChange={null}
                className=''
              />
              <label htmlFor="position_name">Descripción*</label>
            </span>
          </div>
          <div className="mb-6 w-4/5 mt-5">
            <span className="p-float-label w-full">
              <InputNumber 
                id="employees_quantity" 
                value={null} 
                onValueChange={null} 
                className=''/>
              <label htmlFor="employees_quantity">Nro. Empleados*</label>
            </span>
          </div>
          <div className="flex justify-end gap-4 mt-3">
            <Button
              icon="pi pi-times"
              type="button"
              label="Cancelar"
              onClick={null}
              className="btn btn-secondary mt-4"
            />
            <Button
              icon="pi pi-save"
              type="submit"
              label="Guardar"
              className="btn btn-primary mt-4"
            />
          </div>
        </Panel>
      </form>
    </div>
  )
};

export default PositionPage;
