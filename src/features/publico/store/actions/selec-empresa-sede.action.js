import { CoreConstants } from 'core/commons/core.constants';
import { PublicoConstants } from 'features/publico/commons/publico-constants';
import { usuarioService } from 'features/publico/services/usuario.service';

function mostrar() {
  return (dispatch) => {
    dispatch({ type: PublicoConstants.Accion.SelecEmpresaSede.MOSTRAR });
  };
}
function ocultar() {
  return (dispatch) => {
    dispatch({ type: PublicoConstants.Accion.SelecEmpresaSede.OCULTAR });
  };
}

function seleccionar(userInformation, email, password) {
  return (dispatch) => {
    dispatch({ type: PublicoConstants.Accion.SelecEmpresaSede.REQUEST });
    usuarioService
      .selecEmpresaSede(
        email,
        password,
        userInformation.empresaId,
        userInformation.sedeId
      )
      .then(
        (model) => {
          dispatch({
            type: PublicoConstants.Accion.SelecEmpresaSede.OCULTAR,
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
            type: PublicoConstants.Accion.SelecEmpresaSede.FAILURE,
            error,
          });
        }
      );
  };
}

export const selecEmpresaSedeAction = {
  mostrar,
  ocultar,
  seleccionar,
};
