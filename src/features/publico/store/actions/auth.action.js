import { CoreConstants } from "core/commons/core.constants";

const { PublicoConstants } = require("features/publico/commons/publico-constants");
const { authService } = require("features/publico/services/auth.service");

function login(email, password) {

    return dispatch => {

        dispatch({ type: PublicoConstants.Accion.Login.REQUEST });
        authService.login(email, password)
            .then(
                model => {
                    switch (model.data.status) {
                        case CoreConstants.HttpResponse.OK:
                            const userInformation = model.data.data;
                            console.log(userInformation);
                            
                            if (userInformation.empresas.length > 1)
                                dispatch({ type: PublicoConstants.Accion.SelecEmpresaSede.MOSTRAR, userInformation, email, password });
                            if (userInformation.empresas[0].sedes.length > 1)
                                dispatch({ type: PublicoConstants.Accion.SelecEmpresaSede.MOSTRAR, userInformation, email, password });

                            dispatch({ type: PublicoConstants.Accion.Login.SUCCESS, userInformation });
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


                },
                error => {
                    dispatch({ type: PublicoConstants.Accion.Login.FAILURE, error });
                }
            );
    };
}

function validarSesion() {
    return dispatch => {
        const userInformation = JSON.parse(localStorage.getItem('sig-session'));
        if (userInformation != null)
            dispatch({ type: PublicoConstants.Accion.Login.SUCCESS, userInformation });

    };
}

export const authAction = {
    login,
    validarSesion
};