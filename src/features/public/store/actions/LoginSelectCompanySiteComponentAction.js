import { CoreConstants } from 'core/commons/CoreConstants';
import { PublicConstants } from 'features/public/commons/PublicConstants';
import { userService } from 'features/public/services/UserService';

function mostrar() {
  return (dispatch) => {
    dispatch({ type: PublicConstants.Accion.SelecEmpresaSede.MOSTRAR });
  };
}
function ocultar() {
  return (dispatch) => {
    dispatch({ type: PublicConstants.Accion.SelecEmpresaSede.OCULTAR });
  };
}

function seleccionar(userInformation, email, password) {
  return (dispatch) => {
    dispatch({ type: PublicConstants.Accion.SelecEmpresaSede.REQUEST });
    userService
      .selecEmpresaSede(
        email,
        password,
        userInformation.empresaId,
        userInformation.sedeId
      )
      .then(
        (model) => {
          dispatch({
            type: PublicConstants.Accion.SelecEmpresaSede.OCULTAR,
          });
          switch (model.data.status) {
            case CoreConstants.HttpResponse.OK:
              const userInformation = model.data.data;
              dispatch({
                type: CoreConstants.Accion.Login.SUCCESS,
                userInformation,
              });
              break;
            case CoreConstants.HttpResponse.ERROR_FUNTIONAL:
              dispatch({
                type: CoreConstants.Accion.Toast.MOSTRAR_MENSAJE,
                toast: {
                  titulo: 'Autencicación',
                  mensaje: 'Las credenciales ingresadas son incorrectas',
                  severidad: 'warn',
                },
              });
              break;
            default:
              if (model.data.status > 1)
                dispatch({
                  type: CoreConstants.Accion.Toast.MOSTRAR_MENSAJE,
                  toast: {
                    titulo: 'Autencicación',
                    mensaje: model.data.message,
                    severidad: 'warn',
                  },
                });
              break;
          }
        },
        (error) => {
          dispatch({
            type: PublicConstants.Accion.SelecEmpresaSede.FAILURE,
            error,
          });
        }
      );
  };
}

export const LoginSelectCompanySiteComponentAction = {
  mostrar,
  ocultar,
  seleccionar,
};
