// import { browserHistory } from 'react-router';

const { PublicoConstants } = require("features/publico/commons/publico-constants");
const { authService } = require("features/publico/services/auth.service");

function login(email, password) {

    return dispatch => {

        dispatch({ type: PublicoConstants.Login.REQUEST });
        authService.login(email, password)
            .then(
                model => {

                    const userInformation = model.data.data;
                    console.log(userInformation);
                    if (userInformation.empresas.length > 1)
                        dispatch({ type: PublicoConstants.SeleccionarEmpresaSede.MOSTRAR, userInformation });
                    if (userInformation.empresas[0].sedes.length > 1)
                        dispatch({ type: PublicoConstants.SeleccionarEmpresaSede.MOSTRAR, userInformation });
                    else
                        dispatch({ type: PublicoConstants.Login.SUCCESS, userInformation });

                    dispatch({ type: PublicoConstants.Login.DONE, userInformation });
                },
                error => {
                    dispatch({ type: PublicoConstants.Login.FAILURE, error });
                }
            );
    };
}

function validarSesion() {
    return dispatch => {
        const userInformation = JSON.parse(localStorage.getItem('sig-session'));
        if (userInformation != null)
            dispatch({ type: PublicoConstants.Login.SUCCESS, userInformation });

    };
}

export const authAction = {
    login,
    validarSesion
};