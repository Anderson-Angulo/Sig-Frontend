import {useRef} from "react"
import { useDispatch,useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { RecoveryPasswordAction } from 'features/public/store/actions/RecoveryPasswordAction';
import 'shared/styles/components/modals.scss';

const RecoveryPasswordPage = ({ isOpen }) => {
  const dispatch = useDispatch();
  const emailRef=useRef("")
  const loading=useSelector((state) => state.RecoveryPasswordReducer.loading);
  
  const handlerRequestRecoveryPassword=(email)=>{
    dispatch(RecoveryPasswordAction.solicitarRecuperacionContrasena(email))
  }

  const onHide = () => {
    dispatch(RecoveryPasswordAction.ocultar());
  };

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
            <InputText id="email" ref={emailRef} name="email" />
            <label htmlFor="email">Usuario</label>
          </span>
        </div>

        <div className="actions">
          <Button loading={loading} onClick={()=>handlerRequestRecoveryPassword(emailRef.current.value)} label="Recuperar contraseña" className="btn btn-primary" />
        </div>
      </div>
    </Dialog>
  );
};

RecoveryPasswordPage.defaultProps = {
  isOpen: true,
};

RecoveryPasswordPage.propTypes = {
  isOpen: PropTypes.bool,
};

export default RecoveryPasswordPage;
