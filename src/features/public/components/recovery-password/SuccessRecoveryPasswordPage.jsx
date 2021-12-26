import { useDispatch,useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
// import 'shared/styles/components/modals.scss';
import './SuccessRecoveryPasswordPage.scss'
import { CoreConstants } from 'core/commons/CoreConstants';
import { useHistory } from 'react-router';

const SuccessRecoveryPasswordPage = ({ isOpen }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const onHide = () => {
    dispatch({type:CoreConstants.Accion.FeedBack.OCULTAR_MENSAJE  });
  };

  const redirectTo=()=>{
    history.push("/seguridad/inicio-sesion")
    onHide()
  }

  const feedback=useSelector(state=>state.FeedBackReducer.feedBack)
  return (
    feedback !== null &&
    
    <Dialog
      visible={isOpen}
      onHide={onHide}
      style={{ width: '24vw' }}
      className="modal-custom"
      breakpoints={{ '1200px': '45vw', '640px': '80vw' }}
    >
      <div className="modal-content">
        <h1>{feedback.titulo}</h1>
        <p>{feedback.mensaje}</p>
        <div className="actions">
          <Button onClick={redirectTo} label={feedback.btnText} className="btn btn-dark btn-block" />
        </div>
      </div>
   
    </Dialog>
  );
};

SuccessRecoveryPasswordPage.defaultProps = {
  isOpen: false,
};

SuccessRecoveryPasswordPage.propTypes = {
  isOpen: PropTypes.bool,
};

export default SuccessRecoveryPasswordPage;
