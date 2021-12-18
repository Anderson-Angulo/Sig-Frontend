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
  userByRoleId: {
    loading: false,
    data: [],
  },
  editRole: {
    loading: false,
    data: [],
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

    case ConfigurationConstants.Accion.Roles.GET_USER_BY_ROLE_ID:
      return {
        ...state,
        userByRoleId: {
          ...state.userByRoleId,
          ...action.payload,
        },
      };

    case ConfigurationConstants.Accion.Roles.EDIT_ROLE:
      return {
        ...state,
        editRole: {
          ...state.editRole,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};
