import { CoreConstants } from 'core/commons/CoreConstants';

const initialState = {
  currentPages: {},
};

const BreadcrumpReducer = (state = initialState, action) => {
  switch (action.type) {
    case CoreConstants.Accion.Breadcrump.CAMBIAR_TITULO:
      return { currentPages: action.payload };
    default:
      return state;
  }
};

export default BreadcrumpReducer;
