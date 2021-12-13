const { CoreConstants } = require("core/commons/core.constants");

function success(title, message) {
    // return dispatch => {
    //     const toast = getToast('success', title, message);
    //     dispatch({ type: CoreConstants.Accion.Toast.MOSTRAR_MENSAJE, toast });
    // }
    return dispatch => {
        dispatch({
            type: CoreConstants.Accion.Toast.MOSTRAR_MENSAJE,
            toast: { titulo: title, mensaje: message, severidad: 'success' }
        });
    }
}
function warn(title, message) {
    // debugger;
    // return dispatch => {
    //     const toast = getToast('warn', title, message);
    //     dispatch({ type: CoreConstants.Accion.Toast.MOSTRAR_MENSAJE, toast });
    // }
    return dispatch => {
        dispatch({
            type: CoreConstants.Accion.Toast.MOSTRAR_MENSAJE,
            toast: { titulo: title, mensaje: message, severidad: 'warn' }
        });
    }
}
function info(title, message) {
    // return dispatch => {
    //     const toast = getToast('info', title, message);
    //     dispatch({ type: CoreConstants.Accion.Toast.MOSTRAR_MENSAJE, toast });
    // }
    return dispatch => {
        dispatch({
            type: CoreConstants.Accion.Toast.MOSTRAR_MENSAJE,
            toast: { titulo: title, mensaje: message, severidad: 'info' }
        });
    }
}
function error(title, message) {
    // debugger;
    // return dispatch => {
    //     const toast = getToast('error', title, message);
    //     dispatch({ type: CoreConstants.Accion.Toast.MOSTRAR_MENSAJE, toast });
    // }
    return dispatch => {
        dispatch({
            type: CoreConstants.Accion.Toast.MOSTRAR_MENSAJE,
            toast: { titulo: title, mensaje: message, severidad: 'error' }
        });
    }
}

export const toastAction = {
    success,
    warn,
    info,
    error
};

// function getToast(severty, title, message) {
//     return {
//         severity: severty,
//         summary: title,
//         detail: message,
//         life: 5000
//     };
// }