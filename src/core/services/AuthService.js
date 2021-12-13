import { apiService } from 'core/services/api.service';

function login(email, password) {
  return apiService.post('Auth/LoginUser', {
    userName: email,
    password: password,
  });
}

export const authService = {
  login,
};
