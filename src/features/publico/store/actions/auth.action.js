// import { browserHistory } from 'react-router';

const { PublicoConstants } = require("features/publico/commons/publico-constants");
const { authService } = require("features/publico/services/auth.service");

function login(email, password) {

    return dispatch => {

        dispatch({ type: PublicoConstants.Login.REQUEST });
        authService.login(email, password)
            .then(
                model => {
                    var userInformation = model.data.data;
                    dispatch({ type: PublicoConstants.Login.SUCCESS, userInformation });
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