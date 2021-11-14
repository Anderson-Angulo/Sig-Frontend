import { CoreConstants } from "core/commons/core.constants";

const initialState = {
    currentPages: []
};

export default (state = initialState, action) => {

    switch (action.type) {

        case CoreConstants.Accion.Breadcrump.CAMBIAR_TITULO:
           
            return { currentPages: action.currentPages }
        default:
            return state
    }
}