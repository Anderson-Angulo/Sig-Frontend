import { PublicoConstants } from "features/publico/commons/publico-constants";

const initialState = {
    loggedIn: false,
    user: {},
};

export default (state = initialState, action) => {

    switch (action.type) {

        case PublicoConstants.Login.REQUEST:
            return {
                loggedIn: true
            }
        case PublicoConstants.Login.FAILURE:
            return {
                loggedIn: false
            }
        case PublicoConstants.Login.SUCCESS:
            return {
                loggedIn: false,
                user: action.user
            }
        default: {
            return state;
        }
    }


};