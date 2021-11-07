import PropTypes from 'prop-types';

import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'shared/styles/components/modales.scss';

const ModalRecuperarContrasenaComponent = ({ isOpen }) => {
  const onHide = () => {};
  return (
    <Dialog
      visible={isOpen}
      onHide={onHide}
      style={{ width: '24vw' }}
      className="modal-custom"
      breakpoints={{ '1200px': '45vw', '640px': '80vw' }}
    >
      <div className="form-modal">
        <header className="header">
          <div className="title">
            <h3 className="mb-2 font-bold">OLVIDÉ MI CONTRASEÑA</h3>
          </div>
          <div className="description text-left">
            <p className="text-sm">
              Ingresa tu correo electrónico y te enviaremos los pasos para
              proceder con el cambio de tu contraseña.
            </p>
          </div>
        </header>

        <div className="fields">
          <span className="p-float-label p-input-icon-right field w-full">
            <i className="pi pi-user" />
            <InputText id="email" name="email" />
            <label htmlFor="email">Usuario</label>
          </span>
        </div>

        <div className="actions">
          <Button label="Recuperar contraseña" className="btn btn-primary" />
        </div>
      </div>
    </Dialog>
  );
};

ModalRecuperarContrasenaComponent.defaultProps = {
  isOpen: true,
};

ModalRecuperarContrasenaComponent.propTypes = {
  isOpen: PropTypes.bool,
};

export default ModalRecuperarContrasenaComponent;
