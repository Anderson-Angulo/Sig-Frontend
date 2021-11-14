
import { apiService } from 'core/services/api.service';

function login(email, password) {
    return apiService.post("auth/login", { email: email, password: password });
}

export const authService = {

    login
};
