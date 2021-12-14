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
      type: ConfigurationConstants.Accion.SetRoles.SETLIST,
      payload: { loading, data, currentData, pagination },
    });
};

const getRoles = (fields) => {
  return (dispatch) => {
    dispatch(setRoles({ loading: true }));
    RoleService.getRoles(fields).then(
      ({ data }) => {
        const { results, ...rest } = data.data;

        dispatch(
          setRoles({
            loading: false,
            data: results,
            currentData: results,
            pagination: { ...rest },
          })
        );
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

export const RolesAction = {
  getRoles,
  searchRole,
};
