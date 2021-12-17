import { ConfigurationConstants } from 'features/configuration/commons/ConfigurationConstants';
import { RoleService } from 'features/configuration/services/RoleService';

const setRoles = ({
  loading = true,
  data = [],
  currentData = [],
  pagination = {},
}) => {
  return (dispatch) =>
    dispatch({
      type: ConfigurationConstants.Accion.Roles.SETLIST,
      payload: { loading, data, currentData, pagination },
    });
};

const toggleModalFilters = (payload) => {
  return (dispatch) =>
    dispatch({
      type: ConfigurationConstants.Accion.Roles.CHANGEFILTERMODAL,
      payload,
    });
};

const getRoles = (fields) => {
  return (dispatch) => {
    dispatch(setRoles({ loading: true }));
    RoleService.getRoles(fields).then(
      ({ data }) => {
        const { results, ...rest } = data.data;

        let objFields = {
          loading: false,
          data: results,
          currentData: results,
          pagination: { ...rest },
        };

        if (fields.columnOrder) objFields.currentCol = fields.columnOrder;
        dispatch(setRoles(objFields));
      },
      () => dispatch(setRoles({ loading: false }))
    );
  };
};

const searchRole = (value) => {
  return (dispatch, getState) => {
    let { pagination, data, currentData } = getState().roleReducer.roles;
    const loading = false;

    if (value.length > 2) {
      data = currentData.filter(({ roleName }) =>
        roleName.toLowerCase().includes(value.trim().toLowerCase())
      );
      dispatch(setRoles({ loading, data, pagination, currentData }));
      return;
    }
    dispatch(setRoles({ loading, data: currentData, currentData, pagination }));
  };
};

const setRolesOptions = (payload) => {
  /* payload: { loading, options } */
  return (dispatch) => {
    dispatch({
      type: ConfigurationConstants.Accion.Roles.LISTOPTIONS,
      payload,
    });
  };
};

const getRolesOptions = () => {
  return (dispatch) => {
    dispatch(setRolesOptions({ loading: true }));
    RoleService.getRolesOptions()
      .then(({ data }) => {
        dispatch(setRolesOptions({ loading: false, options: data.data }));
      })
      .catch(() => {});
  };
};

export const RolesAction = {
  getRoles,
  searchRole,
  toggleModalFilters,
  getRolesOptions,
};
