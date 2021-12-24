import { ConfigurationConstants } from 'features/configuration/commons/ConfigurationConstants';
const initialState = {
  users: {
    currentData: [],
    data: [],
    loading: false,
    pagination: {},
    currentCol: 'firstName',
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
    default:
      return state;
  }
};
