import { PublicConstants } from 'features/public/commons/PublicConstants';

function mostrar() {
  return (dispatch) => {
    dispatch({ type: PublicConstants.Accion.RecuperapContrasena.MOSTRAR });
  };
}

function ocultar() {
  return (dispatch) => {
    dispatch({ type: PublicConstants.Accion.RecuperapContrasena.OCULTAR });
  };
}

export const RecoveryPasswordAction = {
  mostrar,
  ocultar,
};
