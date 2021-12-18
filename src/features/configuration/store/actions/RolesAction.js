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

const setUserRoleById = (payload) => {
  return (dispatch) => {
    dispatch({
      type: ConfigurationConstants.Accion.Roles.GET_USER_BY_ROLE_ID,
      payload,
    });
  };
};

const getUserByRoleId = (id) => {
  return (dispatch) => {
    dispatch(setUserRoleById({ loading: true }));
    RoleService.getUserByRoleId(id)
      .then(({ data }) => {
        dispatch(setUserRoleById({ loading: false, data: data.data }));
      })
      .catch(() => {});
  };
};

const setRoleById = (payload) => {
  return (dispatch) => {
    dispatch({
      type: ConfigurationConstants.Accion.Roles.EDIT_ROLE,
      payload,
    });
  };
};

const getRoleById = (roleId) => {
  return (dispatch) => {
    dispatch(setRoleById({ loading: true }));
    RoleService.getRoleById(roleId)
      .then(({ data }) => {
        dispatch(setRoleById({ loading: false, data: data.data }));
      })
      .catch(() => {
        dispatch(setRoleById({ loading: false, data: {} }));
      });
  };
};

const setFilterValues = (payload) => {
  return (dispatch, getState) => {
    let { values } = getState().roleReducer.filterRole;
    if (values.length > 0) {
      const fields = payload.map(({ field }) => field);
      const removeValues = values.filter((val) => fields.includes(val.field));
      if (removeValues.length > 0) {
        removeValues.forEach(({ field }) => {
          dispatch(removeFilterValues(field));
        });
      }
    }
    dispatch({
      type: ConfigurationConstants.Accion.Roles.SET_FILTER_VALUES,
      payload,
    });
  };
};

const removeFilterValues = (field) => {
  return (dispatch, getState) => {
    let { values } = getState().roleReducer.filterRole;

    let payload = [];
    if (values.length > 0)
      payload = values.filter((val) => val.field !== field);

    dispatch({
      type: ConfigurationConstants.Accion.Roles.REMOVE_FILTER_VALUES,
      payload,
    });
  };
};

const saveRole = (role) => {
  return (dispatch) => {
    RoleService.saveRole(role)
      .then((res) => {
        console.log(res);
      })
      .catch(() => {});
  };
};

export const RolesAction = {
  getRoles,
  toggleModalFilters,
  getRolesOptions,
  getUserByRoleId,
  getRoleById,
  setFilterValues,
  removeFilterValues,
  saveRole,
};
