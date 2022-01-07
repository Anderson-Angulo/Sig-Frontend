import { ConfigurationConstants } from 'features/configuration/commons/ConfigurationConstants';

const initialState = {
  roles: {
    currentData: [],
    data: [],
    loading: false,
    pagination: {},
    currentCol: 'roleName',
    order: 'asc',
  },
  filterRole: {
    showModal: false,
    disabledBtn: true,
    values: [],
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
    data: {},
  },
  saveRole: {
    status: null,
  },
  deleteRoleModal: {
    isOpen: false,
    roleId: '',
    isLoading: false,
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
    case ConfigurationConstants.Accion.Roles.SET_FILTER_VALUES:
      return {
        ...state,
        filterRole: {
          ...state.filterRole,
          values: [...state.filterRole.values, ...action.payload],
        },
      };
    case ConfigurationConstants.Accion.Roles.REMOVE_FILTER_VALUES:
      return {
        ...state,
        filterRole: {
          ...state.filterRole,
          values: [...action.payload],
        },
      };
    case ConfigurationConstants.Accion.Roles.SAVE_ROLE_STATUS:
      return {
        ...state,
        saveRole: action.payload,
      };
    case ConfigurationConstants.Accion.Roles.SHOW_DELETE_ROLE_MODAL:
      return {
        ...state,
        deleteRoleModal: {
          ...state.deleteRoleModal,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};
