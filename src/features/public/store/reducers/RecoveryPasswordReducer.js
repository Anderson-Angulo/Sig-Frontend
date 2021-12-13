import { PublicoConstants } from 'features/public/commons/publico-constants';

const initialState = {
  mostrarRecuperarContrasena: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PublicoConstants.Accion.RecuperapContrasena.MOSTRAR:
      return {
        mostrarRecuperarContrasena: true,
      };
    case PublicoConstants.Accion.RecuperapContrasena.OCULTAR:
      return {
        mostrarRecuperarContrasena: false,
      };

    default:
      return state;
  }
};
