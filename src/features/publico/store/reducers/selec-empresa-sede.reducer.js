import { PublicoConstants } from "features/publico/commons/publico-constants";

const initialState = {
    mostrarSeleccionarEmpresaSede: false,
    emailUser: null,
    passwordUser: null
};

export default (state = initialState, action) => {

    switch (action.type) {

        case PublicoConstants.Accion.SelecEmpresaSede.MOSTRAR:
            return {
                mostrarSeleccionarEmpresaSede: true,
                emailUser: action.email,
                passwordUser: action.password
            }
        case PublicoConstants.Accion.SelecEmpresaSede.OCULTAR:
            return {
                mostrarSeleccionarEmpresaSede: false,
                emailUser: null,
                passwordUser: null
            }

        default:
            return state;
            break;

    }
}