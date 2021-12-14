import axios from 'axios';
import { CoreConstants } from 'core/commons/CoreConstants';
import { toastAction } from 'core/store/actions/ToastAction';
const axiosMiddleware = (store) => {
  const { dispatch } = store;

  axios.interceptors.request.use(
    (req) => {
      const user = JSON.parse(localStorage.getItem('sig-session'));
      req.headers.Authorization = 'Bearer ' + user?.token;

      return req;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  axios.interceptors.response.use(
    (res) => {
      if (res.data.status == CoreConstants.HttpResponse.REQUIRED_FIELDS)
        dispatch(toastAction.warn(res.data.message, res.data.data.toString()));

      if (res.data.status <= CoreConstants.HttpResponse.ERROR_TECHNICAL)
        dispatch(
          toastAction.error(
            res.status + ' Se produjo un error técnico',
            'Código del error: ' + res.data.transactionId
          )
        );

      return res;
    },
    (err) => {
      dispatch(
        toastAction.error(
          'Error',
          'Se produjo un error al intentar conectarse con el servidor'
        )
      );

      return Promise.reject(err);
    }
  );
};
export default axiosMiddleware;
