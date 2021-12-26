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
  };
};

const setDateMasters = (payload) => {
  return (dispatch) =>
    dispatch({
      type: ConfigurationConstants.Accion.Users.GET_DATA_MASTER,
      payload,
    });
};

const getDataMaster = () => {
  return (dispatch) => {
    dispatch(setDateMasters({ loading: true }));
    UserService.getDataMaster().then(({ data }) => {
      // const { data, ...rest } = data;
      dispatch(setDateMasters({ loading: false, ...data.data }));
      console.log(data);
    });
  };
};

const setUser = (payload) => {
  return (dispatch) => {
    dispatch({
      type: ConfigurationConstants.Accion.Users.GET_USER,
      payload,
    });
  };
};

const getUser = (userId) => {
  return (dispatch) => {
    dispatch(setUser({ loading: true }));
    UserService.getUserById(userId)
      .then(({ data }) => {
        dispatch(setUser({ loading: false, data: data.data }));
        // console.log({ loading: false,data: data.data });
      })
      .catch((err) => {
        dispatch(setUser({ loading: false }));
      });
  };
};

export const UsersAction = {
  getUsers,
  getDataMaster,
  getUser,
};
