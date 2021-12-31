import { CoreConstants } from 'core/commons/CoreConstants';

const initialState = {
  toast: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case CoreConstants.Accion.Toast.MOSTRAR_MENSAJE:
      return {
        toast: {
          severity: action.toast.severidad,
          summary: action.toast.titulo,
          detail: action.toast.mensaje,
          life: 5000,
        },
      };
    case CoreConstants.Accion.Toast.OCULTAR_MENSAJE:
      return {
        toast: null,
      };
    default:
      return state;
  }
};
