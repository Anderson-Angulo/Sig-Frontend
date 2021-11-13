// const { CoreConstants } = require("core/commons/core.constants");

// function success(title, message) {
//     return dispatch => {
//         const toast = getToast('success', title, message);
//         dispatch({ type: CoreConstants.Accion.Toast.MOSTRAR_MENSAJE, toast });
//     }
// }
// function warn(title, message) {
//     return dispatch => {
//         const toast = getToast('warn', title, message);
//         dispatch({ type: CoreConstants.Accion.Toast.MOSTRAR_MENSAJE, toast });
//     }
// }
// function info(title, message) {
//     return dispatch => {
//         const toast = getToast('info', title, message);
//         dispatch({ type: CoreConstants.Accion.Toast.MOSTRAR_MENSAJE, toast });
//     }
// }
// function error(title, message) {
//     debugger;
//     return dispatch => {
//         const toast = getToast('error', title, message);
//         dispatch({ type: CoreConstants.Accion.Toast.MOSTRAR_MENSAJE, toast });
//     }
// }

// export const toastAction = {
//     success,
//     warn,
//     info,
//     error
// };

// function getToast(severty, title, message) {
//     return {
//         severity: severty,
//         summary: title,
//         detail: message,
//         life: 5000
//     };
// }