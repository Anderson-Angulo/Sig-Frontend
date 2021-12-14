import { ConfigurationConstants } from 'features/configuration/commons/ConfigurationConstants';
import { RoleService } from 'features/configuration/services/RoleService';

const setRoles = ({ loading = true, data = [], pagination = {} }) => {
  return (dispatch) =>
    dispatch({
      type: ConfigurationConstants.Accion.SetRoles.SETLIST,
      payload: { loading, data, pagination },
    });
};

const getRoles = (fields) => {
  return (dispatch) => {
    dispatch(setRoles({ loading: true }));
    RoleService.getRoles(fields).then(
      ({ data }) => {
        const { results, ...rest } = data.data;

        dispatch(
          setRoles({ loading: false, data: results, pagination: { ...rest } })
        );
      },
      () => dispatch(setRoles({ loading: false }))
    );
  };
};

export const RolesAction = {
  getRoles,
};
