import { ConfigurationConstants } from 'features/configuration/commons/ConfigurationConstants';
import { UserService } from 'features/configuration/services/UserService';
import { toastAction } from 'core/store/actions/ToastAction';
import {CoreConstants} from 'core/commons/CoreConstants'



const saveUserStatus = (payload) => {
  return (dispatch) => {
    dispatch({
      type: ConfigurationConstants.Accion.Users.SAVE_USER_STATUS,
      payload,
    });
  };
};

const saveUser = (user) => {
  console.log("USER: ",user)
  return (dispatch) => {
    dispatch(saveUserStatus({ status: '' }));
    
    UserService.saveUser(user)
      .then(({ data }) => {
        const status = data?.status ?? '';
        if (status === 2) {
          dispatch(toastAction.error('Error', data.message));
        } else if (status === 0) {
          dispatch(toastAction.success('Success', '¡Registro éxitoso!'));
        }
        dispatch(saveUserStatus({ status }));
      })
      .catch(() => {});
  };
};


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
      dispatch(setDateMasters({ loading: false, ...data.data }));
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
const setFilterValues = (payload) => {
  return (dispatch, getState) => {
    // let { values } = getState().roleReducer.filterRole;
    // if (values.length > 0) {
    //   const fields = payload.map(({ field }) => field);
    //   const removeValues = values.filter((val) => fields.includes(val.field));
    //   if (removeValues.length > 0) {
    //     removeValues.forEach(({ field }) => {
    //       dispatch(removeFilterValues(field));
    //     });
    //   }
    // }
    dispatch({
      type: ConfigurationConstants.Accion.Users.SET_FILTER_VALUES,
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
      type: ConfigurationConstants.Accion.Users.REMOVE_FILTER_VALUES,
      payload,
    });
  };
}

function getResetPassword(userId) {
  return (dispatch) => {
    // dispatch({type:ConfigurationConstants.Accion.Users.REQUEST})
    UserService.resetPassword(userId).then(
      (model) => {
        evaluarResetPassword(dispatch,model)
        // evaluarSolitudRecuperarContrasena(dispatch, model);
      },
    );
  };
}
function evaluarResetPassword(dispatch,model){
      if(model.data.status===CoreConstants.HttpResponse.OK){
          return dispatch({
          type: CoreConstants.Accion.Toast.MOSTRAR_MENSAJE,
          toast: {
            titulo: 'Resetear Contraseña',
            mensaje: "Se le envio un correo al usuario respectivo para resetear su contraseña",
            severidad: 'success',
          },
        });
      }
      else if(model.data.status === CoreConstants.HttpResponse.ERROR_FUNTIONAL){
          return dispatch({
          type: CoreConstants.Accion.Toast.MOSTRAR_MENSAJE,
          toast: {
            titulo: 'Resetear Contraseña',
            mensaje: model.data.message,
            severidad: 'warn',
          },
        });
      }
      else if(model.data.status === CoreConstants.HttpResponse.ERROR_TECHNICAL){
        return dispatch({
          type: CoreConstants.Accion.Toast.MOSTRAR_MENSAJE,
          toast: {
            titulo: 'Resetear Contraseña',
            mensaje: model.data.message,
            severidad: 'danger',
          },
        });
      }
}




export const UsersAction = {
  getUsers,
  getDataMaster,
  getUser,
  saveUser,
  saveUserStatus,
  removeFilterValues,
  setFilterValues,
  getResetPassword
};
