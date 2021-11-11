import { PublicoConstants } from "features/publico/commons/publico-constants";

function mostrar() {
    return dispatch => {
        dispatch({ type: PublicoConstants.SeleccionarEmpresaSede.MOSTRAR });
    }
}
function ocultar() {
    return dispatch => {
        dispatch({ type: PublicoConstants.SeleccionarEmpresaSede.OCULTAR });
    }
}

function seleccionar(userInformation) {
    return dispatch => {

        dispatch({ type: PublicoConstants.Login.SUCCESS, userInformation });
    }
}

export const selecEmpresaSedeAction = {
    mostrar, ocultar, seleccionar
};