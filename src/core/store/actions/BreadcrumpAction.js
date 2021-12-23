const { CoreConstants } = require('core/commons/CoreConstants');

function setTitlePage(payload = {}) {
  return (dispatch) => {
    dispatch({
      type: CoreConstants.Accion.Breadcrump.CAMBIAR_TITULO,
      payload,
    });
  };
}
export const BreadcrumpAction = {
  setTitlePage,
};
