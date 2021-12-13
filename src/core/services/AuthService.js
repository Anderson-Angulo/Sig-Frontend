import { ApiService } from 'core/services/ApiService';

function login(email, password) {
  return ApiService.post('auth/login', { email: email, password: password });
}

export const AuthService = {
  login,
};
