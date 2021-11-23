import { ConfigurationConstants } from 'features/configuracion/commons/configuration-constants';

const toggle = (isOpen) => {
  return (dispatch) => {
    dispatch({
      type: ConfigurationConstants.Accion.ToggleSidebar.TOGGLE,
      payload: isOpen,
    });
  };
};

export const toggleSidebar = {
  toggle,
};
