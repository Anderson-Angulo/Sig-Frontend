import axios from 'axios';
import AppSettings from 'core/config/appsettings';

function getHeader(params) {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.accessToken)
    return { Authorization: 'Bearer ' + user.accessToken };
  return {};
}

function get(path, apiName = 'security') {
  let API_URL = AppSettings.API_URL;
  if (apiName === 'admin') API_URL = AppSettings.API_ADMIN_URL;
  return axios.get(API_URL + path, { headers: this.getHeader });
}

function post(path, data, apiName = 'security') {
  let API_URL = AppSettings.API_URL;
  if (apiName === 'admin') API_URL = AppSettings.API_ADMIN_URL;

  return axios.post(API_URL + path, data, {
    headers: this.getHeader,
  });
}

export const apiService = {
  get,
  post,
};

// }new ApiService();
