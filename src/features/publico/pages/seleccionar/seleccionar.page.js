import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';

const SeleccionarPage = ({ isOpen }) => {
  const empresas = [
    { empresa: 'Empresa 1' },
    { empresa: 'Empresa 2' },
    { empresa: 'Empresa 3' },
  ];

  const roles = [{ rol: 'Rol 1' }, { rol: 'Rol 2' }, { rol: 'Rol 3' }];

  return (
    <Dialog
      visible={isOpen}
      /*      
      onHide={onHide} */
      style={{ width: '24vw' }}
      className="modal-custom"
      breakpoints={{ '1200px': '45vw', '640px': '80vw' }}
    >
      <div className="form-modal">
        <header className="header">
          <div className="title">
            <h3 className="mb-2 font-bold">SELECCIONE</h3>
          </div>
        </header>

        <div className="fields flex flex-col gap-4 mt-4">
          <Dropdown
            options={empresas}
            optionLabel="empresa"
            filter
            showClear
            filterBy="empresa"
            className="w-full"
            placeholder="Seleccione una empresa"
          />
          <Dropdown
            options={roles}
            optionLabel="rol"
            filter
            showClear
            filterBy="rol"
            className="w-full"
            placeholder="Seleccione un rol"
          />
        </div>

        <div className="flex gap-2 mt-6 justify-center">
          <Button label="Cancelar" className="btn btn-secondary" />
          <Button label="Continuar" className="btn btn-primary" />
        </div>
      </div>
    </Dialog>
  );
};

export default SeleccionarPage;
