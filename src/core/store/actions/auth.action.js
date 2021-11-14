import { CoreConstants } from "core/commons/core.constants";
import { authService } from "core/services/auth.service";
import { PublicoConstants } from "features/publico/commons/publico-constants";

function login(email, password) {

    return dispatch => {

        dispatch({ type: CoreConstants.Accion.Login.REQUEST });
        authService.login(email, password)
            .then(
                model => { evaluarLogin(dispatch, model, email, password); },
                error => { dispatch({ type: CoreConstants.Accion.Login.FAILURE, error }); }
            );
    };
}

function ocultarCargando() {

    return dispatch => {

        dispatch({ type: CoreConstants.Accion.Login.DONE });
    };
}

function validarSesion() {
    return dispatch => {
        const userInformation = JSON.parse(localStorage.getItem('sig-session'));
        if (userInformation != null)
            dispatch({ type: CoreConstants.Accion.Login.SUCCESS, userInformation });

    };
}


function evaluarLogin(dispatch, model, email, password) {
    switch (model.data.status) {
        case CoreConstants.HttpResponse.OK:
            const userInformation = model.data.data;
            console.log(userInformation);

            if (userInformation.empresas.length > 1)
                dispatch({ type: PublicoConstants.Accion.SelecEmpresaSede.MOSTRAR, userInformation, email, password });
            else if (userInformation.empresas[0].sedes.length > 1)
                dispatch({ type: PublicoConstants.Accion.SelecEmpresaSede.MOSTRAR, userInformation, email, password });
            else {
                debugger;
                dispatch({ type: PublicoConstants.Accion.Login.SUCCESS, userInformation });
            }

            dispatch({ type: CoreConstants.Accion.Login.DONE });

            break;
        case CoreConstants.HttpResponse.ERROR_FUNTIONAL:
            dispatch({
                type: CoreConstants.Accion.Toast.MOSTRAR_MENSAJE,
                toast: { titulo: 'Autencicación', mensaje: 'Las credenciales ingresadas son incorrectas', severidad: 'warn' }
            });
            break;
        default:
            if (model.data.status > 1)
                dispatch({
                    type: CoreConstants.Accion.Toast.MOSTRAR_MENSAJE,
                    toast: { titulo: 'Autencicación', mensaje: model.data.message, severidad: 'warn' }
                });
            break;
    }
}

export const authAction = {
    login,
    validarSesion,
    ocultarCargando
};