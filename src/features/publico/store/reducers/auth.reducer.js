import { PublicoConstants } from "features/publico/commons/publico-constants";

const initialState = {
    loading: false,
    loggedIn: false,
    user: {},
    mensaje: null
};

export default (state = initialState, action) => {

    switch (action.type) {

        case PublicoConstants.Accion.Login.REQUEST:
            return {
                loading: true,
                loggedIn: false,
            }
        case PublicoConstants.Accion.Login.FAILURE:
            return {
                loggedIn: false,
                loading: false
            }
        case PublicoConstants.Accion.Login.SUCCESS:
            const userInformation = action.userInformation;
            let response = {
                loading: false,
                loggedIn: true,
                user: userInformation
            };
            if (userInformation?.empresas && (userInformation.empresas.length > 1 || userInformation.empresas[0].sedes.length > 1)) {
                userInformation.empresaId = userInformation.empresas[0].id;
                userInformation.sedeId = userInformation.empresas[0].sedes[0].id;
                localStorage.setItem("sig-session", JSON.stringify(userInformation));
                response.loggedIn = false;
            }

            return response;
        default: {
            return state;
        }
    }


};