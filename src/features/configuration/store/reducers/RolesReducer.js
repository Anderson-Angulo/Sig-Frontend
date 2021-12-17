import { ConfigurationConstants } from 'features/configuration/commons/ConfigurationConstants';

const initialState = {
  roles: {
    currentData: [],
    data: [],
    loading: false,
    pagination: {},
    currentCol: 'roleName',
  },
  filterRole: {
    showModal: false,
    disabledBtn: true,
  },
  rolesOptions: {
    loading: false,
    options: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ConfigurationConstants.Accion.Roles.SETLIST:
      return {
        ...state,
        roles: {
          ...state.roles,
          ...action.payload,
        },
      };

    case ConfigurationConstants.Accion.Roles.CHANGEFILTERMODAL:
      return {
        ...state,
        filterRole: {
          ...state.filterRole,
          ...action.payload,
        },
      };

    case ConfigurationConstants.Accion.Roles.LISTOPTIONS:
      return {
        ...state,
        rolesOptions: {
          ...state.rolesOptions,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};
