import { ConfigurationConstants } from 'features/configuration/commons/ConfigurationConstants';

const initialState = {
  roles: {
    data: [],
    loading: false,
    pagination: {},
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ConfigurationConstants.Accion.SetRoles.SETLIST:
      debugger;
      return {
        roles: {
          data: action.payload.data,
          loading: action.payload.loading,
          pagination: action.payload.pagination,
        },
      };

    default:
      return state;
  }
};
