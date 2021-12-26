import { PublicConstants } from 'features/public/commons/PublicConstants';
import {CoreConstants} from 'core/commons/CoreConstants'
import {userService} from "features/public/services/UserService"
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

function solicitarRecuperacionContrasena(email) {
  return (dispatch) => {
    dispatch({type:PublicConstants.Accion.RecuperapContrasena.REQUEST})
    userService.solicitarRecuperarContrasena(email).then(
      (model) => {
        evaluarErrores(dispatch,model)
        evaluarSolitudRecuperarContrasena(dispatch, model);
      },
    );
  };
}

function recuperarContrasena(token,newPassword){
  return dispatch=>{
    userService.recuperarContrasena(token,newPassword).then(model=>{
      console.log(model.data)
      evaluarErrores(dispatch,model)
      evaluarRecuperarContrasena(dispatch,model)
    })
  }
}

function evaluarErrores(dispatch,model){
      if(model.data.status === CoreConstants.HttpResponse.ERROR_FUNTIONAL) {
          return dispatch({
          type: CoreConstants.Accion.Toast.MOSTRAR_MENSAJE,
          toast: {
            titulo: 'Nueva Contraseña',
            mensaje: model.data.message,
            severidad: 'warn',
          },
        });
      }
      else if(model.data.status === CoreConstants.HttpResponse.ERROR_TECHNICAL){
        return dispatch({
          type: CoreConstants.Accion.Toast.MOSTRAR_MENSAJE,
          toast: {
            titulo: 'Nueva Contraseña',
            mensaje: model.data.message,
            severidad: 'danger',
          },
        });
      }
  dispatch({ type: PublicConstants.Accion.RecuperapContrasena.DONE });
}

function evaluarRecuperarContrasena(dispatch,model){
  if(model.data.status===CoreConstants.HttpResponse.OK){
      dispatch({ type: PublicConstants.Accion.RecuperapContrasena.OCULTAR})
      dispatch({
        type: CoreConstants.Accion.FeedBack.MOSTRAR_MENSAJE,
        feedBack: {
          titulo: 'CONTRASEÑA CAMBIADA',
          mensaje: 'Tu contraseña ha sido cambiada,tendrás que iniciar sesión nuevamente con la nueva contraseña.',
          // severidad: 'success',
          btnText:"Aceptar"
        },
      });
  }
}


function evaluarSolitudRecuperarContrasena(dispatch, model) {
 if(model.data.status===CoreConstants.HttpResponse.OK){
      dispatch({ type: PublicConstants.Accion.RecuperapContrasena.OCULTAR})
      dispatch({
        type: CoreConstants.Accion.FeedBack.MOSTRAR_MENSAJE,
        feedBack: {
          titulo: 'SOLICITUD ENVIADA',
          mensaje: 'En breve, recibirás un correo con los pasos para restablecer contraseña.',
          // severidad: 'success',
          btnText:"Iniciar Sesión"
        },
      });
    }
}

export const RecoveryPasswordAction = {
  mostrar,
  ocultar,
  solicitarRecuperacionContrasena,
  recuperarContrasena
};
