import { PublicConstants } from 'features/public/commons/PublicConstants';

const initialState = {
  loading: false,
  mostrarSeleccionarEmpresaSede: false,
  emailUser: null,
  passwordUser: null,
  user: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case PublicConstants.Accion.SelecEmpresaSede.MOSTRAR:
      return {
        loading: false,
        mostrarSeleccionarEmpresaSede: true,
        emailUser: action.email,
        passwordUser: action.password,
        user: action.userInformation,
      };
    case PublicConstants.Accion.SelecEmpresaSede.OCULTAR:
      return {
        loading: false,
        mostrarSeleccionarEmpresaSede: false,
        emailUser: null,
        passwordUser: null,
        user: null,
      };
    case PublicConstants.Accion.SelecEmpresaSede.REQUEST:
      return { ...state, loading: true };
    case PublicConstants.Accion.SelecEmpresaSede.FAILURE:
      return { ...state, loading: false };
    case PublicConstants.Accion.SelecEmpresaSede.SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default AuthReducer
