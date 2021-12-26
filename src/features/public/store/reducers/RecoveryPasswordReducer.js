import { PublicConstants } from 'features/public/commons/PublicConstants';

const initialState = {
  mostrarRecuperarContrasena: false,
  loading:false
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
        loading:false
      };
    case PublicConstants.Accion.RecuperapContrasena.REQUEST:
      return {
        mostrarRecuperarContrasena: true,
        loading:true  
      };
    case PublicConstants.Accion.RecuperapContrasena.DONE:
      return {
        loading:false  
      };

    default:
      return state;
  }
};

export default RecoveryPasswordReducer;