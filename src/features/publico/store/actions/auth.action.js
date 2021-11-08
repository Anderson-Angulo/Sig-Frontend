// import { browserHistory } from 'react-router';

const { PublicoConstants } = require("features/publico/commons/publico-constants");
const { authService } = require("features/publico/services/auth.service");

function login(email, password) {

    return dispatch => {

        dispatch({ type: PublicoConstants.Login.REQUEST });
        authService.login(email, password)
            .then(
                model => {

                    dispatch({ type: PublicoConstants.Login.SUCCESS, model });
                    // browserHistory.push("/inicio");
                },
                error => {
                    dispatch({ type: PublicoConstants.Login.FAILURE, error });
                }
            );
    };
}

export const authAction = {
    login
};