import { CoreConstants } from "core/commons/core.constants";
import { PublicoConstants } from "features/publico/commons/publico-constants";

const initialState = {
    loading: false,
    loggedIn: false,
    user: {},
    mensaje: null
};

export default (state = initialState, action) => {

    switch (action.type) {

        case CoreConstants.Accion.Login.REQUEST:
            return {
                loading: true,
                loggedIn: false,
            }
        case CoreConstants.Accion.Login.FAILURE:
            return {
                loggedIn: false,
                loading: false
            }
        case CoreConstants.Accion.Login.SUCCESS:

            const userInformation = action.userInformation;
            let response = {
                loading: false,
                loggedIn: true,
                user: userInformation
            };

            localStorage.setItem("sig-session", JSON.stringify(userInformation));

            return response;
        case CoreConstants.Accion.Login.DONE:
            return { loading: false }

        case CoreConstants.Accion.Login.LOGOUT:
            localStorage.removeItem("sig-session");
            return {
                loading: false,
                loggedIn: false,
                user: {},
                mensaje: null
            }

        default: {
            return state;
        }
    }


};