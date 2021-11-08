
import { apiService } from 'core/services/api.service';
import { LOGIN_SUCCESS } from '../store/actions/auth.action';

function login(email, password) {
    return apiService.post("auth/login", { email: email, password: password });

}


export const authService = {
    login
};
