import { PublicoConstants } from 'features/public/commons/publico-constants';

function mostrar() {
  return (dispatch) => {
    dispatch({ type: PublicoConstants.Accion.RecuperapContrasena.MOSTRAR });
  };
}
function ocultar() {
  return (dispatch) => {
    dispatch({ type: PublicoConstants.Accion.RecuperapContrasena.OCULTAR });
  };
}

export const RecoveryPasswordAction = {
  mostrar,
  ocultar,
};
