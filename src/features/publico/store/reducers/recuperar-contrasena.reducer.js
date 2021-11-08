import { PublicoConstants } from "features/publico/commons/publico-constants";

const initialState = {
    mostrarRecuperarContrasena: false,

};

export default (state = initialState, action) => {

    switch (action.type) {

        case PublicoConstants.RecuperapContrasena.MOSTRAR:
            return {
                mostrarRecuperarContrasena: true
            }
        case PublicoConstants.RecuperapContrasena.OCULTAR:
            return {
                mostrarRecuperarContrasena: false
            }

        default:
            return state;
            break;

    }
}