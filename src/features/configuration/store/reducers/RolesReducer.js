import { ConfigurationConstants } from 'features/configuration/commons/ConfigurationConstants';

const initialState = {
  roles: {
    currentData: [],
    data: [],
    loading: false,
    pagination: {},
  },
  filterRole: {
    showModal: false,
    disabledBtn: true,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ConfigurationConstants.Accion.Roles.SETLIST:
      return {
        ...state,
        roles: {
          data: action.payload.data,
          currentData: action.payload.currentData,
          loading: action.payload.loading,
          pagination: action.payload.pagination,
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

    default:
      return state;
  }
};
