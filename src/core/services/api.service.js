import axios from 'axios';
import AppSettings from 'core/config/appsettings';

export default class ApiService {
    header = {};

    constructor() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.accessToken)
            header = { Authorization: 'Bearer ' + user.accessToken };

    }

    get(path) {
        return axios.get(AppSettings.API_URL + path, { headers: this.header });
    }

    post(path, data) {
        return axios.post(AppSettings.API_URL + path, data, { headers: this.header });
    }

}