import { ConfigurationConstants } from 'features/configuration/commons/ConfigurationConstants';
import { UserService } from 'features/configuration/services/UserService';

const setUsers = ({
  loading = true,
  data = [],
  currentData = [],
  pagination = {},
}) => {
  return (dispatch) =>
    dispatch({
      type: ConfigurationConstants.Accion.Users.SET_LIST,
      payload: { loading, data, currentData, pagination },
    });
};

const getUsers = (fields) => {
  return (dispatch) => {
    dispatch(setUsers({ loading: true }));
    UserService.userSearch(fields).then(({ data }) => {
      const { results, ...rest } = data.data;
      let objFields = {
        loading: false,
        data: results,
        currentData: results,
        pagination: { ...rest },
      };
      if (fields.columnOrder) objFields.currentCol = fields.columnOrder;
      dispatch(setUsers(objFields));
    });
    // .catch(dispatch(setUsers({ loading: false })));
  };
};

export const UsersAction = {
  getUsers,
};
