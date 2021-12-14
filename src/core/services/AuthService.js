import { apiService } from 'core/services/ApiService';

function login(email, password) {
  return apiService.post('Auth/LoginUser', {
    userName: email,
    password: password,
  });
}

export const authService = {
  login,
};
