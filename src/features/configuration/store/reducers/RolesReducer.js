import { ConfigurationConstants } from 'features/configuration/commons/ConfigurationConstants';

const initialState = {
  roles: {
    currentData: [],
    data: [],
    loading: false,
    pagination: {},
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ConfigurationConstants.Accion.SetRoles.SETLIST:
      return {
        roles: {
          data: action.payload.data,
          currentData: action.payload.currentData,
          loading: action.payload.loading,
          pagination: action.payload.pagination,
        },
      };

    default:
      return state;
  }
};
