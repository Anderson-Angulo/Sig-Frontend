import { ConfigurationConstants } from 'features/configuration/commons/ConfigurationConstants';

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
