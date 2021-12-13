const { CoreConstants } = require('core/commons/CoreConstants');

function setTitlePage(codigoOpcion, items, titulo = '') {
  return (dispatch) => {
    let currentPages = [];

    currentPages = items.map((item) => {
      if (item.codigo === codigoOpcion) return item;
      const subMenu = item.subMenus.filter(
        (subItem) => subItem.codigo === codigoOpcion
      );
      if (subMenu.length === 1) return [item, subMenu[0]];
    })[0];

    dispatch({
      type: CoreConstants.Accion.Breadcrump.CAMBIAR_TITULO,
      currentPages,
    });
  };
}
export const BreadcrumpAction = {
  setTitlePage,
};
