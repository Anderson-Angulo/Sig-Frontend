import { PublicConstants } from 'features/public/commons/PublicConstants';

const initialState = {
  mostrarRecuperarContrasena: false,
};

const RecoveryPasswordReducer= (state = initialState, action) => {
  switch (action.type) {
    case PublicConstants.Accion.RecuperapContrasena.MOSTRAR:
      return {
        mostrarRecuperarContrasena: true,
      };
    case PublicConstants.Accion.RecuperapContrasena.OCULTAR:
      return {
        mostrarRecuperarContrasena: false,
      };

    default:
      return state;
  }
};

export default RecoveryPasswordReducer;