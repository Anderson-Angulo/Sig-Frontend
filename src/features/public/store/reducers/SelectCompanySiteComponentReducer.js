import { PublicoConstants } from 'features/public/commons/publico-constants';

const initialState = {
  loading: false,
  mostrarSeleccionarEmpresaSede: false,
  emailUser: null,
  passwordUser: null,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PublicoConstants.Accion.SelecEmpresaSede.MOSTRAR:
      return {
        loading: false,
        mostrarSeleccionarEmpresaSede: true,
        emailUser: action.email,
        passwordUser: action.password,
        user: action.userInformation,
      };
    case PublicoConstants.Accion.SelecEmpresaSede.OCULTAR:
      return {
        loading: false,
        mostrarSeleccionarEmpresaSede: false,
        emailUser: null,
        passwordUser: null,
        user: null,
      };
    case PublicoConstants.Accion.SelecEmpresaSede.REQUEST:
      return { ...state, loading: true };
    case PublicoConstants.Accion.SelecEmpresaSede.FAILURE:
      return { ...state, loading: false };
    case PublicoConstants.Accion.SelecEmpresaSede.SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
};
