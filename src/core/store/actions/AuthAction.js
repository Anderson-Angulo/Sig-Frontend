import { CoreConstants } from 'core/commons/CoreConstants';
import { authService } from 'core/services/AuthService';
import { PublicConstants } from 'features/public/commons/PublicConstants';

function login(email, password) {
  return (dispatch) => {
    dispatch({ type: CoreConstants.Accion.Login.REQUEST });
    authService
      .login(email, password)
      .then((model) => {
        evaluarLogin(dispatch, model, email, password);
      })
      .catch((error) => {
        dispatch({ type: CoreConstants.Accion.Login.FAILURE, error });
      });
  };
}

function logout() {
  return (dispatch) => {
    dispatch({ type: CoreConstants.Accion.Login.LOGOUT });
  };
}

function validarSesion() {
  return (dispatch) => {
    const userInformation = JSON.parse(localStorage.getItem('sig-session'));
    const tokenExpiration = new Date(userInformation?.tokenExpiration);
    const currentDate = new Date();
    if (userInformation != null && tokenExpiration > currentDate)
      dispatch({ type: CoreConstants.Accion.Login.SUCCESS, userInformation });
  };
}

function evaluarLogin(dispatch, model, email, password) {
  switch (model.data.status) {
    case CoreConstants.HttpResponse.OK:
      const userInformation = model.data.data;
      if (userInformation.empresas.length > 1)
        dispatch({
          type: PublicConstants.Accion.SelecEmpresaSede.MOSTRAR,
          userInformation,
          email,
          password,
        });
      else if (userInformation.empresas[0].sedes.length > 1)
        dispatch({
          type: PublicConstants.Accion.SelecEmpresaSede.MOSTRAR,
          userInformation,
          email,
          password,
        });
      else
        dispatch({ type: CoreConstants.Accion.Login.SUCCESS, userInformation });

      break;
    case CoreConstants.HttpResponse.ERROR_FUNTIONAL:
      dispatch({
        type: CoreConstants.Accion.Toast.MOSTRAR_MENSAJE,
        toast: {
          titulo: 'Autenticación',
          mensaje: model.data.message,
          severidad: 'warn',
        },
      });

      break;
    default:
      if (model.data.status > 1)
        dispatch({
          type: CoreConstants.Accion.Toast.MOSTRAR_MENSAJE,
          toast: {
            titulo: 'Autenticación',
            mensaje: model.data.message,
            severidad: 'warn',
          },
        });
      break;
  }

  dispatch({ type: CoreConstants.Accion.Login.DONE });
}

export const authAction = {
  login,
  validarSesion,
  logout,
};
