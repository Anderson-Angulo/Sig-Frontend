import { PublicoConstants } from "features/publico/commons/publico-constants";

function mostrar() {
    return dispatch => {
        dispatch({ type: PublicoConstants.Accion.RecuperapContrasena.MOSTRAR });
    }
}
function ocultar() {
    return dispatch => {
        dispatch({ type: PublicoConstants.Accion.RecuperapContrasena.OCULTAR });
    }
}

export const recuperarContrasenaAction = {
    mostrar, ocultar
};