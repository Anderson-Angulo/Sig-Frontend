import { PublicoConstants } from "features/publico/commons/publico-constants";

const initialState = {
    mostrarSeleccionarEmpresaSede: false,

};

export default (state = initialState, action) => {

    switch (action.type) {

        case PublicoConstants.SeleccionarEmpresaSede.MOSTRAR:
 //debugger;
            return {
                mostrarSeleccionarEmpresaSede: true,
                userInformation: action.userInformation
            }
        case PublicoConstants.SeleccionarEmpresaSede.OCULTAR:
            return {
                mostrarSeleccionarEmpresaSede: false
            }        

        default:
            return state;
            break;

    }
}