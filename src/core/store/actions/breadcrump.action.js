const { CoreConstants } = require("core/commons/core.constants");

function setTitlePage(codigoOpcion, opciones, titulo = '') {

    return dispatch => {

        let currentPages = [];
        opciones?.some(c => {
            if (c.codigo === codigoOpcion) {
                currentPages = [c];
                return currentPages;
            }

            const subMenu = c.subMenus.filter(x => x.codigo === codigoOpcion);
            if (subMenu.length === 1) {
                currentPages = [c, subMenu[0]];
                return currentPages;
            }

        });
       
        dispatch({ type: CoreConstants.Accion.Breadcrump.CAMBIAR_TITULO, currentPages });
    };
}
export const breadcrumpAction = {
    setTitlePage
};