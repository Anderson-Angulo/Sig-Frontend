import { CoreConstants } from "core/commons/core.constants";
import { PublicoConstants } from "features/publico/commons/publico-constants";
const { authService } = require("features/publico/services/auth.service");

function mostrar() {
    return dispatch => {
        dispatch({ type: PublicoConstants.Accion.SelecEmpresaSede.MOSTRAR });
    }
}
function ocultar() {
    return dispatch => {
        dispatch({ type: PublicoConstants.Accion.SelecEmpresaSede.OCULTAR });
    }
}

function seleccionar(userInformation, email, password) {
    return dispatch => {
        dispatch({ type: PublicoConstants.Accion.SelecEmpresaSede.REQUEST });
        authService.selecEmpresaSede(email, password, userInformation.empresaId, userInformation.sedeId)
            .then(
                model => {
                    switch (model.data.status) {
                        case CoreConstants.HttpResponse.OK:
                            dispatch({ type: PublicoConstants.Accion.Login.SUCCESS, userInformation });
                            break;
                        default:

                            break;
                    }
                },
                error => {
                    dispatch({ type: PublicoConstants.SeleccionarEmpresaSede.FAILURE, error });
                }
            );

        dispatch({ type: PublicoConstants.Login.SUCCESS, userInformation });
    }
}

export const selecEmpresaSedeAction = {
    mostrar, ocultar, seleccionar
};