import { ConfigurationConstants } from 'features/configuration/commons/ConfigurationConstants';

const initialState = {
  isOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ConfigurationConstants.Accion.ToggleSidebar.TOGGLE:
      return {
        isOpen: action.payload,
      };

    default:
      return state;
  }
};
