import axios from 'axios';
import AppSettings from 'core/config/appsettings';

function getHeader(params) {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.accessToken)
    return { Authorization: 'Bearer ' + user.accessToken };
  return {};
}




function get(path) {
  return axios.get(AppSettings.API_URL + path, { headers: this.getHeader });
}

function post(path, data) {
  return axios.post(AppSettings.API_URL + path, data, {
    headers: this.getHeader,
  });
}

export const apiService = {
  get,
  post,
};


// }new ApiService();
