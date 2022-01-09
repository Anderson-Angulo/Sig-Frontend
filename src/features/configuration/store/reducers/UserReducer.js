import { ConfigurationConstants } from 'features/configuration/commons/ConfigurationConstants';
const initialState = {
  users: {
    currentData: [],
    data: [],
    loading: false,
    pagination: {},
    currentCol: 'firstName',
  },
  filteredUsers:{
    showModal: false,
    disabledBtn: true,
    values: [],
  },
  editUser: {
    loading: false,
    data: {},
  },
  dataManager: {
    loading: false,
    data: {
      roles: [],
      status: [],
      company: [],
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ConfigurationConstants.Accion.Users.SET_LIST:
      return {
        ...state,
        users: {
          ...state.users,
          ...action.payload,
        },
      };
    case ConfigurationConstants.Accion.Users.SET_FILTER_VALUES:
      return {
        ...state,
        filteredUsers: {
          ...state.filteredUsers,
          ...action.payload,
        },
      };
    case ConfigurationConstants.Accion.Users.GET_DATA_MASTER:
      return {
        ...state,
        dataManager: {
          ...state.dataManager,
          data: { ...action.payload },
        },
      };
    case ConfigurationConstants.Accion.Users.GET_USER:
      return {
        ...state,
        editUser: {
          ...state.editUser,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
