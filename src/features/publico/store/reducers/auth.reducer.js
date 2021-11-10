import { PublicoConstants } from "features/publico/commons/publico-constants";

const initialState = {
    loading: false,
    loggedIn: false,
    user: {},
};

// function validarSesion() {
//     return false || initialState.loggedIn;
// }
export default (state = initialState, action) => {

    switch (action.type) {

        case PublicoConstants.Login.REQUEST:
            return {
                loading: true,
            }
        case PublicoConstants.Login.FAILURE:
            return {
                loading: true
            }
        case PublicoConstants.Login.SUCCESS:
            
            localStorage.setItem("sig-session", JSON.stringify(action.userInformation))
            return {
                loading: false,
                loggedIn: true,
                user: action.userInformation
            }
        default: {
            return state;
        }
    }


};